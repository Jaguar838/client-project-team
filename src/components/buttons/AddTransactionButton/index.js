import SvgIcon from '../../SvgIcon';
import styles from './styles.module.scss';

const AddTransactionButton = () => {
  const onClick = () => {};

  return (
    <button className={`${styles.button} ${styles.position}`} onClick={onClick}>
      <SvgIcon iconName="plus" />
    </button>
  );
};

export default AddTransactionButton;
