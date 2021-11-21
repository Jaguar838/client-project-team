import Switch from './Switch';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SwitchComponent = ({onChange,checked}) => {

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

SwitchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SwitchComponent;
