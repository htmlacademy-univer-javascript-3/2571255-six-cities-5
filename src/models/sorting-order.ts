import {OfferListItem} from './offer-list-item.ts';

export const sortingOrders = {
  Popular: () => 0,
  'Price: low to high': (a: OfferListItem, b: OfferListItem) => a.price - b.price,
  'Price: high to low': (a: OfferListItem, b: OfferListItem) => b.price - a.price,
  'Top rated first': (a: OfferListItem, b: OfferListItem) => b.rating - a.rating,
};
export type SortingOrder = keyof typeof sortingOrders;
