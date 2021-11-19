import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import Currency from '../Currency';
import Balance from '../../UI/Balance';
import authSelectors from '../../redux/auth/auth-selectors';
import MediaQuery from 'react-responsive';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const totalBalance = useSelector(state => authSelectors.getBalance(state));

  return (
    <aside className={style.sidebar}>
      <Navigation />

      <div className={style.balance}>
        <Balance totalBalance={totalBalance} />
      </div>

      <MediaQuery minWidth={768}>
        <Currency />
      </MediaQuery>
    </aside>
  );
};

export default Sidebar;
