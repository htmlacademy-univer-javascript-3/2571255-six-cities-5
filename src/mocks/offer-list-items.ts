import { MockCities } from './cities.ts';
import { MockLocations } from './locations.ts';
import {OfferListItem} from '../models/offer-list-item.ts';

export const MockOffersList: OfferListItem[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    type: 'apartment',
    price: 120,
    city: MockCities[0],
    location: MockLocations[0],
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
    city: MockCities[1],
    location: MockLocations[1],
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
    city: MockCities[2],
    location: MockLocations[2],
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
    city: MockCities[3],
    location: MockLocations[3],
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg'
  },
  {
    id: '5',
    title: 'Charming cottage by the lake',
    type: 'cottage',
    price: 180,
    city: MockCities[4],
    location: MockLocations[4],
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg'
  },
  {
    id: '6',
    title: 'Stylish apartment in the historic district',
    type: 'apartment',
    price: 150,
    city: MockCities[5],
    location: MockLocations[5],
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg'
  }
];
