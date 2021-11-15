import Media from 'react-media';
import HomeTab from './HomeTab';
import MobileTab from './MobileTab';

const HomeTabs = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {({ mobile }) => <>{mobile ? <MobileTab /> : <HomeTab />}</>}
    </Media>
  );
};

export default HomeTabs;
