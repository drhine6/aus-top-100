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

async function getGolfCourses() {
  // const tasks = golfCourses.map(async (course) => {
  //   const golfCourse = await getGolfCourse(course);
  //   return golfCourse;
  // });
  // const golfCourseCoordinates = await Promise.all(tasks);
  // return golfCourseCoordinates;
  return [
    {
      name: 'Cape Wickham',
      rank: 1,
      coordinates: { lat: -39.5962254, lng: 143.9343723 }
    },
    {
      name: 'Royal Melbourne (West)',
      rank: 2,
      coordinates: { lat: -37.8136276, lng: 144.9630576 }
    },
    {
      name: 'Kingston Heath',
      rank: 3,
      coordinates: { lat: -37.9543429, lng: 145.0861034 }
    },
    {
      name: 'Barnbougle Dunes',
      rank: 4,
      coordinates: { lat: -41.0048619, lng: 147.4378292 }
    },
    {
      name: 'Peninsula Kingswood (North)',
      rank: 5,
      coordinates: { lat: -38.1316545, lng: 145.1573601 }
    },
    {
      name: 'New South Wales',
      rank: 6,
      coordinates: { lat: -31.2532183, lng: 146.921099 }
    },
    {
      name: 'Barnbougle Lost Farm',
      rank: 7,
      coordinates: { lat: -40.9975178, lng: 147.4608049 }
    },
    {
      name: 'Royal Melbourne (East)',
      rank: 8,
      coordinates: { lat: -37.8136276, lng: 144.9630576 }
    },
    {
      name: 'Metropolitan',
      rank: 11,
      coordinates: { lat: -37.9119242, lng: 145.0901767 }
    },
    {
      name: 'Ocean Dunes',
      rank: 13,
      coordinates: { lat: -39.8954517, lng: 143.8476322 }
    },
    {
      name: 'Cathedral',
      rank: 14,
      coordinates: { lat: -37.2424325, lng: 145.8038608 }
    },
    {
      name: 'Lake Karrinyup',
      rank: 17,
      coordinates: { lat: -31.8667841, lng: 115.7874732 }
    },
    {
      name: 'Kooyonga',
      rank: 18,
      coordinates: { lat: -34.928335, lng: 138.5329798 }
    },
    {
      name: 'The Australian',
      rank: 20,
      coordinates: { lat: -33.9181682, lng: 151.2121 }
    },
    {
      name: 'Joondalup (Quarry/Dune)',
      rank: 21,
      coordinates: { lat: -31.74033249999999, lng: 115.7699821 }
    },
    {
      name: 'The Lakes',
      rank: 22,
      coordinates: { lat: -33.9335896, lng: 151.2123797 }
    },
    {
      name: 'Barwon Heads',
      rank: 23,
      coordinates: { lat: -38.274423, lng: 144.4884287 }
    },
    {
      name: 'Woodlands',
      rank: 24,
      coordinates: { lat: -37.9995956, lng: 145.0982055 }
    },
    {
      name: 'St Andrews Beach',
      rank: 25,
      coordinates: { lat: -38.4144794, lng: 144.8237955 }
    },
    {
      name: 'The Dunes',
      rank: 26,
      coordinates: { lat: -38.40037390000001, lng: 144.8258908 }
    },
    {
      name: 'Yarra Yarra',
      rank: 27,
      coordinates: { lat: -37.9314613, lng: 145.0755004 }
    },
    {
      name: 'Royal Queensland',
      rank: 28,
      coordinates: { lat: -22.575197, lng: 144.0847926 }
    },
    {
      name: 'Hamilton Island',
      rank: 30,
      coordinates: { lat: -20.3549248, lng: 148.9330528 }
    },
    {
      name: 'Newcastle',
      rank: 31,
      coordinates: { lat: -32.869592, lng: 151.794352 }
    },
    {
      name: 'Glenelg',
      rank: 32,
      coordinates: { lat: -34.980383, lng: 138.5131191 }
    },
    {
      name: '13th Beach (Beach)',
      rank: 33,
      coordinates: { lat: -38.28520670189364, lng: 144.45847895 }
    },
    {
      name: 'Bonville',
      rank: 34,
      coordinates: { lat: -30.3754557, lng: 153.0477321 }
    },
    {
      name: 'Magenta Shores',
      rank: 35,
      coordinates: { lat: -33.3110594, lng: 151.5228404 }
    },
    {
      name: 'Lonsdale Links',
      rank: 36,
      coordinates: { lat: -38.2787832, lng: 144.602417 }
    },
    {
      name: 'The Grand',
      rank: 37,
      coordinates: { lat: -28.0161705, lng: 153.3067169 }
    },
    {
      name: 'The Cut',
      rank: 38,
      coordinates: { lat: -32.6114543, lng: 115.6309584 }
    },
    {
      name: 'Bonnie Doon',
      rank: 39,
      coordinates: { lat: -33.9331512, lng: 151.2248992 }
    },
    {
      name: 'Sanctuary Cove (Pines)',
      rank: 40,
      coordinates: { lat: -27.8641633, lng: 153.3624341 }
    },
    {
      name: 'Brookwater',
      rank: 41,
      coordinates: { lat: -27.6625292, lng: 152.8910472 }
    },
    {
      name: 'Elanora',
      rank: 43,
      coordinates: { lat: -33.700792, lng: 151.2790727 }
    },
    {
      name: 'Terrey Hills',
      rank: 44,
      coordinates: { lat: -33.6832036, lng: 151.2254937 }
    },
    {
      name: 'Moonah Links (Legends)',
      rank: 45,
      coordinates: { lat: -38.4054765, lng: 144.8526463 }
    },
    {
      name: "St Michael's",
      rank: 46,
      coordinates: { lat: -33.984761, lng: 151.2466315 }
    },
    {
      name: 'Concord',
      rank: 47,
      coordinates: { lat: -33.8521387, lng: 151.0990903 }
    },
    {
      name: 'Moonah Links (Open)',
      rank: 48,
      coordinates: { lat: -38.4054765, lng: 144.8526463 }
    },
    {
      name: 'Portsea',
      rank: 49,
      coordinates: { lat: -38.3207377, lng: 144.718304 }
    },
    {
      name: 'Port Fairy',
      rank: 50,
      coordinates: { lat: -38.3806327, lng: 142.2294039 }
    },
    {
      name: 'Links Hope Island',
      rank: 51,
      coordinates: { lat: -27.8751569, lng: 153.3495604 }
    },
    {
      name: 'The Vintage',
      rank: 53,
      coordinates: { lat: -32.7395681, lng: 151.3246891 }
    },
    {
      name: 'Spring Valley',
      rank: 54,
      coordinates: { lat: -37.9532187, lng: 145.1285205 }
    },
    {
      name: 'The Western Australian',
      rank: 55,
      coordinates: { lat: -27.6728168, lng: 121.6283098 }
    },
    {
      name: 'Sorrento',
      rank: 56,
      coordinates: { lat: -38.329149, lng: 144.735083 }
    },
    {
      name: 'Kalgoorlie',
      rank: 57,
      coordinates: { lat: -30.749, lng: 121.466 }
    },
    {
      name: 'Avondale',
      rank: 58,
      coordinates: { lat: -33.7497232, lng: 151.1304939 }
    },
    {
      name: 'Sandy Links',
      rank: 59,
      coordinates: { lat: -37.9666661, lng: 145.0315905 }
    },
    {
      name: 'Bougle Run',
      rank: 60,
      coordinates: { lat: -40.9994213, lng: 147.4626683 }
    },
    {
      name: 'Links Lady Bay',
      rank: 61,
      coordinates: { lat: -35.4620428, lng: 138.315407 }
    },
    {
      name: 'Curlewis',
      rank: 62,
      coordinates: { lat: -38.1734479, lng: 144.5428901 }
    },
    {
      name: 'Cottesloe',
      rank: 63,
      coordinates: { lat: -31.98966699999999, lng: 115.7597955 }
    },
    {
      name: 'Pelican Waters',
      rank: 65,
      coordinates: { lat: -26.8324652, lng: 153.1087393 }
    },
    {
      name: 'Pacific Dunes',
      rank: 66,
      coordinates: { lat: 43.1936178, lng: -124.3899316 }
    },
    {
      name: 'Rosebud (North)',
      rank: 67,
      coordinates: { lat: -38.3680733, lng: 144.9086168 }
    },
    {
      name: 'Lakelands',
      rank: 69,
      coordinates: { lat: -28.0399931, lng: 153.3818379 }
    },
    {
      name: 'Glades',
      rank: 70,
      coordinates: { lat: -28.0748196, lng: 153.3719337 }
    },
    {
      name: 'Mount Compass',
      rank: 71,
      coordinates: { lat: -35.3484544, lng: 138.6210469 }
    },
    {
      name: 'RACV Cape Schanck',
      rank: 72,
      coordinates: { lat: -38.4617997, lng: 144.8930945 }
    },
    {
      name: 'Killara',
      rank: 73,
      coordinates: { lat: -33.7677125, lng: 151.1580393 }
    },
    {
      name: 'Sanctuary Lakes',
      rank: 74,
      coordinates: { lat: -37.8926558, lng: 144.7652356 }
    },
    {
      name: 'Black Bull',
      rank: 75,
      coordinates: { lat: -36.003058, lng: 146.0396893 }
    },
    {
      name: 'Sanctuary Cove (Palms)',
      rank: 76,
      coordinates: { lat: -27.8582641, lng: 153.3638163 }
    },
    {
      name: 'Brisbane',
      rank: 78,
      coordinates: { lat: -27.4704528, lng: 153.0260341 }
    },
    {
      name: 'Palmer Coolum',
      rank: 80,
      coordinates: { lat: -26.5529031, lng: 153.0932291 }
    },
    {
      name: 'Stonecutters Ridge',
      rank: 81,
      coordinates: { lat: -33.7225105, lng: 150.8646587 }
    },
    {
      name: 'Mollymook (Hilltop)',
      rank: 82,
      coordinates: { lat: -35.3321772, lng: 150.4616261 }
    },
    {
      name: 'Pacific Harbour',
      rank: 83,
      coordinates: { lat: -27.0317736, lng: 153.1486646 }
    },
    {
      name: 'Narooma',
      rank: 84,
      coordinates: { lat: -36.2205883, lng: 150.1329238 }
    },
    {
      name: 'Castle Hill',
      rank: 86,
      coordinates: { lat: -33.7348232, lng: 151.0030714 }
    },
    {
      name: 'Twin Waters',
      rank: 87,
      coordinates: { lat: -26.6216209, lng: 153.0868821 }
    },
    {
      name: 'Federal',
      rank: 89,
      coordinates: { lat: -35.3315925, lng: 149.1105346 }
    },
    {
      name: 'Monash',
      rank: 90,
      coordinates: { lat: -33.68810680000001, lng: 151.2614832 }
    },
    {
      name: 'Secret Harbour',
      rank: 91,
      coordinates: { lat: -32.4119036, lng: 115.7656555 }
    },
    {
      name: 'Riversdale',
      rank: 92,
      coordinates: { lat: -37.871434, lng: 145.1142773 }
    },
    {
      name: 'Warrnambool',
      rank: 93,
      coordinates: { lat: -38.3720954, lng: 142.4777782 }
    },
    {
      name: 'RACV Royal Pines (Green/Gold)',
      rank: 94,
      coordinates: { lat: -28.0044505, lng: 153.3764535 }
    },
    {
      name: 'Royal Fremantle',
      rank: 95,
      coordinates: { lat: -32.0517901, lng: 115.755096 }
    },
    {
      name: 'Maroochy River',
      rank: 96,
      coordinates: { lat: -26.5711039, lng: 153.0156185 }
    },
    {
      name: 'Forster Tuncurry (Tuncurry)',
      rank: 97,
      coordinates: { lat: -32.1523978, lng: 152.4988505 }
    },
    {
      name: 'Murray Downs',
      rank: 98,
      coordinates: { lat: -35.3318649, lng: 143.6057699 }
    }
  ]
}

async function getGolfCourse(course: Course) {  
  try {
    const queryText = course.name + ' golf'.replace(' ', '+')    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${queryText}&region=au&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();    
    const {results} = data;
    if (results.length === 0) {
      throw new Error('No results found');
    }    
    return {
      ...course,
      coordinates: results[0].geometry.location
    } as GolfCourse;
  } catch (error) {
    console.log('Error fetching golf course coordinates:', error, course);
    return null;
  }
}

export default async function Home() {
  const golfCourses = await getGolfCourses();  
  const filteredGolfCourses = golfCourses.filter((course) => course !== null);
  return <Map golfCourses={filteredGolfCourses} />;
}
