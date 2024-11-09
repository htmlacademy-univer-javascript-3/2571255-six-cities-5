import {PlaceCard} from './place-card.tsx';
import {Nullable} from 'vitest';
import {CardTypes} from '../../constants/card-types.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';

type GenericPlaceCardListProps = {
  offers: OfferListItem[];
  listType: CardTypes;
  onItemHover?: (id: Nullable<string>) => void;
  width: number;
  height: number;
  className?: string;
}

type PlaceCardListProps = Omit<GenericPlaceCardListProps, 'width' | 'height' | 'className' | 'listType'>

function CardList({offers, listType, onItemHover, width, height, className}: GenericPlaceCardListProps) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          width={width}
          height={height}
          cardType={listType}
          onHover={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </div>
  );
}

export const NearbyCardList = (props: PlaceCardListProps) => (
  <CardList
    {...props}
    width={260}
    height={200}
    listType={CardTypes.Nearby}
    className='near-places__list places__list'
  />
);

export const CitiesCardList = (props: PlaceCardListProps) => (
  <CardList
    {...props}
    width={260}
    height={200}
    className='cities__places-list places__list tabs__content'
    listType={CardTypes.Cities}
  />
);

export const FavoritesCardList = (props: PlaceCardListProps) => (
  <CardList
    {...props}
    width={150}
    height={110}
    listType={CardTypes.Favorites}
    className='favorites__places'
  />
);
