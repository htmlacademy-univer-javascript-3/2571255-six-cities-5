import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {MockOffers} from './mocks/offers.ts';
import {MockComments} from './mocks/comments.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={MockOffers} comments={MockComments} />
  </React.StrictMode>
);
