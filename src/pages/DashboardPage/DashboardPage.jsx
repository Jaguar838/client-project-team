import {Suspense, useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import Spinner from '../../UI/Spinner/';
import Sidebar from '../../components/Sidebar';
import Currency from '../../components/Currency/Currency';
import Header from '../../UI/Header';
import TransactionTab from '../../components/TransactionTab';
import StatisticsTab from '../../components/Statistics/StatisticsTab';
import Container from '../../components/Container';
import Divider from '../../UI/Divider';
import ModalUI from "../../UI/ModalUI";
import AddTransaction from "../../components/AddTransaction";
import AddTransactionButton from '../../UI/buttons/AddTransactionButton';
import style from './DashboardPage.module.scss';



const DashboardPage = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false)

  const handleChange = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen)
  }

  return (
    <>
      <Header />
      <div className={style.dashboard}>
        <Container>
          <div className={style.container}>
            <Sidebar />
            <Divider />
            <main>
              <Suspense fallback={<Spinner />}>
              <Switch>
                <Route exact path="/dashboard" component={TransactionTab} />
                <Route exact path="/statistics" component={StatisticsTab} />
                <Route exact path="/currency" component={Currency} />
               
              </Switch>
              </Suspense>
              <AddTransactionButton onChange={()=>handleChange}/>
              <ModalUI modalValue={isModalAddTransactionOpen} modalAction={handleChange}>
                <AddTransaction onClose={handleChange}/>
              </ModalUI>
            </main>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;