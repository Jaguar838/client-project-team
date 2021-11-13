import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import './Navigation.scss';
import SvgIcon from '../../../UI/SvgIcon';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink
          exact
          to="/home"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          <div className="nav__icon-wrapper">
            <SvgIcon iconName="home" className="nav__icon" />
          </div>
          <p className="nav__text">Главная</p>
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/statistics"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          <div className="nav__icon-wrapper">
            <SvgIcon iconName="statistic" className="nav__icon" />
          </div>
          <p className="nav__text">Статистика</p>
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
              <li className="nav__item">
                <NavLink
                  to="/currency"
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  <div className="nav__icon-wrapper">
                    <SvgIcon iconName="currency" className="nav__icon" />
                  </div>
                  <p className="nav__text visually-hidden">Валюта</p>
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
