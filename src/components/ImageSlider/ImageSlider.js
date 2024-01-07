import React, { useState } from 'react';
import './ImageSlider.css';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


import mainImage1 from './images/main-image1.png';
import mainImage2 from './images/main-image2.png';
import mainImage3 from './images/main-image3.png';
import mainImage4 from './images/main-image4.png';
import mainImage5 from './images/main-image5.png';
import mainImage6 from './images/main-image6.png';
import mainImage7 from './images/main-image7.png';
import thumbnail1 from './images/thumbnail1.png';
import thumbnail2 from './images/thumbnail2.png';
import thumbnail3 from './images/thumbnail3.png';
import thumbnail4 from './images/thumbnail4.png';
import thumbnail5 from './images/thumbnail5.png';
import thumbnail6 from './images/thumbnail6.png';
import thumbnail7 from './images/thumbnail7.png';

const mainImages = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5, mainImage6, mainImage7];
const thumbnailImages = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7]
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? mainImages.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === mainImages.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="main-image">
        <img src={mainImages[currentIndex]} alt={`Main Image ${currentIndex + 1}`} />
      </div>
      <div className="thumbnail-images">
        {thumbnailImages.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentIndex ? 'thumbnail active' : 'thumbnail'}
            onClick={() => handleThumbnailClick(index)}

          />
        ))}
      </div>
      <div className="arrows">
        <span className="arrow left" onClick={() => handleArrowClick('left')}><FaChevronLeft></FaChevronLeft></span>
        <span className="arrow right" onClick={() => handleArrowClick('right')}><FaChevronRight></FaChevronRight></span>
      </div>
    </div>
  );
};

export default ImageSlider;
