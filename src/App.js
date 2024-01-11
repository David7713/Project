import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DataPicker from './components/DataPicker/DataPicker';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Content from './components/Content/Content';
import Home from './components/Home/Home';
import BookingFormPage from './components/BookingFormPage/BookingFormPage';

const App = () => {
  const [showOnlyBooking, setShowOnlyBooking] = useState(false);

  const handleBookNowClick = () => {
    setShowOnlyBooking(true);
  };

  return (
    <Router>
      <div>
        {showOnlyBooking ? (
          <>
            <NavigationBar />
            <Routes>
           
            <Route path="/" element={<Home/>} exact />
            <Route path="/Project" element={<Home/>} exact />
              <Route path="/booking" element={<BookingFormPage />} />
            </Routes>
          </>
        ) : (
          <>
            <NavigationBar />
            <DataPicker  onBookNowClick={handleBookNowClick} />
          
            <ImageSlider />
            <Content />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
