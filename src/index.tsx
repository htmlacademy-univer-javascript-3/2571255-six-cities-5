import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {MockComments} from './mocks/comments.ts';
import {MockOffersList} from './mocks/offer-list-items.ts';
import {MockOffers} from './mocks/offers.ts';
import {store} from './store';
import {fetchOrdersAction, checkAuthAction, fetchFavoritesAction} from './store/api-actions.ts';

store.dispatch(fetchOrdersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerList={MockOffersList} comments={MockComments} offers={MockOffers}/>
  </React.StrictMode>
);
