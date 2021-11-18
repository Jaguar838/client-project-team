import Media from 'react-media';
import Navigation from './Navigation';
import Currency from '../Currency';
import Balance from '../../UI/Balance';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  return (
    <aside className={style.sidebar}>
      <Navigation />

      <div className={style.balance}>
        <Balance />
      </div>
    {minTablet && <Currency />}
      {/* <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {({ tablet }) => <>{tablet && <Currency />}</>}
      </Media> */}
    </aside>
  );
};

export default Sidebar;