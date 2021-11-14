import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
import Currency from '../Currency';
import Container from '../Container';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Container>
              <BrowserRouter>
               <Spinner />
               <Notifications />
               <Currency />
              </BrowserRouter>
            </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;

