import {Location} from '../../models/location.ts';
import {CitiesCardList} from '../../components/place-card/place-card-list.tsx';
import {OfferListItem} from '../../models/offer-list-item.ts';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {Map} from '../../components/map/map.tsx';
import {SortingOrderList} from '../../components/sorting-order-list/sorting-order-list.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {sortingOrders} from '../../models/sorting-order.ts';

type OfferListProps = {
  offers: OfferListItem[];
  city: Location;
};

export function OfferList({ offers, city }: OfferListProps) {
  const [selectedId, setSelectedId] = useState<Nullable<string>>();
  const order = useAppSelector((state) => state.sortingOrder);
  offers = offers.sort(sortingOrders[order]);

  const points = offers.map((o) => ({ name: o.id, point: o.location }));
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {city.name}
        </b>
        {<SortingOrderList/>}
        <div className="cities__places-list places__list tabs__content">
          <CitiesCardList offers={offers} onItemHover={setSelectedId} />
        </div>
      </section>
      <div className="cities__right-section">
        {city && (
          <Map
            city={city}
            points={points}
            selectedPoint={points.find((p) => p.name === selectedId)}
            className="cities__map"
          />
        )}
      </div>
    </>
  );
}
export function EmptyOfferList({ city }: { city: string }) {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </>
  );
}
