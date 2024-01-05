// ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content">
        <img src={imageUrl} alt="Popup" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
