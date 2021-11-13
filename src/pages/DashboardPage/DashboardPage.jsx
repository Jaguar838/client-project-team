import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <>
      {/* <Header /> Place for header */}
      <div className="dashboard">
        <div className="main-container">
          <Sidebar />
          <main>
            <Switch>
              <Route />
              <Route />
              <Route />
              {/* Here will be placed three routes: home, statistics, currency */}
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
