import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import Currency from '../Currency';
import Balance from '../../UI/Balance';
import authSelectors from '../../redux/auth/auth-selectors';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';
import style from './Sidebar.module.scss';

const Sidebar = () => {
   const totalBalance = useSelector(state => authSelectors.getBalance(state));
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  return (
    <aside className={style.sidebar}>
      <Navigation />

      <div className={style.balance}>
        <Balance totalBalance={totalBalance} />
      </div>
    {minTablet && <Currency />}
    </aside>
  );
};

export default Sidebar;