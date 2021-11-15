import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

// то как я вижу массив данных статистики с бэка
import { data } from '../Table/statistics.json';

const expensesCategory = data.filter(item => item.isExpense);
const balance = data[data.length - 1].balance;

const dataNut = {
  datasets: [
    {
      label: '# of Votes',
      // по типу примера из документации
      //   data: [132, 196, 113, 115, 112, 350, 70, 45, 99],

      // изменяя поле "amount" в statistics.json можно увидеть как соответственно изменяется диаграмма
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

function withChartSizeControl(Component) {
  return props => (
    <div
      className={style.chart}
      style={{
        height: props.height + 'px',
        width: props.width + 'px',
      }}
    >
      <div className={style.balance}>₴ {balance}</div>
      <Component {...props} />
    </div>
  );
}

const NewDoughnut = withChartSizeControl(Doughnut);

// проп с data будет приходить сюда, подумать как прокинуть его в обьект настроек dataNat

const DoughnutChart = () => (
  <NewDoughnut className={style.newDoughnut} data={dataNut} />
);

export default DoughnutChart;
