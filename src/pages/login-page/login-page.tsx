import { Link, useNavigate } from 'react-router-dom';
import {useAppSelector} from '../../store/hooks.ts';
import {AppRoutes} from '../../constants/app-routes.ts';
import {AuthStatus} from '../../constants/auth-status.ts';
import {useEffect} from 'react';
import {LoginForm} from './login-form.tsx';

export function LoginPage() {
  const authStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      navigate(AppRoutes.Main);
    }
  }, [authStatus, navigate]);
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm/>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoutes.Main}
            >
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
