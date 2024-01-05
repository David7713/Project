import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const BookingForm = () => {
  const [hotelName, setHotelName] = useState('Grand Yerevan');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [members, setMembers] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleMemberChange = (action) => {
    if (action === 'increase') {
      setMembers(members + 1);
    } else if (action === 'decrease' && members > 1) {
      setMembers(members - 1);
    }
  };
  // <div className='price'>Total Price: ${calculatePrice()}</div>

  const handleRoomChange = (action) => {
    if (action === 'increase') {
      setRooms(rooms + 1);
    } else if (action === 'decrease' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const datePickerInputStyle = {
    background: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    width: '150px',
    fontSize: '16px',
  };

  return (
    <div>
      <h2>{hotelName}</h2>
      <div style={{ background: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
        <label>Depart:</label>
        <div> 
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            customInput={<input style={datePickerInputStyle} />}
          />
        </div>
        <label>Arrive:</label>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MMMM d, yyyy"
            customInput={<input style={datePickerInputStyle} />}
          />
        </div>
      </div>
      <div>
        <label>Members:</label>
        <button onClick={() => handleMemberChange('decrease')}>-</button>
        <span>{members}</span>
        <button onClick={() => handleMemberChange('increase')}>+</button>
      </div>
      <div>
        <label>Rooms:</label>
        <button onClick={() => handleRoomChange('decrease')}>-</button>
        <span>{rooms}</span>
        <button onClick={() => handleRoomChange('increase')}>+</button>
      </div>
    </div>
  );
};

export default BookingForm;
