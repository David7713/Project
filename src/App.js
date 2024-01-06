import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import './App.css'


import BookingForm from './BookingForm'
import DataPicker from './components/DataPicker/DataPicker'
import YourMainComponent from './YourMainComponent'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Main from './components/Main/Main'
import Content from './components/Content/Content'
import BookingFormPage from './components/BookingFormPage ';
const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DataPicker></DataPicker>
      {/* <BookingForm></BookingForm> */}
      {/* <YourMainComponent ></YourMainComponent> */}
      <ImageSlider></ImageSlider>
      <Content></Content>

    </div>
  )
}

export default App