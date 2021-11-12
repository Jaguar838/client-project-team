import ModalUI from '../../UI/ModalUI';
import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
import './App.scss';
import Currency from './currency/currency.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner />
        <Notifications />
        <ModalUI />
      </header>
      <Currency/>
    </div>
  );
}

export default App;
