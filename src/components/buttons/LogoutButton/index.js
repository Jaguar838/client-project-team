import styles from './styles.module.scss';
import SvgIcon from '../../../UI/SvgIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';

const LogoutButton = ({ onClick }) => {
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  return (
    <button className={styles.button} onClick={onClick}>
      <SvgIcon iconName="logout" />
      {minTablet && <span className={styles.text}>Выйти</span>}
    </button>
  );
};

export default LogoutButton;
