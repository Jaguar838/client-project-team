import ModalUI from '../../UI/ModalUI';
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
// import './App.scss';
import Currency from '../Currency';
// import Table from '../Statistics/Table';

function App() {
  return (
    <div>
      <Spinner />
      <Notifications />
      <Currency />
      {/* <Table /> */}
    </div>
  );
}

export default App;
