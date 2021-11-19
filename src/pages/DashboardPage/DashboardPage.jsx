
import { useEffect, Suspense, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../redux/categories/categories-operations';
import {getTransactionOperation} from '../../redux/transactions/transactions-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Spinner from '../../UI/Spinner/';
import Sidebar from '../../components/Sidebar';
import Currency from '../../components/Currency/Currency';
import Header from '../../UI/Header';
import TransactionTab from '../../components/TransactionTab';
import StatisticsTab from '../../components/Statistics/StatisticsTab';
import Container from '../../components/Container';
import Divider from '../../UI/Divider';
import ModalUI from '../../UI/ModalUI';
import AddTransaction from '../../components/AddTransaction';
import AddTransactionButton from '../../UI/buttons/AddTransactionButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';

import style from './DashboardPage.module.scss';

const DashboardPage = () => {
  const maxMobile = useMediaQuery(mediaBreakpoints.maxMobile);
  const token = useSelector(state => authSelectors.getToken(state));
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(apiOperations.getCategories(token));
    dispatch(getTransactionOperation(token));
  }, []);

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const handleChange = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

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
                <Routes>
                  <Route index element={<TransactionTab />} />
                  <Route path="home" element={<TransactionTab />} />
                  <Route path="statistics" element={<StatisticsTab />} />
                  <Route path="currency" element={maxMobile && <Currency />} />
                </Routes>
              </Suspense>
              { (pathname==='/dashboard/home' || pathname==='/dashboard') &&
                <AddTransactionButton onChange={() => handleChange} />
              }
              <ModalUI
                modalValue={isModalAddTransactionOpen}
                modalAction={handleChange}
              >
                <AddTransaction onClose={handleChange} />
              </ModalUI>
            </main>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;
