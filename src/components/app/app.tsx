import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/mainPage/mainPage.tsx';
import {LoginPage} from '../../pages/loginPage/loginPage.tsx';
import {OfferPage} from '../../pages/offerPage/offerPage.tsx';
import {Layout} from '../layout/layout.tsx';
import {NotFoundPage} from '../../pages/notFoundPage/notFoundPage.tsx';
import {AppRoutes} from '../../constants/appRoutes.ts';
import {AuthStatus} from '../../constants/authStatus.ts';
import {PrivateRoute} from '../privateRoute/privateRoute.tsx';
import {FavoritesPage} from '../../pages/favoritesPage/favoritesPage.tsx';
import {Offer} from '../../models/offer.ts';
import {Comment} from '../../models/comment.ts';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
};

export function App({offers, comments}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={AppRoutes.Main} element={<MainPage offers={offers}/>}/>
          <Route path={AppRoutes.Login} element={<LoginPage/>}></Route>
          <Route element={<PrivateRoute authStatus={AuthStatus.Auth}/>}>
            <Route path={AppRoutes.Favourites} element={<FavoritesPage offers={offers}/>}></Route>
          </Route>
          <Route path={AppRoutes.Offer} element={<OfferPage comments={comments} offer={offers[0]}/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
