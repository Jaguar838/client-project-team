import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Switch = ({ onChange, checked }) => {
  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.switch}></span>
    </label>
  );
};

Switch.propTypes = {
  onchange: PropTypes.func,
  checked: PropTypes.bool.isRequired,
}
export default Switch;
