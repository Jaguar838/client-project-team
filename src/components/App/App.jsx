import { Route, Switch } from 'react-router-dom';
// import ModalUI from '../../UI/ModalUI';
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
// import './App.scss';
import Currency from '../Currency';
import DashboardPage from '../../pages/DashboardPage';
// import Table from '../Statistics/Table';
// import SwitchComponent from '../../UI/buttons/SwitchComponent';
// import MainButton from '../../UI/buttons/MainButton';
// import LogoutButton from '../../UI/buttons/LogoutButton';
// import AddTransactionButton from '../../UI/buttons/AddTransactionButton';
import Container from '../Container';

function App() {
  return (
    <Container>
      {/* <Spinner /> */}
      <Notifications />
      <Route path="/">
        <DashboardPage />
      </Route>
      <Route exact path="/currency">
        <Currency />
      </Route>
    </Container>
  );
}

export default App;
