import React, { useState } from 'react';
import './ImageSlider.css';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


import mainImage1 from './images/main-image1.jpg';
import mainImage2 from './images/main-image2.jpg';
import mainImage3 from './images/main-image3.jpg';
import mainImage4 from './images/main-image4.jpg';
import mainImage5 from './images/main-image5.jpg';
import mainImage6 from './images/main-image6.jpg';
import mainImage7 from './images/main-image7.jpg';
import mainImage8 from './images/main-image8.jpg';
import mainImage9 from './images/main-image9.jpg';
import mainImage10 from './images/main-image10.jpg';
import mainImage11 from './images/main-image11.jpg';
import mainImage12 from './images/main-image12.jpg';
import mainImage13 from './images/main-image13.jpg';
import mainImage14 from './images/main-image14.jpg';
import thumbnail1 from './images/thumbnail1.jpg';
import thumbnail2 from './images/thumbnail2.jpg';
import thumbnail3 from './images/thumbnail3.jpg';
import thumbnail4 from './images/thumbnail4.jpg';
import thumbnail5 from './images/thumbnail5.jpg';
import thumbnail6 from './images/thumbnail6.jpg';
import thumbnail7 from './images/thumbnail7.jpg';
import thumbnail8 from './images/thumbnail8.jpg';
import thumbnail9 from './images/thumbnail9.jpg';
import thumbnail10 from './images/thumbnail10.jpg';
import thumbnail11 from './images/thumbnail11.jpg';
import thumbnail12 from './images/thumbnail12.jpg';
import thumbnail13 from './images/thumbnail13.jpg';
import thumbnail14 from './images/thumbnail14.jpg';

const mainImages = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5, mainImage6, mainImage7, mainImage8, mainImage9, mainImage10, mainImage11, mainImage12, mainImage13, mainImage14];
const thumbnailImages = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7, thumbnail8, thumbnail9, thumbnail10, thumbnail11, thumbnail12, thumbnail13, thumbnail14]
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
