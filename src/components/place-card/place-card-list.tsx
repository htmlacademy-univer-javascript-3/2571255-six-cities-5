import {PlaceCard} from './place-card.tsx';
import {Nullable} from 'vitest';
import {CardTypes} from '../../constants/card-types.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';

type PlaceCardListProps = {
  offers: OfferListItem[];
  listType: CardTypes;
  onItemHover?: (id: Nullable<string>) => void;
}

export function CardList({offers, listType, onItemHover}: PlaceCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          cardType={listType}
          onHover={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </div>
  );
}
