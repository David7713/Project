import React, { useState, useEffect, forwardRef } from 'react';
import './DataPicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import { IoIosLogIn } from 'react-icons/io';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => (
  <div className="custom-input-container">
    <input className="date-picker-input" onClick={onClick} value={value} ref={ref} readOnly />
  </div>
));

const DataPicker = ({ onBookNowClick, setCalculatedPrice }) => {

  const currentDate = new Date();

  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)); // Set default endDate to one day after startDate
  const [showCounter, setShowCounter] = useState(false);

  // Counters
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleToggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const handleIncrement = (type) => {
    if (type === 'adults') {
      setAdults((prevAdults) => prevAdults + 1);
    } else if (type === 'children') {
      setChildren((prevChildren) => prevChildren + 1);
    } else if (type === 'rooms') {
      setRooms((prevRooms) => prevRooms + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === 'adults' && adults > 1) {
      setAdults((prevAdults) => prevAdults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren((prevChildren) => prevChildren - 1);
    } else if (type === 'rooms' && rooms > 1) {
      setRooms((prevRooms) => prevRooms - 1);
    }
  };


  const defaultPrice = () => {
    // Assuming the base rate is $20 per room per day
    const baseRate = 60;
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Include the first day in the calculation
    return baseRate * numberOfDays
  };

  const calculatePrice = () => {
    // Assuming the base rate is $20 per room per day
    const baseRate = 20;
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const price = baseRate * numberOfDays;

    // Update the calculated price using setCalculatedPrice
    setCalculatedPrice(price);

    return price;
  };

  useEffect(() => {
    // Update endDate to one day after startDate when startDate changes
    setEndDate(new Date(startDate.getTime() + 24 * 60 * 60 * 1000));
  }, [startDate]);

  return (

    <div className='datapicker-part'>

      <div className='datapicker-section'>
        <div className='hotel-name'> <CiLocationOn className='icon'></CiLocationOn>New Yerevan Hotel and Hostel </div>
        <div className='calendar-part'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={currentDate}
            dateFormat='MMMM d, yyyy'
            customInput={<CustomDatePickerInput />}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat='MMMM d, yyyy'
            customInput={<input className='date-picker-input' />}
          // customInput={<CustomDatePickerInput />}
          />
        </div>

        <div className='adult-children-room-section'>
          <button className='adult-children-room-button' onClick={handleToggleCounter}>
            <GoPeople className='icon'></GoPeople> {`${adults} Adults, ${children} Children, ${rooms} Rooms`}
          </button>
          {showCounter && (
            <div className='counter'>
              <div>
                Adults
                <button onClick={() => handleDecrement('adults')}>-</button>
                <span>{adults}</span>
                <button onClick={() => handleIncrement('adults')}>+</button>
              </div>
              <div>
                Children
                <button onClick={() => handleDecrement('children')}>-</button>
                <span>{children}</span>
                <button onClick={() => handleIncrement('children')}>+</button>
              </div>
              <div>
                Rooms
                <button onClick={() => handleDecrement('rooms')}>-</button>
                <span>{rooms}</span>
                <button onClick={() => handleIncrement('rooms')}>+</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='header-part'>
        <div className='header-section'>
          <div className='header-section-left-part'>
            <p>New Yerevan Hotel and Hostel </p>
            <span>Parseghov St, Ajapnyak, Yerevan, Armenia, 560052</span>
            <br></br>
            <label>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </label>
          </div>
          <div className='header-section-right-part'>
            <div className='discount-button'>67% OFF TODAY</div>
            <p className='old-price'> ${defaultPrice()}</p>
            <p className='new-price'>${calculatePrice()}</p>
            <Link to="/booking">
              <button className='book-button' onClick={onBookNowClick}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPicker;
