import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';
import Loader from 'react-loader-spinner';
import css from './Spinner.module.scss';

const colors = ["#4a56e2", "#2FB338", "#2FB39D", "#F7771E", "#F5F51A", "#F50D14", "#0DF5F5", "#A10E9A", "#928E92", "#D79300", "#C9C9C8"];

const Spinner = () => {
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  const [color, setColor] = useState('#4a56e2');
  
   const setRandomColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return setColor(randomColor);
  }
  
    useEffect(() => {
    const colorChanging = setInterval(setRandomColor, 200);
    return () => {
      clearInterval(colorChanging);
    }
    })
  
  return (
    <div className={css.Loader}>
      {minTablet ? <Loader type="BallTriangle" color={color} height={180} width={180} /> : <Loader type="BallTriangle" color={color} height={120} width={120} />}
    </div>
  );
};

export default Spinner;
