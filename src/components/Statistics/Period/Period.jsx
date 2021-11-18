import { useEffect, useState } from 'react';
import s from './Period.module.scss';

const Period = ({ setRequestedMonth, setRequestedYear, years }) => {
  const [monthsState, setMonthState] = useState([]);
  const [yearsState, setYearState] = useState([]);

  const allMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  
  const allYears = ['Год', ...years];

  useEffect(() => {
    const date = new Date();
    setMonthState(date.getUTCMonth());
    setYearState(date.getFullYear());
  }, []);

  const validateMounth = e => {
    const b = allMonths.findIndex(e.target.value);
    setRequestedMonth(b + 1);
  };

  const validateYears = e => {
    setRequestedYear(e.target.value);
  };

  return (
    <>
      <form className={s.form}>
        <select
          name="SelectedMounth"
          className={s.select}
          id="area"
          onChange={validateMounth}
        >
          {allMonths.map(month => (
            <option selected={allMonths.indexOf(month) === monthsState}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="SelectedYears"
          className={s.select}
          id="area"
          onChange={validateYears}
        >
          {allYears.map(year => (
            <option selected={year === yearsState}>{year}</option>
          ))}
        </select>
      </form>
    </>
  );
};
export default Period;
