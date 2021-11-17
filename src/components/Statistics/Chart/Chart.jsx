// #2 0
// import { Doughnut } from 'react-chartjs-2';
// import style from './Chart.module.scss';

// function withChartSizeControl(Doughnut) {
//   return props => (
//     <div className={style.chart}>
//       <div className={style.balance}>₴ 25.0000</div>

//       <Doughnut {...props} />
//     </div>
//   );
// }

// const Chart = withChartSizeControl(Doughnut);

// export default Chart;

// #1 0
import Media from 'react-media';
import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

import { data } from '../Table/statistics.json';

const expensesCategory = data.filter(item => item.isExpense);
// const balance = data[data.length - 1].balance;

const dataNut = {
  labels: expensesCategory.map(item => {
    return item.category;
  }),
  datasets: [
    {
      label: '# of Votes',
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

const options = {
  plugins: {
    legend: {
      labels: {
        boxWidth: 20,
        boxHeight: 10,
        font: {
          size: 14,
        },
      },
      // display: false,
      position: 'top',
      align: 'start',
    },
  },
};
const secondOptions = {
  plugins: {
    legend: {
      labels: {
        boxWidth: 20,
        boxHeight: 10,
        font: {
          size: 14,
        },
      },
      display: false,
      position: 'top',
      align: 'start',
    },
  },
};
// maintainAspectRatio: false,
// usePointStyle: true,

const DoughnutChart = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {({ mobile }) => (
        <>
          {mobile ? (
            <div className={style.chart}>
              <Doughnut data={dataNut} options={secondOptions} />
              <div className={style.balance}>₴ 25.0000</div>
            </div>
          ) : (
            <div className={style.chart}>
              <Doughnut data={dataNut} options={options} />
              <div className={style.balance}>₴ 25.0000</div>
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default DoughnutChart;
