import { useState } from 'react';
import Switch from './Switch';
import styles from './styles.module.scss';

const SwitchComponent = ({onChange,checked}) => {
  const [isChecked, setIsChecked] = useState(false);
  // const onChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className={styles.block}>
      <span className={`${styles.income} ${checked && styles.checked}`}>
        Доход
      </span>
      <Switch onChange={onChange} checked={checked} />
      <span className={`${styles.expenses} ${!checked && styles.checked}`}>
        Расход
      </span>
    </div>
  );
};

export default SwitchComponent;