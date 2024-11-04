import {Location} from './location.ts';
import {Point} from './point.ts';

export type OfferListItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: Location;
  location: Point;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
