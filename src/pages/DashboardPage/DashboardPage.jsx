import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Currency from '../../components/Currency/Currency';
import Header from '../../UI/Header';
import TransactionTab from '../../components/TransactionTab';
import StatisticsTab from '../../components/Statistics/StatisticsTab';
import Container from '../../components/Container';
import Divider from '../../UI/Divider';
import AddTransactionButton from '../../UI/buttons/AddTransactionButton';
import style from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={style.dashboard}>
        <Container>
          <div className={style.container}>
            <Sidebar />
            <Divider />
            <main>
              <Switch>
                <Route exact path="/dashboard" component={TransactionTab} />
                <Route exact path="/statistics" component={StatisticsTab} />
                <Route exact path="/currency" component={Currency} />
              </Switch>
              <AddTransactionButton />
            </main>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;
