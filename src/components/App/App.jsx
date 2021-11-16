import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { store, persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch } from 'react-redux';
import Spinner from '../../UI/Spinner/';
// import authOperations from '../../redux/auth/auth-operations'
import Container from '../Container';
import PrivateRoute from '../../routes/PrivateRouter';
import PublicRoute from '../../routes/PublicRouter';
import Header from '../../UI/Header';
import LoginForm from '../LoginForm'
import RegistrationForm from '../RegistrationForm'

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

              <LoginForm />

              <RegistrationForm />
              
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <RegistrationPage />
              </PublicRoute>

              <PrivateRoute path="/dashboard">
                <DashboardPage />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
