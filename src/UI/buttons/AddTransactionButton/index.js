import SvgIcon from '../../../UI/SvgIcon';
import styles from './styles.module.scss';

const AddTransactionButton = ({onChange}) => {
  const onClick = () => {};

  return (
    <button className={`${styles.button} ${styles.position}`}
      onClick={onChange()}
    >
      <SvgIcon iconName="plus" />
    </button>
  );
};

export default AddTransactionButton;
