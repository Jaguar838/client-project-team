import { useSelector } from 'react-redux';
import {getAllTransactions, getTotalPages} from '../../../redux/transactions/transactions-selectors';
import EditTransaction from "../../EditTransaction";
import DeleteTransaction from "../../DeleteTransaction";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Pagination from "../../../UI/Pagination";
import styles from './HomeTab.module.scss';

const HomeTab = () => {
  const transactions = useSelector(state => getAllTransactions(state));
  const totalPages = useSelector(getTotalPages);
  // const isLoading = useSelector(state => getLoader(state));
  // let filterTrans = [...transactions];
  // filterTrans.sort((a, b) => (a.date > b.date ? -1 : 1));

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
            <th>Баланс</th>
            <th><EditIcon/></th>
            <th className={styles.border__end}><DeleteForeverIcon/></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {transactions?.map(item => {
            // const checked = () => {
            //   if (!item.category) {
            //     return 'sorry';
            //   }

            //   return item.category.name;
            // };

            const text = item.isExpense ? '-' : '+';
            const colorTxt = item.isExpense ? styles.lose : styles.profit;

            // const date = new Date(item.date);
            // const parsDate = date.toLocaleDateString();
            return (
              <tr key={item.id} className={styles.tr}>
                <td>{item.date_str}</td>
                <td>{text}</td>
                <td>{item.category.name}</td>
                <td>{item.comment}</td>
                <td className={colorTxt}>{item.amount}</td>
                <td>{item.balanceAfter}</td>
                <td><EditTransaction operationId={item.id} type={text} category={item.category.name} comment={item.comment} amount={item.amount} /></td>
                <td><DeleteTransaction operationId={item.id} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPages>1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default HomeTab;
