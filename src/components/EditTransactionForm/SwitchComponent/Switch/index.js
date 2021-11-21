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
export default Switch;
