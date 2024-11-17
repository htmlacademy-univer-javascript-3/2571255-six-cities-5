import {OfferListItem} from './offer-list-item.ts';
import {SortingOrder} from './sorting-order.ts';

export type State = {
  city: string;
  offers: OfferListItem[];
  sortingOrder: SortingOrder;
};
