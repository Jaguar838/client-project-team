import styles from './styles.module.scss';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';

const Divider = () => {
  const desktopWidth = useMediaQuery(mediaBreakpoints.minDesktop);
  return desktopWidth && <div className={styles.divider} />;
};

export default Divider;
