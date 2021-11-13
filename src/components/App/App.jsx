// import ModalUI from '../../UI/ModalUI';
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
// import './App.scss';
import Currency from '../Currency';
// import Table from '../Statistics/Table';
// import SwitchComponent from '../../UI/buttons/SwitchComponent';
// import MainButton from '../../UI/buttons/MainButton';
// import LogoutButton from '../../UI/buttons/LogoutButton';
// import AddTransactionButton from '../../UI/buttons/AddTransactionButton';
import Container from '../Container';

function App() {
  return (
  <Container>
      <Spinner />
      <Notifications />
      <Currency />
  </Container>
  );
}

export default App;
