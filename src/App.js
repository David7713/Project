import React from 'react'
import './App.css'

import NavigationBar from './components/NavigationBar/NavigationBar'
import DataPicker from './components/DataPicker/DataPicker'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Main from './components/Main/Main'
import Content from './components/Content/Content'

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DataPicker></DataPicker>
      <ImageSlider></ImageSlider>
      <Content></Content>

    </div>
  )
}

export default App