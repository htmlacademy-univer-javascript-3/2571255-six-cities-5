import {FavoritesList} from './favoritesList.tsx';
import {Offer} from '../../models/offer.ts';
import { Link } from 'react-router-dom';

type FavoritesPageProps = {
  offers: Offer[];
};

export function FavoritesPage({offers}: FavoritesPageProps) {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link"
          to="main.html"
        >
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}
