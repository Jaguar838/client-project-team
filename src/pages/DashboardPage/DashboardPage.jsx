import { Route, Switch } from 'react-router-dom';
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="dashboard">
        <div className="main-container">
          {/* <Sidebar /> */}
          <main>
            <Switch></Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
