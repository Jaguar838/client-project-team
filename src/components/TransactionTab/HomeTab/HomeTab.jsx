import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTransactionOperation from '../../../redux/transactions/transactions-operations';
import {
  getAllTransactions,
  getLoader,
} from '../../../redux/transactions/transactions-selectors';
import authSelectors from '../../../redux/auth/auth-selectors';

import Spiner from '../../../UI/Spinner';
import styles from './HomeTab.module.scss';

const HomeTab = () => {
  const transactions = useSelector(state => getAllTransactions(state));
  const isLoading = useSelector(state => getLoader(state));
  const token = useSelector(state => {
    authSelectors.getToken(state);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionOperation(token));
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.border__start}>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th className={styles.border__end}>Баланс</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {isLoading ? (
            <Spiner />
          ) : (
            transactions?.map(item => {
              const text = item.isExpense ? '-' : '+';
              const colorTxt = item.isExpense ? styles.lose : styles.profit;

              const date = new Date(item.date);
              const parsDate = date.toLocaleDateString();
              return (
                <tr key={item.id} className={styles.tr}>
                  <td>{parsDate}</td>
                  <td>{text}</td>
                  <td>{item.category}</td>
                  <td>{item.comment}</td>
                  <td className={colorTxt}>{item.amount}</td>
                  <td>{item.balance}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTab;
