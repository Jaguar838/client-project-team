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
    
    });
  };
  if (curs) {
    return (
      <>
        <div className={s.div}>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={s.th}>Валюта</th>
                <th className={s.th}>Покупка</th>
                <th className={s.th}>Продажа</th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {curs.map(item => (
                <tr key={item.id}>
                  <td className={s.td}>{item.ccy}</td>
                  <td className={s.td}>{(Math.floor((item.buy) * 100) / 100)}</td>
                  <td className={s.td}>{(Math.floor((item.sale) * 100) / 100)}</td>
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
