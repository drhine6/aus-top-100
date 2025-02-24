'use client';

import { MapboxGeocoder } from '@mapbox/search-js-web';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { GolfCourse } from './page';
// You'll need to set your Mapbox access token
// Consider using environment variables for this
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map({ golfCourses }: { golfCourses: GolfCourse[] }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const search = useRef<MapboxGeocoder | null>(null);
  console.log(golfCourses);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [133.7751, -25.2744], // Center of Australia
      zoom: 4
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add markers for each golf course
    map.current.on('load', () => {
      console.log('map loaded', golfCourses);
      golfCourses.forEach((course) => {
        addMarkerToMap(course);
      });      
    });



    function addMarkerToMap(course: GolfCourse) {
        const popup = new mapboxgl.Popup({ offset: 25 }) // Adjust offset to account for marker height
            .setHTML(`
                <h3 style="margin: 0; color: #000;">#${course.rank} ${course.name}</h3>                
            `);
    
        

        new mapboxgl.Marker({                        
            color: getMarkerColor(course.rank),            
        })
            .setLngLat([course.coordinates.lng, course.coordinates.lat])
            .setPopup(popup)
            .addTo(map.current!);
    }

    function getMarkerColor(rank: number) {
        if (rank <= 10) return '#FFD700'; // Gold for top 10
        if (rank <= 25) return '#C0C0C0'; // Silver for 11-25
        if (rank <= 50) return '#CD7F32'; // Bronze for 26-50
        return '#3FB1CE'; // Default blue for the rest
    }

    // Clean up on unmount
    return () => map.current?.remove();
  }, []);


  return (
    <div className="relative w-full h-screen">      
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Loading indicator */}
      {loading && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-4 rounded-full shadow-lg z-10">
          <div className="text-center">
            Loading golf courses...
            <div className="mt-2 text-sm text-gray-600">
              {progress} / 100
            </div>
          </div>
        </div>
      )}

      {/* Error container */}
      {error && (
        <div className="fixed bottom-5 left-5 max-w-sm bg-white/90 p-4 rounded-lg shadow-lg z-10 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Legend */}
      <div className="fixed bottom-5 right-5 bg-white/90 p-4 rounded-lg shadow-lg z-10">
        <div className="space-y-2">
          <LegendItem color="#FFD700" text="Top 10" />
          <LegendItem color="#C0C0C0" text="Rank 11-25" />
          <LegendItem color="#CD7F32" text="Rank 26-50" />
          <LegendItem color="#3FB1CE" text="Rank 51-100" />
        </div>
      </div>
    </div>
  );
}

function LegendItem({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="w-4 h-4 rounded-full" 
        style={{ backgroundColor: color }}
      />
      <div className="text-sm text-gray-700">{text}</div>
    </div>
  );
}
