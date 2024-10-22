import {AuthStatus} from '../../constants/auth-status.ts';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoutes} from '../../constants/app-routes.ts';

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
