import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import css from './Popup.module.scss'

const modalRoot = document.querySelector('#root-modal');

const Popup = ({ onClose,children }) => {
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
          {children}
        </div>,
        modalRoot,
    );
}

export default Popup;

