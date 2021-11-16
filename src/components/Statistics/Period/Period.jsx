
import { useState } from 'react';
import s from './Period.module.scss';

const Currency = (props) => {
    
  const [month, setMonth] = useState('');
  const [year, setYear] = useState([2020,2021]);

  const allMonth=['Месяц','Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ]
  const allYears=['Год',2020,2021]
  
  const validateMounth=(e)=>{
      setMonth(e.target.value)
  }
  const validateYears=(e)=>{
    setYear(e.target.value)
}
 const handelSubmit=()=>{
     props.onSubmit(month,year)

 }
    return (
      <>
         <form onSubmit={handelSubmit} className={s.form}>
              <select 
              name="SelectedMounth"
              className={s.select}
  
              id="area"
              onChange={validateMounth}
              >
             {allMonth.map(value=><option>{value}</option>)}    
              </select>
              <select 
              name="SelectedYears"
              className={s.select}  
              id="area"
              onChange={validateYears}
              >
             {allYears.map(value=><option>{value}</option>)}    
              </select>
              
              </form>
      </>
    );
  
  
};
export default Currency;


