import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Styles
import { ModalWrapper, Overlay, StyledModal } from './Modal.style';

const Modal = ({ children, onClose }) => {
  // Hooks
  // -- side effects
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  // Custom funtions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
