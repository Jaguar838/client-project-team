import { useSelector } from 'react-redux';
import {
  getAllTransactions,
  getLoader,
} from '../../../redux/transactions/transactions-selectors';

import styles from './HomeTab.module.scss';

const HomeTab = () => {
  const transactions = useSelector(state => getAllTransactions(state));
  const isLoading = useSelector(state => getLoader(state));
  let filterTrans = [...transactions];
  filterTrans.sort((a, b) => (a.date > b.date ? -1 : 1));
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
            <tr>
              <td> Loading... </td>
            </tr>
          ) : (
            filterTrans?.map(item => {
              const checked = () => {
                if (!item.category) {
                  return 'sorry';
                }

                return item.category.name;
              };

              const text = item.isExpense ? '-' : '+';
              const colorTxt = item.isExpense ? styles.lose : styles.profit;

              // const date = new Date(item.date);
              // const parsDate = date.toLocaleDateString();
              return (
                <tr key={item.id} className={styles.tr}>
                  <td>{item.date_str}</td>
                  <td>{text}</td>
                  <td>{checked()}</td>
                  <td>{item.comment}</td>
                  <td className={colorTxt}>{item.amount}</td>
                  <td>{item.balanceAfter}</td>
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
