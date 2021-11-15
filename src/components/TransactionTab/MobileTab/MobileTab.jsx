import Spiner from '../../../UI/Spinner';
import base from '../../../_backend-mock/transactions.json';
import styles from './MobileTab.module.scss';

const MobileTab = () => {
  const res = base.data;
  return (
    <div className={styles.container}>
      {res?.map(item => {
        const border = item.isExpense ? '#ff6596' : '#24cca7';
        const text = item.isExpense ? '-' : '+';
        const colorTxt = item.isExpense ? styles.lose : styles.profit;
        console.log(`item`, item.isExpense);
        return (
          <table
            key={item.id}
            className={styles.item}
            style={{ borderColor: border }}
          >
            <tbody>
              <tr>
                <th>Дата</th>
                <td>{item.date}</td>
              </tr>
              <tr>
                <th>Тип</th>
                <td>{text}</td>
              </tr>
              <tr>
                <th>Категория</th>
                <td>{item.category}</td>
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
                <td>{item.balance}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default MobileTab;
