import { useState } from 'react';
import s from './Period.module.scss';

import Select from 'react-select';
import customStyles from './SelectStyles/customStyles';
import SvgIcon from '../../../UI/SvgIcon';

const allMonths = [
  { name: 'Все месяцы', id: '0' },
  { name: 'Январь', id: '1' },
  { name: 'Февраль', id: '2' },
  { name: 'Март', id: '3' },
  { name: 'Апрель', id: '4' },
  { name: 'Май', id: '5' },
  { name: 'Июнь', id: '6' },
  { name: 'Июль', id: '7' },
  { name: 'Август', id: '8' },
  { name: 'Сентябрь', id: '9' },
  { name: 'Октябрь', id: '10' },
  { name: 'Ноябрь', id: '11' },
  { name: 'Декабрь', id: '12' },
];

const Period = ({ setRequestedMonth, setRequestedYear, years }) => {
  const date = new Date();
  const [monthState, setMonthState] = useState(
    () => allMonths[date.getUTCMonth() + 1].name,
  );
  const [yearsState, setYearState] = useState(() => date.getFullYear());

  const allYears = () => {
    const yearsArr = ['Год', ...years];
    let newYearsArr = [];

    yearsArr.map(year =>
      newYearsArr.push({ name: year, id: yearsArr.indexOf(year) }),
    );
    return newYearsArr;
  };

  const validateMonth = e => {
    const { value, label } = e;
    const monthId = value;
    setMonthState(label);

    if (monthId === '1') {
      setRequestedMonth('');
      return;
    }
    setRequestedMonth(monthId);
  };

  const validateYears = e => {
    if (e.label === 'Год') {
      return;
    }
    setRequestedYear(e.label);
    setYearState(e.label);
  };

  const sortMonth = arr => {
    let optionsMonth = [];
    arr.forEach(({ id, name }) =>
      optionsMonth.push({
        value: id,
        label: name,
      }),
    );

    return optionsMonth;
  };

  const sortYears = arr => {
    let optionsYears = [];
    arr.forEach(({ id, name }) =>
      optionsYears.push({
        value: id,
        label: name,
      }),
    );
    return optionsYears;
  };

  return (
    <>
      <form className={s.form}>
        <div className={s.inputWrapper}>
          <Select
            defaultValue={'Месяц'}
            name="SelectedMounth"
            onChange={validateMonth}
            options={sortMonth(allMonths)}
            placeholder="Месяц"
            styles={customStyles}
          />
          <SvgIcon iconName="categoryArrow" />
        </div>

        <div className={s.inputWrapper}>
          <Select
            defaultValue={'Год'}
            name="SelectedMounth"
            onChange={validateYears}
            options={sortYears(allYears())}
            placeholder="Год"
            styles={customStyles}
          />
          <SvgIcon iconName="categoryArrow" />
        </div>
      </form>
    </>
  );
};
export default Period;
