import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiOperations from '../../../redux/categories/categories-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';
import {
  getCategories,
  getTransactionStats,
} from '../../../redux/categories/categories-selectors';
import { getYears } from '../../../redux/transactions/transactions-selectors';
import Table from '../Table';
import DoughnutChart from '../Chart';
import Period from '../Period';
import NoStatsPlaceholder from '../NoStatsPlaceholder';
import styles from './styles.module.scss';

const StatisticsTab = () => {
  const minDesktop = useMediaQuery(mediaBreakpoints.minDesktop);

  const balance = useSelector(state => authSelectors.getBalance(state));
  const years = useSelector(state => getYears(state)) || [];
  const categories = useSelector(state => getCategories(state));
  const transactionStats = useSelector(state => getTransactionStats(state));

  const date = new Date();
  const [month, setMonth] = useState(() => date.getUTCMonth() + 1);
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const params = { year, month };
    dispatch(apiOperations.getTransactionStats(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  let data, totalForAllCategories;

  if (categories.expenses && transactionStats.expenseStats) {
    data = categories.expenses.map((el, index) => {
      const { expenseStats } = transactionStats;
      return { ...el, ...expenseStats[index] };
    });
    totalForAllCategories = transactionStats.expenseStats.reduce(
      (acc, item) => {
        return (acc += item.amount);
      },
      0,
    );
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

  const dataNutPlaceholder = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [balance],
        backgroundColor: ['#dcdcdf'],
        borderColor: ['#000'],
        borderWidth: 0,
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
        display: minDesktop ? true : false,
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
                dataNut={totalForAllCategories ? dataNut : dataNutPlaceholder}
                options={options}
                balance={balance}
                totalForAllCategories={totalForAllCategories}
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
      {balance === 0 && <NoStatsPlaceholder />}
    </div>
  );
};

export default StatisticsTab;
