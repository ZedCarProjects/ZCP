import autofestPoster from '../assets/Autofest 2026 poster.jpeg';
import autofest2025 from '../assets/Autofest 2025 poster.jpeg';

export const upcomingEvents = [
  {
    id: 'autofest',
    name: 'Zed Car Projects Auto Fest vol. 4',
    date: '2026-08-22T10:00:00+02:00',
    location: 'Location: TBA',
    type: 'Car Meet Showcase',
    description:
      'The Zed Car Projects Auto Festival is back for its 4th Edition. Bringing together more custom builds and exotic cars for a day of pure automotive passion. From clean paint jobs, to powerful sound systems and perfectly dialed stances, this is where creativity and craftsmanship shine. Cars will be on display and judged in categories like best paint, sound system, stance, overall car, and custom build. Whether you’re entering your build or just coming to admire the machines, Auto Festival is all about celebrating car culture, community, and the love of the build. Don’t miss the fourth chapter of this growing automotive movement.',
    image: autofestPoster,
    ticketLink: "https://www.nova.co.zm/events/zed-car-projects-presents-auto-festival-2026/details",
    featured: true
  },
];

export const pastEvents = [
  {
   id: 'autofest25',
    name: 'Zed Car Projects Auto Fest vol. 3',
    date: '2025-08-23T10:00:00+02:00',
    location: 'Long Acres Mall(Basement), Lusaka, Zambia',
    type: 'Autocross',
    description:
      'Timed laps, cones and tight layouts designed for drivers who want to push their cars safely.',
    image: autofest2025,
    featured: false
  },
];
