import { useSelector } from 'react-redux';
import {
  getAllTransactions,
  getLoader,
} from '../../../redux/transactions/transactions-selectors';
import styles from './MobileTab.module.scss';

const MobileTab = () => {
  const transactions = useSelector(state => getAllTransactions(state));
  const isLoading = useSelector(state => getLoader(state));
  let filterTrans = [...transactions];
  filterTrans = filterTrans?.reverse();

  return isLoading ? (
    <div>
      <span> Loading... </span>
    </div>
  ) : (
    <div className={styles.container}>
      {filterTrans?.map(item => {
        const checked = () => {
          if (!item.category) {
            return 'sorry';
          }

          return item.category.name;
        };
        const border = item.isExpense ? '#ff6596' : '#24cca7';
        const text = item.isExpense ? '-' : '+';
        const colorTxt = item.isExpense ? styles.lose : styles.profit;
        return (
          <table
            key={item.id}
            className={styles.item}
            style={{ borderColor: border }}
          >
            <tbody>
              <tr>
                <th>Дата</th>
                <td>{item.date_str}</td>
              </tr>
              <tr>
                <th>Тип</th>
                <td>{text}</td>
              </tr>
              <tr>
                <th>Категория</th>
                <td>{checked()}</td>
              </tr>
              <tr>
                <th>Комментарий</th>
                <td>{item.comment}</td>
              </tr>
              <tr>
                <th>Сумма</th>
                <td className={colorTxt}>{item.amount}</td>
              </tr>
              <tr>
                <th className={styles.border__end}>Баланс</th>
                <td>{item.balanceAfter}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default MobileTab;
