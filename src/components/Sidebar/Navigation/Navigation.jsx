import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import SvgIcon from '../../../UI/SvgIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';

const Navigation = () => {
   const maxMobile = useMediaQuery(mediaBreakpoints.maxMobile);
  return (
    <ul className={style.nav}>
      <li className={style.navItem}>
        <NavLink
          to="home"
          className={({ isActive }) => {
            return isActive ? style.navLinkActive : style.navLink;
          }}
        >
          <div className={style.iconWrapper}>
            <SvgIcon iconName="home" className={style.navIcon} />
          </div>
          <p className={style.navText}>Главная</p>
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink
          to="statistics"
          className={({ isActive }) => {
            return isActive ? style.navLinkActive : style.navLink;
          }}
        >
          <div className={style.iconWrapper}>
            <SvgIcon iconName="statistic" className={style.navIcon} />
          </div>
          <p className={style.navText}>Статистика</p>
        </NavLink>
      </li>
         
            {maxMobile && (
              <li className={style.navItem}>
                <NavLink
                  to="currency"
                  className={({ isActive }) => {
                    return isActive ? style.navLinkActive : style.navLink;
                  }}
                >
                  <div className={style.iconWrapper}>
                    <SvgIcon iconName="currency" className={style.navIcon} />
                  </div>
                  <p className={style.navText}>Валюта</p>
                </NavLink>
              </li>
            )}
    </ul>
  );
};

export default Navigation;
