import { Doughnut } from 'react-chartjs-2';
import style from './Chart.module.scss';

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

const Chart = withChartSizeControl(Doughnut);

export default Chart;
