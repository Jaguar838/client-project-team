import { lazy, Suspense, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/auth-operations'

import PrivateRoute from '../../routes/PrivateRouter';
import PublicRoute from '../../routes/PublicRouter';
import Spinner from '../../UI/Spinner/';
import Notifications from '../../UI/Notifications';
import TransactionTab from '../TransactionTab/TransactionTab';
import StatisticsTab from '../Statistics/StatisticsTab';
import Currency from '../Currency/Currency';
const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const RegistrationPage = lazy(() =>
  import(
    '../../pages/RegistrationPage' /* webpackChunkName: "RegistrationPage" */
  ),
);

const DashboardPage = lazy(() =>
  import(
    '../../pages/DashboardPage/DashboardPage' /* webpackChunkName: "DashboardPage" */
  ),
);

function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Notifications />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute path="/login" restricted>
            <LoginPage />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegistrationPage />
          </PublicRoute>

          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path="/statistics">
            <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path="/currency" restricted>
            <DashboardPage />
          </PrivateRoute>

          <Redirect from="/" to="/login" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
