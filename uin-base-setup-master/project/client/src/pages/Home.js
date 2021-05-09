import React, { Component } from 'react';
import HomeContent from '../components/content/pageContent/HomeContent';
import Products from '../components/content/Products/Products';
import Slider from '../components/content/carouselSlider/Slider';
// import SliderCopy from '../components/content/carouselSlider/SliderCopy';
import horizonLine from '../components/content/carouselSlider/img/outland-horizontal-line-edit2size.png';
import { StyleHorizontalLine } from '../styles/Styles';
import ProductCards2 from '../components/content/cardComps/ProductCards2';
import ProductCards from '../components/content/cardComps/ProductCards';
import GridLayout from '../components/content/cardComps/Grid';

const Home = () => (
  <>
    <HomeContent />
    <Slider />
    <GridLayout />
    <Products />
    <StyleHorizontalLine>
      <img src={horizonLine} />
    </StyleHorizontalLine>
    <ProductCards />
    <Products />
    <ProductCards2 />
  </>
);

export default Home;
