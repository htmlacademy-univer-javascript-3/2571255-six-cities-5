import { Link } from 'react-router-dom';
import {OfferListItem} from '../../models/offer-list-item.ts';
import {FavoritesCardList} from '../../components/place-card/place-card-list.tsx';

type FavoritesListProps = {
  offers: OfferListItem[];
};

export function FavoritesList({offers}: FavoritesListProps){
  const cities = Array.from(new Set(offers.map((o) => o.city.name).toSorted()));

  return (
    <ul className="favorites__list">
      {cities.map((c) => (
        <li className="favorites__locations-items" key={c}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link"
                to="/"
              >
                <span>{c}</span>
              </Link>
            </div>
          </div>
          <FavoritesCardList offers={offers}/>
        </li>
      ))}
    </ul>
  );
}
