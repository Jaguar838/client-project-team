import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

const DoughnutChart = ({ dataNut, options, balance, totalForAllCategories }) => {
  return (
    <div className={style.chart}>
      <Doughnut data={dataNut} options={options} />
      <div className={totalForAllCategories ? style.balance : style.balanceWithoutTransactions}>₴ {balance}</div>
    </div>
  );
};

export default DoughnutChart;
