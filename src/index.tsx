import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {store} from './store';
import {fetchOrdersAction, checkAuthAction, fetchFavoritesAction} from './store/api-actions.ts';

store.dispatch(fetchOrdersAction());
await store.dispatch(checkAuthAction());
await store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App/>);
