import {useState} from 'react';
import {PlaceCard} from './place-card.tsx';
import {Nullable} from 'vitest';
import {CardTypes} from '../../constants/card-types.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';

type PlaceCardListProps = {
  offers: OfferListItem[];
  listType: CardTypes;
}

export function CardList({offers, listType}: PlaceCardListProps) {
  const [, setActiveCardId] = useState<Nullable<string>>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          cardType={listType}
          onMouseOver={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
        />
      ))}
    </div>
  );
}
