// Main.js
import React from 'react';
import './Main.css';
import { FaStar } from "react-icons/fa";



const Main = ({calculatePrice,defaultPrice}) => {


  return (
    <div className='main-part'>
      <div className='main-section'>
        <div className='main-section-left-part'>
          <p>New Yerevan Hotel and Hostel </p>
          <label>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </label>
        </div>
        <div className='main-section-right-part'>

          <p className='old-price'> ${defaultPrice()}</p>
        <p className='new-price'>${calculatePrice()}</p>
        </div>
        <button className='book-button'>Book Now</button>
      </div>
    </div>
  );
}

export default Main;
