import css from './styles.module.scss';

const ChabgeInputButton = ({ onChange }) => {
  return (
    <button type="button" className={css.button} onClick={onChange}>
      <img src="./pencil.png" alt="pencil" />
    </button>
  );
};

export default ChabgeInputButton;