import styles from './styles.module.scss';

const AddTransactionButton = () => {
  const onClick = () => {};

  return (
    <button className={`${styles.button} ${styles.position}`} onClick={onClick}>
      {/* TODO add icon */}
    </button>
  );
};

export default AddTransactionButton;
