import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import ChabgeInputButton from '../../buttons/changeInputButton';
import AvatarUploader from '../../../components/AvatarUploader';
import userOperations from '../../../redux/user/user-operations';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import css from './UserInfoPopup.module.scss'
import defaultAvatar from "../UserMenu/user.png";

const modalRoot = document.querySelector('#root-modal');

const UserInfoPopup = ({ onClose, avatar }) => {
  // const userAvatar = useSelector(state => authSelectors.getUserAvatar(state));
    const userName = useSelector(state => authSelectors.getUsername(state));
    const userEmail = useSelector(state => authSelectors.getUserEmail(state));

    const dispatch = useDispatch();
    const windowListener = useRef(null);
    const [name, setName] = useState(userName);
  const [isVisible, setIsVisible] = useState(false);
  const nameInput = useRef(null);

    useEffect(() => {
      windowListener.current = window.addEventListener('keydown', handleKeyDown);
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if(userName === name) {
      setIsVisible(false);
      return;
    }
    dispatch(userOperations.changeUserName(name.trim()));
    setIsVisible(false);
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onFocus = () => {
     setIsVisible(true);
  }

   const onBlur = () => {
     setIsVisible(false);
  }

  const onClick = () => {
    setIsVisible(true);
    nameInput.current.focus();
  }

  const onCancel = () => {
    setIsVisible(false);
  }

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

    return createPortal(
        <div className={css.popupBackdrop} onClick={handleBackdropClick}>
            <div className={css.popupContent}>
                <div className={css.topBlock}></div>
                <div className={css.avatarBlock}>
                {/* {userAvatar ?
                  <img className={css.userAvatar} src={userAvatar} alt={userName}/> 
                  :
                  <img className={css.userAvatar} src={avatar} alt={userName}/> 
                } */}
                <img className={css.userAvatar} src={avatar} alt={userName}/>
                </div>
                        <p className={css.userEmail}>{userEmail}</p>
                <form className={css.userForm} onSubmit={onSubmit}>
                    <div className={css.userInfoLine}>
              <input
                autoComplete='off'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        ref={nameInput}
                        className={css.userInput}
                        type='text'
                        value={name}
                        name="name"
                        onChange={onChange}
                        pattern=".{3,12}"
                        title="Поле может содержать от 3 до 12 символов"
                        required
                        />
                        <ChabgeInputButton onChange={onClick} />
                    </div>
                    
            <div className={css.buttonsBlock}>
              {isVisible && (
                         <>
                         <button className={css.buttonSubmit}>Применить</button>
                         <button onClick={onCancel} className={css.buttonCancel}>Отменить</button>
                        </>
              )}
                        
                    </div>
                </form>
                <AvatarUploader/>
            </div>
        </div>,
        modalRoot,
    )
}

UserInfoPopup.defaultProps = {
    avatar: defaultAvatar,
    userName: "Имя",
    userEmail: 'email'
  };
  
  UserInfoPopup.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
  };


export default UserInfoPopup