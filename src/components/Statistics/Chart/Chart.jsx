import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

const DoughnutChart = ({ dataNut, options, balance }) => {
  return (
    <div className={style.chart}>
      <Doughnut data={dataNut} options={options} />
      <div className={style.balance}>₴ {balance}</div>
    </div>
  );
};

export default DoughnutChart;
