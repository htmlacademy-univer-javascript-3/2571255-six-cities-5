import { MockLocations } from './locations.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {MockPoints} from './points.ts';

export const MockOffersList: OfferListItem[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    type: 'apartment',
    price: 120,
    city: MockLocations[0],
    location: MockPoints[1],
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg'
  },
  {
    id: '2',
    title: 'Spacious house with a garden',
    type: 'house',
    price: 250,
    city: MockLocations[0],
    location: MockPoints[2],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg'
  },
  {
    id: '3',
    title: 'Modern studio in the heart of the city',
    type: 'studio',
    price: 90,
    city: MockLocations[0],
    location: MockPoints[3],
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
  },
  {
    id: '4',
    title: 'Luxury villa with a pool',
    type: 'villa',
    price: 500,
    city: MockLocations[0],
    location: MockPoints[4],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg'
  }
];
