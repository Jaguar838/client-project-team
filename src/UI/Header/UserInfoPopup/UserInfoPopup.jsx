import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors'
import ChabgeInputButton from '../../buttons/changeInputButton';
import PropTypes from "prop-types";

import { useState } from 'react';

import css from './UserInfoPopup.module.scss'
import defaultAvatar from "../UserMenu/user.png";

const modalRoot = document.querySelector('#root-modal');

const UserInfoPopup = ({ onClose, userAvatar }) => {
    // const userName = useSelector(state => authSelectors.getUsername(state));
    const windowListener = useRef(null);

    const [userName, setUserName] = useState('Roman');
    const [userEmail, setUserEmail] = useState('Roman@gmail.com');

    useEffect(() => {
      windowListener.current = window.addEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
          windowListener.current = window.removeEventListener(
            'keydown',
            handleKeyDown,
          );
        }
    };
    
      const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
    
        switch (name) {
          case 'userName':
            setUserName(value);
            break;
    
          case 'userEmail':
            setUserEmail(value);
            break;
    
          default:
            return;
        }
      };

    return createPortal(
        <div className={css.popupBackdrop} onClick={handleBackdropClick}>
            <div className={css.popupContent}>
                <div className={css.avatarBlock}>
                <img className={css.userAvatar} src={userAvatar} alt={userName}/>  
                <button type='button' className={css.changeAvatarButton}></button>
                </div>
                <form className={css.userForm}>
                    <div className={css.userInfoLine}>
                        <input
                        className={css.userInput}
                        type={`text`}
                        value={userName}
                        placeholder={userName}
                        onChange={handleInputChange}
                        />
                        <ChabgeInputButton />
                    </div>

                    <div className={css.userInfoLine}>
                        <input
                        className={css.userInput}
                        type={`text`}
                        value={userEmail}
                        placeholder={userEmail}
                        onChange={handleInputChange}
                        />
                        <ChabgeInputButton />
                    </div>
                    
                    <div className={css.buttonsBlock}>
                        <button className={css.buttonSubmit}>Применить</button>
                        <button onClick={onClose} className={css.buttonCancel}>Отменить</button>
                    </div>
               </form>
            </div>
        </div>,
        modalRoot,
    )
}

UserInfoPopup.defaultProps = {
    userAvatar: defaultAvatar,
    userName: "Имя",
    userEmail: 'email'
  };
  
  UserInfoPopup.propTypes = {
    userAvatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
  };


export default UserInfoPopup