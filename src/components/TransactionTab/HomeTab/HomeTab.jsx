import Spiner from '../../../UI/Spinner';
import base from '../../../_backend-mock/transactions.json';
import styles from './HomeTab.module.scss';

const HomeTab = () => {
  const res = base.data;
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
          {res?.map(item => {
            const text = item.isExpense ? '-' : '+';
            const colorTxt = item.isExpense ? styles.lose : styles.profit;
            return (
              <tr key={item.id} className={styles.tr}>
                <td>{item.date}</td>
                <td>{text}</td>
                <td>{item.category}</td>
                <td>{item.comment}</td>
                <td className={colorTxt}>{item.amount}</td>
                <td>{item.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTab;
