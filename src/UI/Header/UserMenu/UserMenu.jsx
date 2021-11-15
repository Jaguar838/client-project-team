import PropTypes from "prop-types";
import LogoutButton from '../../buttons/LogoutButton'

import defaultAvatar from "./user.png";
import css from './UserMenu.module.scss'


const UserMenu = ({onClick, name, avatar}) => {
    return (
        <div className={css.userMenuContainer}>
            <img className={css.userAvatar} src={avatar} alt={name}/>
            <p className={css.userName}>{name}</p>
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