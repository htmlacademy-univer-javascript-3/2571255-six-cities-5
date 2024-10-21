import {Offer} from '../../models/offer.ts';
import {CardTypes} from '../../constants/cardTypes.ts';
import {AppRoutes} from '../../constants/appRoutes.ts';
import {CardList} from '../../components/placeCard/placeCardList.tsx';
import { Link } from 'react-router-dom';

type MainScreenProps = {
  offers: Offer[];
};

export function MainPage({offers}: MainScreenProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Main}
              >
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                    Popular
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                    Top rated first
                </li>
              </ul>
            </form>
            <CardList offers={offers} listType={CardTypes.Cities}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"/>
          </div>
        </div>
      </div>
    </main>
  );
}
