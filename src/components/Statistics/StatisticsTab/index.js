import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../../redux/categories/categories-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import {
  getCategories,
  getIsLoading,
  getTransactionStats,
} from '../../../redux/categories/categories-selectors';
import Table from '../Table';
import Chart from '../Chart';
import Period from '../Period';
import expenses from '../Table/expenses';
import styles from './styles.module.scss';

const StatisticsTab = () => {
  const categories = useSelector(state => getCategories(state));
  const transactionStats = useSelector(state => getTransactionStats(state));
  const isLoading = useSelector(state => getIsLoading(state));
  const token = useSelector(state => authSelectors.getToken(state));

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // api request for the very first render
    dispatch(apiOperations.getCategories(token));
    dispatch(apiOperations.getTransactionStats({ token }));
  }, []);

  useEffect(() => {
    // api request depending on passed conditions
    // const params = { token, year, month };
    //   dispatch(apiOperations.getTransactionStats(params));
  }, [month, year]);

  //TODO write function that merges data and creates dataset for chart
  //   console.log('categories', categories);
  //   console.log('transactionStats', transactionStats);
  //mock

  const data = {
    datasets: [
      {
        label: '# of Votes',
        // подумать как сюда передать сумму расходов по каждой из категорий
        data: [132, 196, 113, 115, 112, 350, 70, 45, 99],
        backgroundColor: expenses.map(item => {
          return item.color;
        }),
        borderColor: expenses.map(item => {
          return item.color;
        }),
        borderWidth: 1,
      },
      { width: 1 },
    ],
  };

  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.statsWrapper}>
        <div className={styles.chartTab}>
          <Chart data={data} />
        </div>
        <div className={styles.categoriesTab}>
          <Period setMonth={setMonth} setYear={setYear} />
          <Table />
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default StatisticsTab;
