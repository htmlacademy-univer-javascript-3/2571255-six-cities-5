import {Location} from '../models/location.ts';
import {MockPoints} from './points.ts';

export const MockLocations: Location[] = [
  {
    name: 'Amsterdam',
    location: MockPoints[0]
  },
  {
    name: 'Paris',
    location: MockPoints[5]
  }
];
