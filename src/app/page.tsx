import { golfCourses } from '../coursesWithCoordinates';
import Map from './map';
type Course = {
  name: string;
  rank: number;
};

export type GolfCourse = Course & {
  coordinates: {
    lat: number;
    lng: number;
  };
};

// async function getGolfCourses() {
  // const tasks = golfCourses.map(async (course) => {
  //   const golfCourse = await getGolfCourse(course);
  //   return golfCourse;
  // });
  // const golfCourseCoordinates = await Promise.all(tasks);
  // return golfCourseCoordinates;  
// }

// async function getGolfCourse(course: Course) {  
//   try {
//     const queryText = course.name + ' golf'.replace(' ', '+')    
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?address=${queryText}&region=au&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
//     );
//     const data = await response.json();    
//     const {results} = data;
//     if (results.length === 0) {
//       throw new Error('No results found');
//     }    
//     return {
//       ...course,
//       coordinates: results[0].geometry.location
//     } as GolfCourse;
//   } catch (error) {
//     console.log('Error fetching golf course coordinates:', error, course);
//     return null;
//   }
// }

export default async function Home() {
  // const golfCourses = await getGolfCourses();  
  // const filteredGolfCourses = golfCourses.filter((course) => course !== null);
  return <Map golfCourses={golfCourses} />;
}
