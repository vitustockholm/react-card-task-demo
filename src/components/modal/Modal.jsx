import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//styles
import { Overlay, ModalWrapper, StyledModal } from './Modal.style';

const Modal = ({ children, onClose }) => {
  //--side effects
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  //custom functions
  const closeOnOverlay = (e) => {
    e.stopPropagation();
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return ReactDOM.createPortal(
    <>
      <div></div>
      <div></div>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  );
};

//Proptypes require
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
