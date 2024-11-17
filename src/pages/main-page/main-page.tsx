import {Tabs} from '../../components/tabs/tabs.tsx';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {changeCityAction, fillOrdersAction} from '../../store/actions.ts';
import cn from 'classnames';
import {EmptyOfferList, OfferList} from './offer-list.tsx';


export function MainPage() {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) =>
    state.offers.filter((o) =>
      o.city.name === city));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOrdersAction());
  });
  const isEmpty = offers.length === 0;
  return (
    <main
      className={cn('page__main', 'page__main--index', {
        'page__main--index-empty': isEmpty,
      })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <Tabs selectedCity={city}
        onClick={(c) => dispatch(changeCityAction(c))}
      />
      <div className="cities">
        <div
          className={cn('cities__places-container', 'container', {
            'cities__places-container--empty': offers.length === 0,
          })}
        >
          {!isEmpty ? (
            <OfferList offers={offers} city={offers[0].city}/>
          ) : (
            <EmptyOfferList city={city}/>
          )}
        </div>
      </div>
    </main>
  );
}
