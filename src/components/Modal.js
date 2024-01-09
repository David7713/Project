import React from 'react';
import './Modal.css'; // Add your modal styling

const Modal = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
