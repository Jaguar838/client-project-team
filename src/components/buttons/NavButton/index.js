import {
  button,
  buttonPrimary,
  buttonSecondary,
  regBtnWidth,
  defaultWidth,
} from './styles.module.scss';

const MainButton = ({ onClick, secondary, forAuth, submit, text }) => {
  return (
    <button
      className={`${button} ${secondary ? buttonSecondary : buttonPrimary} ${
        forAuth ? regBtnWidth : defaultWidth
      }`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
