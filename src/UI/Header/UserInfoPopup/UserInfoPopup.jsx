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

import { BASE_URL } from '../../../assets/constants';

import css from './UserInfoPopup.module.scss'
import defaultAvatar from "../UserMenu/user.png";

const modalRoot = document.querySelector('#root-modal');

const UserInfoPopup = ({ onClose, avatar }) => {
  const userAvatarUrl = useSelector(state => authSelectors.getAvatar(state));
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
       onClose();
      return;
    }
    dispatch(userOperations.changeUserName(name.trim()));
    setIsVisible(false);
     onClose();
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onFocus = () => {
     setIsVisible(true);
  }

  const onClick = () => {
    setIsVisible(true);
    nameInput.current.focus();
  }

  const onCancel = () => {
    setName(userName);
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
                <div className={css.topBlock}/>
                <div className={css.avatarBlock}>
                {userAvatarUrl !== null ?
                  <img className={css.userAvatar} src={`${BASE_URL}${userAvatarUrl}`} alt={userName}/> 
                  :
                  <img className={css.userAvatar} src={avatar} alt={userName}/> 
                }
                </div>
                        <p className={css.userEmail}>{userEmail}</p>
                <form className={css.userForm} onSubmit={onSubmit}>
                    <div className={css.userInfoLine}>
              <input
                autoComplete='off'
                        onFocus={onFocus}
                        ref={nameInput}
                        className={css.userInput}
                        type='text'
                        value={name}
                        name="name"
                        onChange={onChange}
                        pattern=".{3,12}"
                        title="???????? ?????????? ?????????????????? ???? 3 ???? 12 ????????????????"
                        required
                        />
                      {userName && (
                      <ChabgeInputButton onChange={onClick} />
                      )}  
                    </div>
                    
            <div className={css.buttonsBlock}>
              {isVisible && (
                         <>
                         <button type='submit' className={css.buttonSubmit}>??????????????????</button>
                         <button type='button' onClick={onCancel} className={css.buttonCancel}>????????????????</button>
                        </>
              )}
                        
                    </div>
                </form>
          <AvatarUploader onClosePopup={onClose}/>
            </div>
        </div>,
        modalRoot,
    )
}

UserInfoPopup.defaultProps = {
    avatar: defaultAvatar,
    userName: "??????",
    userEmail: 'email'
  };
  
  UserInfoPopup.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
  };


export default UserInfoPopup