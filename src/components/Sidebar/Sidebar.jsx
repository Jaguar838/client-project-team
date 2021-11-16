import Media from 'react-media';
import Navigation from './Navigation';
import Currency from '../Currency';
import Balance from '../../UI/Balance';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Navigation />

      <div className={style.balance}>
        <Balance />
      </div>

      <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {({ tablet }) => <>{tablet && <Currency />}</>}
      </Media>
    </aside>
  );
};

export default Sidebar;
