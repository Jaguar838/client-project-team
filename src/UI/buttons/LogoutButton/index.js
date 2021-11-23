import styles from './styles.module.scss';
import SvgIcon from '../../../UI/SvgIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';

const LogoutButton = ({ onClick }) => {
  const minDesktop = useMediaQuery(mediaBreakpoints.minDesktop);
  return (
    <button className={styles.button} onClick={onClick}>
      <SvgIcon iconName="logout" />
      {minDesktop && <span className={styles.text}>Выйти</span>}
    </button>
  );
};

export default LogoutButton;
