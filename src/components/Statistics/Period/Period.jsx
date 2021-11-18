import { useState } from 'react';
import s from './Period.module.scss';

const Period = ({ setRequestedMonth, setRequestedYear, years }) => {
  const date = new Date();
  const [monthsState, setMonthState] = useState(date.getUTCMonth());
  const [yearsState, setYearState] = useState(date.getFullYear());

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
    'Все месяцы',
  ];
  
  const allYears = ['Год', ...years];

  const validateMounth = e => {
    const b = allMonths.indexOf(e.target.value);
    setMonthState(e.target.value);

    if (b === allMonths.length - 1) {
      setRequestedMonth('');
      return;
    }
    setRequestedMonth(b + 1);
  };

  const validateYears = e => {
    if (e.target.value === 'Год') {
      return;
    }
    setRequestedYear(e.target.value);
    setYearState(e.target.value);
  };

  return (
    <>
      <form className={s.form}>
        <select
          name="SelectedMounth"
          className={s.select}
          id="area"
          onChange={validateMounth}
          value={monthsState}
        >
          {allMonths.map(month => (
            <option key={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="SelectedYears"
          className={s.select}
          id="area"
          onChange={validateYears}
          value={yearsState}
        >
          {allYears.map(year => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </form>
    </>
  );
};
export default Period;
