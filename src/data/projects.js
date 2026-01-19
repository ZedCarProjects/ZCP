import katman1 from '../assets/KATMAN 1.jpg';
import katman2 from '../assets/KATMAN 2.jpg';
import katman3 from '../assets/KATMAN 3.jpg';
import katman4 from '../assets/KATMAN 4.jpg';
import katman5 from '../assets/KATMAN 5.jpg';
import katman6 from '../assets/KATMAN 6.jpg';
import katman7 from '../assets/KATMAN 7.jpg';
import sam1 from '../assets/SAM 1.jpg';
import sam2 from '../assets/SAM 2.jpg';
import sam3 from '../assets/SAM 3.jpg';
import sam4 from '../assets/SAM 4.jpg';
import sam5 from '../assets/SAM 5.jpg';
import sam6 from '../assets/SAM 6.jpg';
import sam7 from '../assets/SAM 7.jpg';

export const projects = [
  {
    id: 'lexus-is350g',
    name: 'Lexus IS 350G',
    owner: 'Katman',
    location: 'Lusaka, Zambia',
    category: 'Street',
    heroImage: katman1,
    images: [katman1, katman2, katman3, katman4, katman5, katman6, katman7],
    summary: 'Static VIP sedan built for Lusaka day and night cruises and clean daily driving.',
    description:
      'A clean Lexus IS350G  on aggressive fitment, subtle aero and a focus on comfort. Built to cruise the streets of Lusaka while still turning heads at every meet.',
    specs: ['3.5L V-6', 'Air suspension', 'Custom Wrap', 'Bucket Seats', 'Stage 2 Tune', 'Music System', 'Bluetooth Headlights/Taillights', 'Aftermarket Rims', 'Gaming Station Console', 'Carbon Fiber Spoiler', 'Aftermarket Widebody Kit', 'Remote Controlled Exhaust'],
    status: 'Active build'
  },
  {
    id: 'corolla ae110',
    name: 'Toyota Corolla AE110',
    owner: 'Samson',
    location: 'Lusaka, Zambia',
    category: 'Street',
    heroImage: sam1,
    images: [sam1, sam2, sam3, sam4, sam5, sam6, sam7],
    summary: 'Stance build for show and good drives.',
    description:
      'Stripped interior, bucket seats, angle kit and a focus on reliability for local days. This build showcases what Zambian grassroots motorsport can do with the right setup.',
    specs: ['2.0L', 'Aftermarket Rims', 'Aftermarket Steering', 'Sound System', 'Air Suspension'],
    status: 'Track-ready'
  },
];
