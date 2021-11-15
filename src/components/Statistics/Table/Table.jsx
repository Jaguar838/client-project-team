// то как я вижу массив данных статистики с бэка
import { data } from './statistics.json';

import style from './Table.module.scss';

// сюда приходит проп
function Table() {
  const expensesCategory = data.filter(item => item.isExpense);
  const incomes = data.find(item => item.category === 'Доходы');
  const expenses = data.find(item => item.category === 'Расходы');

  return (
    <div className={style.mainContainer}>
      <table>
        <thead className={style.head}>
          <tr className={style.raw}>
            <th className={style.tableHead}>Категория</th>
            <th className={style.tableHead}>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {expensesCategory?.map(({ category, amount, color, id }) => (
            <tr key={id} className={style.raw}>
              <td className={style.commonContainer}>
                {' '}
                <div style={{ background: color }} className={style.box}></div>
                <p>{category}</p>
              </td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={style.raw}>
            <td className={style.manyCategory}> Расходы:</td>
            <td className={style.expenses}>{expenses.amount}</td>
          </tr>
          <tr className={style.raw}>
            <td className={style.manyCategory}>Доходы:</td>
            <td className={style.income}>{incomes.amount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Table;
