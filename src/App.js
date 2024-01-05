import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import './App.css'
import BookingForm from './BookingForm'
import DataPicker from './components/DataPicker/DataPicker'
import YourMainComponent from './YourMainComponent'
import ImageSlider from './ImageSlider'
const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DataPicker></DataPicker>
      {/* <BookingForm></BookingForm> */}
      {/* <YourMainComponent ></YourMainComponent> */}
      <ImageSlider></ImageSlider>
    </div>
  )
}

export default App