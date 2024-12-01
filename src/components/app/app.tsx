import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {Layout} from '../layout/layout.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {AppRoutes} from '../../constants/app-routes.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {Offer} from '../../models/offer.ts';
import {Comment} from '../../models/comment.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';
import {Provider} from 'react-redux';
import {store} from '../../store';

type AppProps = {
  offerList: OfferListItem[];
  offers: Offer[];
  comments: Comment[];
};

export function App({offers, comments, offerList}: AppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index path={AppRoutes.Main} element={<MainPage/>}/>
            <Route path={AppRoutes.Login} element={<LoginPage/>}></Route>
            <Route element={<PrivateRoute/>}>
              <Route path={AppRoutes.Favourites} element={<FavoritesPage/>}></Route>
            </Route>
            <Route path={AppRoutes.Offer}
              element={<OfferPage comments={comments} offers={offers} nearbyOffers={offerList}/>}
            >
            </Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
