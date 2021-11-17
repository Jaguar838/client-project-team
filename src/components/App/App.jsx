import { lazy, Suspense, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations'
import PrivateRoute from '../../routes/PrivateRouter';
import PublicRoute from '../../routes/PublicRouter';
import Spinner from '../../UI/Spinner/';
import Container from '../Container';
import Notifications from '../../UI/Notifications';
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
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(authOperations.refreshCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <Notifications />
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* <PublicRoute path="/login" restricted>
            <LoginPage />
          </PublicRoute> */}

          <PublicRoute path="/dashboard">
            <DashboardPage />
          </PublicRoute>

          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>

          <PublicRoute path="/register" restricted>
            <RegistrationPage />
          </PublicRoute>

          {/* <Redirect from="/" to="/login" /> */}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
