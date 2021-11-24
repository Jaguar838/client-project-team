import Switch from './Switch';
import styles from './styles.module.scss';

const SwitchComponent = ({checked}) => {

  return (
    <div className={styles.block}>
      <span className={`${styles.income} ${checked && styles.checked}`}>
        Доход
      </span>
      <Switch checked={checked} />
      <span className={`${styles.expenses} ${!checked && styles.checked}`}>
        Расход
      </span>
    </div>
  );
};

export default SwitchComponent;
