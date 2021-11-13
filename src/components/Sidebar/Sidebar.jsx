import Media from 'react-media';
import Navigation from './Navigation';
import Currency from '../Currency';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Navigation />
      {/* <Balance /> */}
      <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {({ tablet }) => <>{tablet && <Currency />}</>}
        {/* <Currency /> */}
      </Media>
    </aside>
  );
};

export default Sidebar;
