import {
  button,
  buttonPrimary,
  buttonSecondary,
  regBtnWidth,
  defaultWidth,
} from './styles.module.scss';

const MainButton = ({ onClick, secondary, forAuth, submit, text }) => {
  const isSecondary = secondary ? buttonSecondary : buttonPrimary;
  const isAuth = forAuth ? regBtnWidth : defaultWidth;
  const classes = `${button} ${isSecondary} ${isAuth}`;

  return (
    <button
      className={classes}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
