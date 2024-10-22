import { Link } from 'react-router-dom';
import {AppRoutes} from '../../constants/app-routes.ts';
import './style.css';
export function NotFoundPage() {
  return (
    <main className="page__main">
      <div className="page__not_found container">
        <h3 className='not_found__title'>Page not found</h3>
        <Link className='button form__submit' to={AppRoutes.Main}>Go to home page</Link>
      </div>
    </main>
  );
}
