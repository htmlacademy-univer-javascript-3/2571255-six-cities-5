import { City } from '../models/city';
import {MockLocations} from './locations.ts';

export const MockCities: City[] = [
  {
    name: 'Hamburg',
    location: MockLocations[0]
  },
  {
    name: 'Cologne',
    location: MockLocations[1]
  },
  {
    name: 'Brussels',
    location: MockLocations[2]
  },
  {
    name: 'Amsterdam',
    location: MockLocations[3]
  },
  {
    name: 'Paris',
    location: MockLocations[4]
  },
  {
    name: 'Dusseldorf',
    location: MockLocations[5]
  }
];
