import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {MockComments} from './mocks/comments.ts';
import {MockOffersList} from './mocks/offer-list-items.ts';
import {MockOffers} from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerList={MockOffersList} comments={MockComments} offer={MockOffers[0]}/>
  </React.StrictMode>
);
