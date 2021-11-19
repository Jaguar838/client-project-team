import HomeTab from './HomeTab';
import MobileTab from './MobileTab';

import MediaQuery from 'react-responsive';

const TransactionTab = () => {
  return (
    <MediaQuery maxWidth={767}>
      {matches => (matches ? <MobileTab /> : <HomeTab />)}
    </MediaQuery>
  );
};

export default TransactionTab;
