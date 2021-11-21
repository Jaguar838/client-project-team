import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import ChabgeInputButton from '../../buttons/changeInputButton';
import AvatarUploader from '../../../components/AvatarUploader';
import authOperations from '../../../redux/auth/auth-operations';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import css from './UserInfoPopup.module.scss'
import defaultAvatar from "../UserMenu/user.png";

const modalRoot = document.querySelector('#root-modal');

const UserInfoPopup = ({ onClose, avatar }) => {
  // const userAvatar = useSelector(state => authSelectors.getUserAvatar(state));
    // const userName = useSelector(state => authSelectors.getUsername(state));
    // const userEmail = useSelector(state => authSelectors.getUserEmail(state));

    // const dispatch = useDispatch();

    const windowListener = useRef(null);

    const [userName, setUserName] = useState('Roman');
    const [userEmail, setUserEmail] = useState('Roman@gmail.com');

    useEffect(() => {
      windowListener.current = window.addEventListener('keydown', handleKeyDown);
    });

    const validationSchema = yup.object().shape({
      userEmail: yup.string().email('Введите верный email').required('Обязательно'),
      userName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
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
          case 'name':
            setUserName(value);
            break;
    
          case 'email':
            setUserEmail(value);
            break;
    
          default:
            return;
        }
      };

      const handleSubmit = e => {
        e.preventDefault();
        // dispatch(authOperations.editUserInfo({ userName, userEmail}));
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
                <form className={css.userForm} onSubmit={handleSubmit}>
                    <div className={css.userInfoLine}>
                        <input
                        className={css.userInput}
                        type={`text`}
                        value={userName}
                        name="name"
                        onChange={handleInputChange}
                        validationSchema={validationSchema}
                        // pattern={validationSchema}
                        />
                        <ChabgeInputButton />
                    </div>

                    <div className={css.userInfoLine}>
                        <input
                        className={css.userInput}
                        type={`text`}
                        value={userEmail}
                        name="email"
                        onChange={handleInputChange}
                        // pattern={validationSchema}
                        />
                        <ChabgeInputButton />
                    </div>
                    
                    <div className={css.buttonsBlock}>
                        <button className={css.buttonSubmit}>Применить</button>
                        <button onClick={onClose} className={css.buttonCancel}>Отменить</button>
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