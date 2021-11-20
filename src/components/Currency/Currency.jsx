import s from './Currency.module.scss';
import { useEffect, useState } from 'react';
import API from '../../API/privatbank-api';
import { useDispatch } from 'react-redux';
import { setLoader, unsetLoader } from '../../redux/auth/auth-slice';

const Currency = () => {
  const dispatch = useDispatch();
  const [curs, setCurs] = useState([]);

  useEffect(() => {
    getFetchCurs();
    dispatch(setLoader());
    // eslint-disable-next-line
  }, []);

  const getFetchCurs = () => {
    setCurs([]);
    API.fetchAPICurs().then(res => {
      setCurs(res.slice(0, 3));
      dispatch(unsetLoader());
    }).catch(err => {
      dispatch(unsetLoader());
    });
  };

  if (curs.length) {
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
              {curs.map(({buy, sale, ccy}) => (
                <tr key={ccy}>
                  <td className={s.td}>{ccy}</td>
                  <td className={s.td}>{(Math.floor((buy) * 100) / 100)}</td>
                  <td className={s.td}>{(Math.floor((sale) * 100) / 100)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={s.vector}></div>
        </div>
      </>
    );
  }
  return null;
};
export default Currency;
