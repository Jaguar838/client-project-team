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

function App() {
  return (
    <div>
      <Spinner />
      <Notifications />
      <Currency />
      {/* <Table /> */}
      {/* <SwitchComponent/>
      <MainButton/>
      <LogoutButton/>
      <AddTransactionButton/> */}
    </div>
  );
}

export default App;
