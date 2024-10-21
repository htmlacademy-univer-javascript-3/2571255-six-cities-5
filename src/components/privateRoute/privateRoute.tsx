import {AuthStatus} from '../../constants/authStatus.ts';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoutes} from '../../constants/appRoutes.ts';

type PrivateRouteProps = {
  authStatus: AuthStatus;
};

export function PrivateRoute({authStatus} : PrivateRouteProps) {
  return (
    authStatus === AuthStatus.NoAuth ?
      <Navigate to={AppRoutes.Login}></Navigate> :
      <Outlet></Outlet>
  );
}
