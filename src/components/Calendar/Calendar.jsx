import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import PropTypes from 'prop-types'
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import css from "./Calendar.module.scss";
import SvgIcon from "../../UI/SvgIcon";
registerLocale('ru', ru)

const Calendar = ({ selected,onChange }) => {
  const [startDate, setStartDate] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
    onChange(e)
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div className={css.calendarContainer}>
        <DatePicker
          // customInput={<SvgIcon
          //   iconName={'calendar'}
          // />}
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          className={css.calendarInput}
          name="date"
          open={false}
          locale="ru"
          // wrapperClassName={css.datePicker}
          onChange={handleChange}
          // calendarClassName={css.datePicker}
        />
        <button
          className={css.inputIcon}
          onClick={handleClick}
        >
          <SvgIcon
            iconName={'calendar'}
          />
        </button>
      {isOpen && (
          <div className={css.datePicker}>
            <DatePicker
          closeOnScroll={true}
          selected={startDate}
          onChange={handleChange}
          locale="ru"
          inline />
        </div>
      )}
      </div>

    </>
  );
};

Calendar.propTypes = {
  onChange:PropTypes.func.isRequired,
}

export default Calendar;