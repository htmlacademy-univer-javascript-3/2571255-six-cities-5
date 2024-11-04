import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {Layout} from '../layout/layout.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {AppRoutes} from '../../constants/app-routes.ts';
import {AuthStatus} from '../../constants/auth-status.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {Offer} from '../../models/offer.ts';
import {Comment} from '../../models/comment.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';
import {MockLocations} from '../../mocks/locations.ts';

type AppProps = {
  offerList: OfferListItem[];
  offer: Offer;
  comments: Comment[];
};

export function App({offer, comments, offerList}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={AppRoutes.Main} element={<MainPage offers={offerList} city={MockLocations[0]}/>}/>
          <Route path={AppRoutes.Login} element={<LoginPage/>}></Route>
          <Route element={<PrivateRoute authStatus={AuthStatus.Auth}/>}>
            <Route path={AppRoutes.Favourites} element={<FavoritesPage offers={offerList}/>}></Route>
          </Route>
          <Route path={AppRoutes.Offer} element={<OfferPage comments={comments} offer={offer}/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
