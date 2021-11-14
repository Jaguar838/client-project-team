// import { Route, Switch } from 'react-router-dom';
// import DashboardPage from '../../pages/DashboardPage';
//     <Container>
//       {/* <Spinner /> */}
//       <Notifications />
//       <Route path="/">
//         <DashboardPage />
//       </Route>
//       <Route exact path="/currency">
//         <Currency />
//       </Route>
//     </Container>


import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { store, persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import Spinner from '../../UI/Spinner/';
import authOperations from '../../redux/auth/auth-operations'
import Container from '../Container';
import PrivateRoute from "../../routes/PrivateRouter";
import PublicRoute from "../../routes/PublicRouter";


const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const RegistrationPage = lazy(() =>
  import(
    '../../pages/RegistrationPage' /* webpackChunkName: "RegistrationPage" */
  ),
);

const DashboardPage = lazy(() =>
  import('../../pages/DashboardPage/DashboardPage' /* webpackChunkName: "DashboardPage" */),
);



function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Container>
              <BrowserRouter>
               <Suspense fallback={<Spinner />} />
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

            </Switch>
              </BrowserRouter>
            </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;

