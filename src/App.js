import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import './App.css'
import BookingForm from './BookingForm'
import DataPicker from './components/DataPicker/DataPicker'
import YourMainComponent from './YourMainComponent'
const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DataPicker></DataPicker>
      {/* <BookingForm></BookingForm> */}
      <YourMainComponent ></YourMainComponent>
    </div>
  )
}

export default App