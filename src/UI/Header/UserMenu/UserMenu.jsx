import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors'
import PropTypes from "prop-types";
import LogoutButton from '../../buttons/LogoutButton'

import defaultAvatar from "./user.png";
import css from './UserMenu.module.scss'
import { BASE_URL } from '../../../assets/constants';

const UserMenu = ({ onClickUserInfoButton, onClick, name, avatar }) => {
  const userName = useSelector(state => authSelectors.getUsername(state));
  const userAvatarUrl = useSelector(state => authSelectors.getAvatar(state));
    return (

        <div className={css.userMenuContainer}>
            <button type="button" onClick={onClickUserInfoButton} className={css.userInfoButton}>
              <img className={css.userAvatar} src={avatar} alt={name}/>
              <p className={css.userName}>{userName}</p>
            </button>

//       <div className={css.userMenuContainer}>
//         {
//           userAvatarUrl
//             ?
//             <img className={css.userAvatar} src={`${BASE_URL}${userAvatarUrl}`} alt="avatar" />
//             :
//             <img className={css.userAvatar} src={avatar} alt={name}/>
//         }
//             <p className={css.userName}>{userName}</p>
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