import s from './Currency.module.scss';
import { useEffect, useState } from 'react';
import API from '../../API/privatbank-api';
import Spiner from '../../UI/Spinner';

const Currency = () => {
  const [curs, setCurs] = useState();

  useEffect(() => {
    getFetchCurs();

    // eslint-disable-next-line
  }, []);

  const getFetchCurs = () => {
    setCurs([]);
    API.fetchAPICurs().then(res => {
      setCurs(res.slice(0, 3));
      console.log(res);
      console.log(curs);
    });
  };
  if (curs) {
    return (
      <>
        <div className={s.div}>
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.th}>Валюта</th>
                <th className={s.th}>Покупка</th>
                <th className={s.th}>Продажа</th>
              </tr>
            </thead>
            <tbody>
              {curs?.map(item => (
                <tr key={item.buy}>
                  <td className={s.td}>{item.ccy}</td>
                  <td className={s.td}>{item.buy}</td>
                  <td className={s.td}>{item.sale}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={s.vector}></div>
        </div>
      </>
    );
  }
  return (
    <>
      <Spiner />
    </>
  );
};
export default Currency;
