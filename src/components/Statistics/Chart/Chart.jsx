import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';
import expenses from '../Table/expenses.js';

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

function withChartSizeControl(Component) {
  return props => (
    <div
      className={style.chart}
      style={{
        height: props.height + 'px',
        width: props.width + 'px',
      }}
    >
      <div className={style.balance}>₴ 25.0000</div>

      <Component {...props} />
    </div>
  );
}

const NewDoughnut = withChartSizeControl(Doughnut);

const DoughnutChart = () => (
  <>
    <div className={style.header}>
      <h1 className={style.title}>Статистика</h1>
    </div>
    <NewDoughnut className={style.newDoughnut} data={data} />
  </>
);

export default DoughnutChart;
