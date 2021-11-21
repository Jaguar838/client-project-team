import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors'
import PropTypes from "prop-types";
import LogoutButton from '../../buttons/LogoutButton'

import defaultAvatar from "./user.png";
import css from './UserMenu.module.scss'


const UserMenu = ({ onClickUserInfoButton, onClick, name, avatar }) => {
  const userName = useSelector(state => authSelectors.getUsername(state));
    return (
        <div className={css.userMenuContainer}>
            <button type="button" onClick={onClickUserInfoButton} className={css.userInfoButton}>
              <img className={css.userAvatar} src={avatar} alt={name}/>
              <p className={css.userName}>{userName}</p>
            </button>
            <LogoutButton onClick={onClick} />
        </div>
    )
}

UserMenu.defaultProps = {
    avatar: defaultAvatar,
    name: "Имя",
  };
  
  UserMenu.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

export default UserMenu