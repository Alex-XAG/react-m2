import React from 'react';
import {
  Container,
  ModalHeader,
  ModalTitle,
  ModalBtnClose,
} from './Modal.styled';

export const Modal = ({ children, closeModal }) => {
  return (
    <Container
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader className="modal-header">
            <ModalTitle className="modal-title">Modal</ModalTitle>
            <ModalBtnClose
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></ModalBtnClose>
          </ModalHeader>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </Container>
  );
};
