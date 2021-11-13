import { NavLink } from 'react-router-dom';
import Media from 'react-media';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink>Главная</NavLink>
      </li>
      <li>
        <NavLink>Статистика</NavLink>
      </li>
      <Media>
        <li>
          <NavLink>Валюта</NavLink>
        </li>
      </Media>
    </ul>
  );
};

export default Navigation;
