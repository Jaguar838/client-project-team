import ModalUI from '../../UI/ModalUI';
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
// import './App.scss';
import Currency from '../Currency';

function App() {
  return (
    <div>
      <Spinner />
      <Notifications />
      <Currency />
    </div>
  );
}

export default App;
