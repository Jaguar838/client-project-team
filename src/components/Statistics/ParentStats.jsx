// import Doughnut from './Chart';
// import Table from './Table';

// const ParentStats = () => {
//   return (
//     <>
//       <Doughnut />
//       <Table />
//     </>
//   );
// };
// export default ParentStats;

import Table from './Table';
import Chart from './Chart';
import { data } from './Table/statistics.json';

const expensesCategory = data.filter(item => item.isExpense);
// позже
// const balance = data[data.length - 1].balance;
console.log(expensesCategory);
// import styles from './styles.module.scss';

const ParentStats = () => {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        // data: [132, 196, 113, 115, 112, 350, 70, 45, 99],
        data: expensesCategory.map(item => {
          return item.amount;
        }),

        backgroundColor: expensesCategory.map(item => {
          return item.color;
        }),
        borderColor: expensesCategory.map(item => {
          return item.color;
        }),
        borderWidth: 1,
      },
      { width: 1 },
    ],
  };

  return (
    <div>
      <h2>Статистика</h2>
      <div>
        <div>
          <Chart data={data} />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ParentStats;
