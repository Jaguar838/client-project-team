import { createPortal } from 'react-dom';
import css from './ModalUI.module.scss';
import { Modal } from '@material-ui/core';

const rootModal = document.getElementById('root-modal');

const ModalUI = ({ modalValue, modalAction, children }) => {
  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={css.Modal}
        open={modalValue}
        onClose={modalAction}
        closeAfterTransition
      >
        <div className={css.Paper}>{children}</div>
      </Modal>
    </div>,
    rootModal,
  );
};

export default ModalUI;
