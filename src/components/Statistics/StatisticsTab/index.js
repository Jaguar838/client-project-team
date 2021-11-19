import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../../redux/categories/categories-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';
import {
  getCategories,
  getIsLoading,
  getTransactionStats,
} from '../../../redux/categories/categories-selectors';
import { getYears } from '../../../redux/transactions/transactions-selectors';
import Table from '../Table';
import DoughnutChart from '../Chart';
import Period from '../Period';
import styles from './styles.module.scss';

const StatisticsTab = () => {
  const mobile = useMediaQuery(mediaBreakpoints.maxMobile);

  const balance = useSelector(state => authSelectors.getBalance(state));
  const years = useSelector(state => getYears(state)) || [];
  const categories = useSelector(state => getCategories(state));
  const transactionStats = useSelector(state => getTransactionStats(state));
  const isLoading = useSelector(state => getIsLoading(state));
  const token = useSelector(state => authSelectors.getToken(state));

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiOperations.getTransactionStats({ token }));
  }, []);

  useEffect(() => {
    const params = { token, year, month };
    dispatch(apiOperations.getTransactionStats(params));
  }, [month, year]);

  let data;
  if (categories.expenses && transactionStats.expenseStats) {
    data = categories.expenses.map((el, index) => {
      const { expenseStats } = transactionStats;
      return { ...el, ...expenseStats[index] };
    });
  }

  const dataNut = {
    labels: data?.map(item => item.name),
    datasets: [
      {
        label: '# of Votes',
        data: data?.map(item => item.amount),
        backgroundColor: data?.map(item => item.color),
        borderColor: data?.map(item => item.color),
        borderWidth: 1,
      },
      { width: 1 },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 20,
          boxHeight: 10,
          font: {
            size: 14,
          },
        },
        display: mobile ? false : true,
        position: 'top',
        align: 'start',
      },
    },
  };

  return (
    <div className={styles.statsContainer}>
      {data && balance !== 0 && (
        <>
          <h2 className={styles.title}>Статистика</h2>
          <div className={styles.statsWrapper}>
            <div className={styles.chartTab}>
              <DoughnutChart
                dataNut={dataNut}
                options={options}
                balance={balance}
              />
            </div>
            <div className={styles.categoriesTab}>
              <Period
                setRequestedMonth={setMonth}
                setRequestedYear={setYear}
                years={years}
              />
              <Table
                data={data}
                expenses={transactionStats.expenses}
                incomes={transactionStats.incomes}
              />
            </div>
          </div>
        </>
      )}
      {balance === 0 && <p>There aren't any statistics yet</p>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default StatisticsTab;
