import {useState} from 'react';
import {Offer} from '../../models/offer.ts';
import {PlaceCard} from './placeCard.tsx';
import {Nullable} from 'vitest';
import {CardTypes} from '../../constants/cardTypes.ts';

type PlaceCardListProps = {
  offers: Offer[];
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
