import {Location} from './location.ts';
import {OfferListItem} from './offer-list-item.ts';

export type State = {
  city: Location;
  offers: OfferListItem[];
};
