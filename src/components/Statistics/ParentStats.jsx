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
import expenses from './Table/statistics.json';
import styles from './styles.module.scss';

const ParentStats = () => {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        // подумать как сюда передать сумму расходов по каждой из категорий
        data: [132, 196, 113, 115, 112, 350, 70, 45, 99],
        backgroundColor: expenses.map(item => {
          return item.color;
        }),
        borderColor: expenses.map(item => {
          return item.color;
        }),
        borderWidth: 1,
      },
      { width: 1 },
    ],
  };

  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.statsWrapper}>
        <div className={styles.chartTab}>
          <Chart data={data} />
        </div>
        <div className={styles.categoriesTab}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ParentStats;
