import Media from 'react-media';
import Navigation from './Navigation';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Navigation />
      {/* <Balance /> */}
      <Media>{/* <Currency /> */}</Media>
    </aside>
  );
};

export default Sidebar;
