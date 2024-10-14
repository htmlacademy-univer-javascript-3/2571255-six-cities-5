import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/mainPage/mainPage.tsx';
import {LoginPage} from '../../pages/loginPage/loginPage.tsx';
import {OfferPage} from '../../pages/offerPage/offerPage.tsx';
import {Layout} from '../layout/Layout.tsx';
import {NotFoundPage} from '../../pages/notFoundPage/notFoundPage.tsx';
import {AppRoutes} from '../../constants/AppRoutes.ts';
import {AuthStatus} from '../../constants/AuthStatus.ts';
import {PrivateRoute} from '../privateRoute/privateRoute.tsx';
import {FavouritesPage} from '../../pages/favouritesPage/favouritesPage.tsx';

type AppProps = {
  cardsCount: number;
};

export function App({cardsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={AppRoutes.Main} element={<MainPage cardsCount={cardsCount}/>}/>
          <Route path={AppRoutes.Login} element={<LoginPage/>}></Route>
          <Route element={<PrivateRoute authStatus={AuthStatus.NoAuth}/>}>
            <Route path={AppRoutes.Favourites} element={<FavouritesPage/>}></Route>
          </Route>
          <Route path={AppRoutes.Offer} element={<OfferPage/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
