import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import style from './Navigation.module.scss';
import SvgIcon from '../../../UI/SvgIcon';

const Navigation = () => {
  return (
    <ul className={style.nav}>
      <li className={style.navItem}>
        <NavLink
          exact
          to="/dashboard"
          className={style.navLink}
          activeClassName={style.navLinkActive}
        >
          <div className={style.iconWrapper}>
            <SvgIcon iconName="home" className={style.navIcon} />
          </div>
          <p className={style.navText}>Главная</p>
        </NavLink>
      </li>
      <li className={style.navItem}>
        <NavLink
          to="/statistics"
          className={style.navLink}
          activeClassName={style.navLinkActive}
        >
          <div className={style.iconWrapper}>
            <SvgIcon iconName="statistic" className={style.navIcon} />
          </div>
          <p className={style.navText}>Статистика</p>
        </NavLink>
      </li>

      <Media
        queries={{
          mobile: '(max-width: 767px)',
        }}
      >
        {({ mobile }) => (
          <>
            {mobile && (
              <li className={style.navItem}>
                <NavLink
                  to="/currency"
                  className={style.navLink}
                  activeClassName={style.navLinkActive}
                >
                  <div className={style.iconWrapper}>
                    <SvgIcon iconName="currency" className={style.navIcon} />
                  </div>
                  <p className={style.navText}>Валюта</p>
                </NavLink>
              </li>
            )}
          </>
        )}
      </Media>
    </ul>
  );
};

export default Navigation;