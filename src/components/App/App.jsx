import Notifications from '../../UI/Notifications';
import Spinner from '../../UI/Spinner/';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner />
        <Notifications />
      </header>
    </div>
  );
}

export default App;
