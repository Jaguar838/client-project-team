// import { Doughnut } from 'react-chartjs-2';
// import style from './Chart.module.scss';

// // то как я вижу массив данных статистики с бэка
// import { data } from '../Table/statistics.json';

// const expensesCategory = data.filter(item => item.isExpense);
// const balance = data[data.length - 1].balance;

// const dataNut = {
//   labels: expensesCategory.map(item => {
//     return item.category;
//   }),
//   datasets: [
//     {
//       label: '# of Votes',
//       // по типу примера из документации
//       //   data: [132, 196, 113, 115, 112, 350, 70, 45, 99],

//       // изменяя поле "amount" в statistics.json можно увидеть как соответственно изменяется диаграмма
//       data: expensesCategory.map(item => {
//         return item.amount;
//       }),

//       backgroundColor: expensesCategory.map(item => {
//         return item.color;
//       }),

//       borderColor: expensesCategory.map(item => {
//         return item.color;
//       }),
//       borderWidth: 1,
//     },
//     // { width: 1 },
//   ],
//   // options: {
//   //   maintainAspectRatio: false,
//   //   legend: {
//   //     // display: false,
//   //     position: 'left',
//   //   },
//   //   // plugins: {
//   //   //   legend: {
//   //   //     position: 'right',
//   //   //   },
//   //   // },
//   // },
// };

// function withChartSizeControl(Component) {
//   return props => (
//     <div
//       // #1 styles
//       className={style.chart}
//       // #2 styles
//       // style={{
//       //   height: props.height + 'px',
//       //   width: props.width + 'px',
//       // }}
//     >
//       <div className={style.balance}>₴ {balance}</div>
//       <Component {...props} />
//     </div>
//   );
// }

// const NewDoughnut = withChartSizeControl(Doughnut);

// // проп с data будет приходить сюда, подумать как прокинуть его в обьект настроек dataNat

// const DoughnutChart = () => (
//   <NewDoughnut
//     className={style.newDoughnut}
//     data={dataNut}
//     // width={320}
//     // height={320}
//   />
// );

// export default DoughnutChart;

// #2 0
// import { Doughnut } from 'react-chartjs-2';
// import style from './Chart.module.scss';

// function withChartSizeControl(Doughnut) {
//   return props => (
//     <div
//       className={style.chart}
//       style={{
//         height: props.height + 'px',
//         width: props.width + 'px',
//       }}
//     >
//       <div className={style.balance}>₴ 25.0000</div>

//       <Doughnut {...props} />
//     </div>
//   );
// }

// const Chart = withChartSizeControl(Doughnut);

// export default Chart;

// #3 0
// import { Doughnut } from 'react-chartjs-2';
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
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        boxWidth: 20,
        boxHeight: 10,
        font: {
          size: 14,
        },
        // usePointStyle: true,
      },
      // скрывает
      // display: false,
      position: 'top',
      align: 'start',
    },
  },
};

const DoughnutChart = () => (
  <div className={style.chart}>
    <Doughnut data={dataNut} options={options} />
    <div className={style.balance}>₴ 25.0000</div>
  </div>
);

export default DoughnutChart;

// const Chart = withChartSizeControl(Doughnut);

// export default Chart;
