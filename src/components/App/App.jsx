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



import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
import Currency from '../Currency';
import Container from '../Container';
import Period from '../Statistics/Period'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Container>
              <BrowserRouter>
               <Spinner />
               <Notifications />
               <Currency />
               <Period/>
              </BrowserRouter>
            </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;

