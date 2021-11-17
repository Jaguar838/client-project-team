import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';

import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import {useDispatch } from 'react-redux';

import Spinner from '../../UI/Spinner/';
// import authOperations from '../../redux/auth/auth-operations'
import PrivateRoute from '../../routes/PrivateRouter';
import PublicRoute from '../../routes/PublicRouter';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/dashboard">
                <DashboardPage />
              </PrivateRoute>

              <PublicRoute path="/register" restricted>
                <RegistrationPage />
              </PublicRoute>

              <Redirect from="/" to="/login" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
