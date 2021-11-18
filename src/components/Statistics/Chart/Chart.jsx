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

import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

// maintainAspectRatio: false,
// usePointStyle: true,

const DoughnutChart = ({dataNut, options, balance}) => {
  return (
            <div className={style.chart}>
              <Doughnut data={dataNut} options={options} />
      <div className={style.balance}>₴ {balance}</div>
            </div>

  );
};

export default DoughnutChart;
