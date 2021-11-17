import style from './Table.module.scss';

function Table({data, expenses, incomes}) {
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
          {data.map(({ name, amount, color, id }) => (
            <tr key={id} className={style.raw}>
              {/* <td className={style.boxTd}>
                <div style={{ background: color }} className={style.box}></div>
              </td> */}
              <td className={style.commonContainer}>
                {' '}
                <div style={{ background: color }} className={style.box}></div>
                <p>{name}</p>
              </td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={style.raw}>
            <td className={style.manyCategory}> Расходы:</td>
            <td className={style.expenses}>{expenses}</td>
          </tr>
          <tr className={style.raw}>
            <td className={style.manyCategory}>Доходы:</td>
            <td className={style.income}>{incomes}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Table;
