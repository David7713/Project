import React from 'react';
import Content from '../Content/Content';
import NavigationBar from '../NavigationBar/NavigationBar';
import ImageSlider from '../ImageSlider/ImageSlider';
import DataPicker from '../DataPicker/DataPicker';

const Home = ({ setCalculatedPrice }) => {
  return (
    <div>
      <NavigationBar />
      <DataPicker setCalculatedPrice={setCalculatedPrice} />
      <ImageSlider />
      <Content />
    </div>
  );
}

export default Home;
