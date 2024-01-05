// YourMainComponent.js
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import image1 from './Assets/img1.jpg'
import image2 from './Assets/img2.jpg'
const YourMainComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div>
      {/* Your other content and images */}
      <img
        src={image1}
        alt="Example"
        onClick={() => openModal(image1)}
      />
      <img
        src={image2}
        alt="Example"
        onClick={() => openModal(image2)}
      />

      {/* Render the modal conditionally */}
      {showModal && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default YourMainComponent;
