import {FavoritesList} from './favorites-list.tsx';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../constants/app-routes.ts';
import { useAppSelector } from '../../store/hooks';

export function FavoritesPage() {
  const favorites = useAppSelector((state) => state.offers.favorites);
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={favorites}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link"
          to={AppRoutes.Main}
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
