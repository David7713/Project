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
          <span>1 Amiryan Street , Kentron, Yerevan, Armenia</span>
          <br></br>
          <label>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </label>
        </div>
        <div className='main-section-right-part'>
        <div className='discount-button'>67% OFF TODAY</div>
          <p className='old-price'> ${defaultPrice()}</p>
        <p className='new-price'>${calculatePrice()}</p>
        <button className='book-button'>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
