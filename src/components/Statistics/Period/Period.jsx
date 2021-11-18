
import { useEffect, useState } from 'react';
import s from './Period.module.scss';

const Period = (props) => {
  /* Все пропы:
  1. setYear
  2. setMonth
  3. years
  */
  
    
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  //conts [date,setDate]=useState('');

  const allMonth = ['Месяц', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const allYears = ['Год', ...props.years];


  useEffect(()=>{
    const date= new Date();
 setMonth(date.getUTCMonth());
 setYear(date.getFullYear())


   
// eslint-disable-next-line  
  },[])

 

  
  
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
             {allMonth.map(value=>
                 
             <option key={value}>{value}</option>)}    
              </select>
              <select 
              name="SelectedYears"
              className={s.select}  
              id="area"
              onChange={validateYears}
              >
             {allYears.map(value=><option key={value}>{value}</option>)}    
              </select>
              
              </form>
      </>
    );
  
  
};
export default Period;