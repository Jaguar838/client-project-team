import css from './styles.module.scss';
import PropTypes from "prop-types";

import pencil from "./pencil.png";

const ChabgeInputButton = ({ onChange, pencil }) => {
  return (
    <button type="button" className={css.button} onClick={onChange}>
      <img src={pencil} alt="pencil" />
    </button>
  );
};

ChabgeInputButton.defaultProps = {
  pencil: pencil,
};

ChabgeInputButton.propTypes = {
  pencil: PropTypes.string
};

export default ChabgeInputButton;