import styles from './styles.module.scss';

const Switch = ({ checked }) => {
  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={checked}
        readOnly
      />
      <span className={styles.switch}></span>
    </label>
  );
};
export default Switch;
