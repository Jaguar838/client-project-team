import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../../redux/categories/categories-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import {
  getCategories,
  getIsLoading,
} from '../../../redux/categories/categories-selectors';
import Table from '../Table';
import Chart from '../Chart';
import Period from '../Period';
import styles from './styles.module.scss';

const StatisticsTab = () => {
  const categories = useSelector(state => getCategories(state));
  const isLoading = useSelector(state => getIsLoading(state));
  const token = useSelector(state => authSelectors.getToken(state));

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // api request for the very first render
    dispatch(apiOperations.getCategories(token));
    //   dispatch(operations.getTransactions());
  }, []);

  useEffect(() => {
    // api request depending on passed conditions
    // const params = { token, year, month };
    //   dispatch(apiOperations.getCategoriesWithParams(params));
    //   dispatch(apiOperations.getTransactionsWithParams(params));
  }, [month, year]);

  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.statsWrapper}>
        <div className={styles.chartTab}>
          <Chart categories={categories} />
        </div>
        <div className={styles.categoriesTab}>
          <Period setMonth={setMonth} setYear={setYear} />
          <Table categories={categories} />
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default StatisticsTab;
