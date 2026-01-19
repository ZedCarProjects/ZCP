import autofestPoster from '../assets/Autofest 2026 poster.jpeg';

export const upcomingEvents = [
  {
    id: 'autofest',
    name: 'Zed Car Projects Auto Fest vol. 4',
    date: '2026-08-22T10:00:00+02:00',
    location: 'Kenneth Kaunda (Long Acres) Mall, Lusaka',
    type: 'Car Meet Showcase',
    description:
      'Annual Auto Festival showcasing some of the best categorical builds',
    image: autofestPoster,
    featured: true
  },
  {
    id: 'copperbelt-autocross',
    name: 'Copperbelt Autocross Series Round 1',
    date: '2026-03-08T09:00:00+02:00',
    location: 'Kitwe Motocross & Autocross Grounds',
    type: 'Autocross',
    description:
      'Timed laps, cones and tight layouts designed for drivers who want to push their cars safely.',
    image:
      'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1600',
    featured: false
  }
];

export const pastEvents = [
  {
    id: 'new-year-rollout-2025',
    name: 'New Year Rollout 2025',
    date: '2025-01-04T16:00:00+02:00',
    location: 'Manda Hill to Levy Junction, Lusaka',
    type: 'Cruise',
    description:
      'Highway rollout and city cruise welcoming the new year with a mix of builds from across Zambia.',
    image:
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'copperbelt-drift-day',
    name: 'Copperbelt Drift Day',
    date: '2025-09-20T10:00:00+02:00',
    location: 'Kitwe Motocross Park',
    type: 'Drift Exhibition',
    description:
      'Grassroots drift sessions with local S-chassis, BMWs and crowd-favourite tandems.',
    image:
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];
