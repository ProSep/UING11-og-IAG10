import React, { Component } from 'react';
import HomeContent from '../components/content/pageContent/HomeContent';
import Products from '../components/content/Products/Products';
import Slider from '../components/content/carouselSlider/Slider';

const Home = () => (
  <>
    <HomeContent />
    <Products />
    <Slider />
  </>
);

export default Home;
