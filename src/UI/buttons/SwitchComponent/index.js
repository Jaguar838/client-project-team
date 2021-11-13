import { useState } from 'react';
import Switch from './Switch';
import styles from './styles.module.scss';

const SwitchComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.block}>
      <span className={`${styles.income} ${!isChecked && styles.checked}`}>
        Доход
      </span>
      <Switch onChange={onChange} checked={isChecked} />
      <span className={`${styles.expenses} ${isChecked && styles.checked}`}>
        Расход
      </span>
    </div>
  );
};

export default SwitchComponent;
