import {Location} from './location.ts';
import {Host} from './host.ts';
import {Point} from './point.ts';

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: Location;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
};
