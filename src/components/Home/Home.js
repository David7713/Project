import React from 'react'
 import Content from '../Content/Content'
 import NavigationBar from '../NavigationBar/NavigationBar'
 import ImageSlider from '../ImageSlider/ImageSlider'
 import DataPicker from '../DataPicker/DataPicker'
const Home = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
        <DataPicker></DataPicker>
        <ImageSlider></ImageSlider>
        <Content></Content>
    </div>
  )
}

export default Home