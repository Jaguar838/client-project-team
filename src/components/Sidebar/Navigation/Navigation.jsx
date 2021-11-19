import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import SvgIcon from '../../../UI/SvgIcon';

import MediaQuery from 'react-responsive';

const Navigation = () => {
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

      <MediaQuery maxWidth={767}>
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
      </MediaQuery>
    </ul>
  );
};

export default Navigation;
