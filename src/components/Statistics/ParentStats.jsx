import Doughnut from './Chart';
import Table from './Table';
import s from './styles.module.scss';

const ParentStats = () => {
  return (
    <div className={s.parent}>
      <Doughnut />
      <Table />
    </div>
  );
};
export default ParentStats;

// #2
// import Media from 'react-media';

// import Table from './Table';
// import Chart from './Chart';
// import { data } from './Table/statistics.json';
// import s from './styles.module.scss';
// import style from './Chart/Chart.module.scss';

// const expensesCategory = data.filter(item => item.isExpense);
// console.log(expensesCategory);

// const ParentStats = () => {
//   const data = {
//     labels: expensesCategory.map(item => {
//       return item.category;
//     }),
//     datasets: [
//       {
//         label: '# of Votes',
//         data: expensesCategory.map(item => {
//           return item.amount;
//         }),

//         backgroundColor: expensesCategory.map(item => {
//           return item.color;
//         }),
//         borderColor: expensesCategory.map(item => {
//           return item.color;
//         }),
//         borderWidth: 1,
//       },
//       { width: 1 },
//     ],
//   };
//   const options = {
//     plugins: {
//       legend: {
//         labels: {
//           boxWidth: 20,
//           boxHeight: 10,
//           font: {
//             size: 14,
//           },
//         },
//         // display: false,
//         position: 'top',
//         align: 'start',
//       },
//     },
//   };
//   const secondOptions = {
//     plugins: {
//       legend: {
//         labels: {
//           boxWidth: 20,
//           boxHeight: 10,
//           font: {
//             size: 14,
//           },
//         },
//         display: false,
//         position: 'top',
//         align: 'start',
//       },
//     },
//   };

//   return (
//     <Media
//       queries={{
//         mobile: '(max-width: 767px)',
//       }}
//     >
//       {({ mobile }) => (
//         <>
//           {mobile ? (
//             <div>
//               <h2>Статистика</h2>
//               <div className={s.parent}>
//                 <Chart data={data} options={secondOptions} />
//                 <Table />
//               </div>
//             </div>
//           ) : (
//             <div className={s.parent}>
//               <h2>Статистика</h2>
//               <div>
//                 <Chart data={data} options={options} />
//                 <Table />
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </Media>
//   );
// };

// export default ParentStats;

// позже
// const balance = data[data.length - 1].balance;
