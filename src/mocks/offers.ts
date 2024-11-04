import {Offer} from '../models/offer.ts';
import {MockLocations} from './locations.ts';
import {MockHosts} from './hosts.ts';
import {MockPoints} from './points.ts';

export const MockOffers: Offer[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    type: 'apartment',
    price: 120,
    city: MockLocations[3],
    location: MockPoints[4],
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'A lovely apartment with a great view of the city.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'TV'],
    host: MockHosts[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    maxAdults: 4
  }
];
