import styles from './styles.module.scss';
import Plus from '../../../components/AddTransaction/SwitchComponent/Switch/plus.svg';

const AddTransactionButton = ({ onChange }) => {
  return (
    <button
      className={`${styles.button} ${styles.position}`}
      onClick={onChange()}
    >
      <img className={styles.icon} src={Plus} alt="Add transaction" />
    </button>
  );
};

export default AddTransactionButton;
