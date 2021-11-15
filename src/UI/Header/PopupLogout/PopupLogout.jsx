import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import css from './PopupLogout.module.scss'

const modalRoot = document.querySelector('#root-modal');

const PopupLogout = ({onClose}) => {
    const windowListener = useRef(null);

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

    return createPortal(
        <div className={css.popupBackdrop} onClick={handleBackdropClick}>
          <div className={css.popupContent}>
            <p className={css.popupQuestion}>Вы действительно хотите выйти?</p>
            <button className={css.popupButton} onClick={onClose}>Да</button>
            <button className={css.popupButton} onClick={onClose}>Нет</button>              
          </div>
        </div>,
        modalRoot,
    );
}

export default PopupLogout

