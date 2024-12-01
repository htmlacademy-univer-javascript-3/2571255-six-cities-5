import {AuthStatus} from '../../constants/auth-status.ts';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoutes} from '../../constants/app-routes.ts';
import {useAppSelector} from '../../store/hooks.ts';

export function PrivateRoute() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return authStatus === AuthStatus.Auth ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.Login} />
  );
}
