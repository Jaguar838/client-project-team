import Media from 'react-media';
import HomeTab from './HomeTab';
import MobileTab from './MobileTab';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';

const TransactionTab = () => {
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  const maxMobile = useMediaQuery(mediaBreakpoints.maxMobile);
  return (
    // <Media
    //   queries={{
    //     mobile: '(max-width: 767px)',
    //   }}
    // >
    //   {({ mobile }) => <>{mobile ? <MobileTab /> : <HomeTab />}</>}
    // </Media>
    <>
    { minTablet && <HomeTab />}
    {maxMobile && <MobileTab />}
    </>
  );
};

export default TransactionTab;
