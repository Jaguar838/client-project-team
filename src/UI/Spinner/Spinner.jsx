import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../assets/constants';
import Loader from 'react-loader-spinner';
import css from './Spinner.module.scss';

const colors = [
  "#4a56e2",
  "#fd9498",
  "#c5baff",
  "#6e78e8",
  "#fed057",
  "#81e1ff",
  "#24cca7",
  "#00ad84",
  "#ffd8d0",
];

const Spinner = () => {
  const minTablet = useMediaQuery(mediaBreakpoints.minTablet);
  const [color, setColor] = useState(colors[0]);
  
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
      {minTablet
        ?
        <Loader type="BallTriangle" color={color} height={180} width={180} />
        :
        <Loader type="BallTriangle" color={color} height={120} width={120} />}
    </div>
  );
};

export default Spinner;
