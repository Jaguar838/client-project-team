import { useEffect, Suspense, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../redux/categories/categories-operations';
import { getTransactionOperation } from '../../redux/transactions/transactions-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionSelectors from '../../redux/transactions/transactions-selectors';
import { getIsLoading } from '../../redux/categories/categories-selectors';
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

import { Toaster } from 'react-hot-toast';
import MediaQuery from 'react-responsive';

// import FireworksCanvas from '../../components/FireworksCanvas';
// import AvatarUploader from '../../components/AvatarUploader';

import style from './DashboardPage.module.scss';

const DashboardPage = () => {
  const token = useSelector(state => authSelectors.getToken(state));
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(apiOperations.getCategories());
    dispatch(getTransactionOperation(token));
  }, []);

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const handleChange = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const authLoading = useSelector(state => authSelectors.isLoading(state));
  const transactionsLoading = useSelector(state =>
    transactionSelectors.getLoader(state),
  );
  const categoriesLoading = useSelector(state => getIsLoading(state));
  const isFetchingData =
    authLoading || transactionsLoading || categoriesLoading;

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#24cca7',
              color: '#ffffff',
            },
            duration: 3000,
          },
        }}
      />
      {/* <FireworksCanvas/> */}
      <Header />
      <div className={style.dashboard}>
        <Container>
          {/* <AvatarUploader/> */}
          <div className={style.container}>
            <Sidebar />
            <MediaQuery minWidth={1280}>
              <Divider />
            </MediaQuery>
            <main>
              {/* <Suspense fallback={<Spinner />}> */}
              <Suspense fallback={null}>
                <MediaQuery minWidth={768}>
                  {matches =>
                    matches ? (
                      <Routes>
                        <Route index element={<TransactionTab />} />
                        <Route path="home" element={<TransactionTab />} />
                        <Route path="statistics" element={<StatisticsTab />} />
                        <Route
                          path="currency"
                          element={<Navigate to="/dashboard/home" />}
                        />
                        <Route
                          path="*"
                          element={<Navigate to="/dashboard/home" />}
                        />
                      </Routes>
                    ) : (
                      <Routes>
                        <Route index element={<TransactionTab />} />
                        <Route path="home" element={<TransactionTab />} />
                        <Route path="statistics" element={<StatisticsTab />} />
                        <Route path="currency" element={<Currency />} />
                        <Route
                          path="*"
                          element={<Navigate to="/dashboard/home" />}
                        />
                      </Routes>
                    )
                  }
                </MediaQuery>
              </Suspense>
              {/* { (pathname==='/dashboard/home' || pathname==='/dashboard') &&
                <AddTransactionButton onChange={() => handleChange} />
              } */}
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
      {isFetchingData && (
        <div className={style.spinnerWrapper}>
          <Spinner />
        </div>
      )}
      {(pathname === '/dashboard/home' || pathname === '/dashboard') && (
        <AddTransactionButton onChange={() => handleChange} />
      )}
    </>
  );
};

export default DashboardPage;
