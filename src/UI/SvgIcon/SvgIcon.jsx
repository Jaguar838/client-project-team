import PropTypes from 'prop-types';
import css from "./SvgIcon.module.scss";

// [
//   'regPicture-tablet',
//   'regPicture-desc',
//   'loginPicture-desc',
//   'loginPicture-desc',
//   'calendar',

//   'logo',

// Form icon
//   'email',
//   'name',
//   'password',

// Button
//   'categoryArrow',
//   'modalClose',
//   'logout',
//   'home',
//   'currency',
//   'statistic',
//   'plus',
// ]

const SvgIcon = ({ iconName }) => {
  return (
    <svg viewBox="0 0 28.3 28.3"
      className={css[`${iconName}`]}
    >
        <use xlinkHref={`/sprite.svg#${iconName}`} />
      </svg>
  );
}

export default SvgIcon;

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
}