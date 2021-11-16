import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Currency from '../../components/Currency/Currency';
import Header from '../../UI/Header';
import TransactionTab from '../../components/TransactionTab';
import Container from '../../components/Container';
import style from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={style.dashboard}>
        <Container>
          <div className={style.container}>
            <Sidebar />
            <main>
              <Switch>
                <Route exact path="/dashboard" component={TransactionTab} />
                <Route exact path="/currency" component={Currency} />
              </Switch>
            </main>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;
