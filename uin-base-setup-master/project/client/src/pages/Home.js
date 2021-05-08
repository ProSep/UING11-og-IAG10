import React, { Component } from 'react';
import HomeContent from '../components/content/pageContent/HomeContent';
import Products from '../components/content/Products/Products';
import Slider from '../components/content/carouselSlider/Slider';
import horizonLine from '../components/content/carouselSlider/img/outland-horizontal-line-edit2size.png';
import { StyleHorizontalLine } from '../styles/Styles';
import ProductCards2 from '../components/content/cardComps/ProductCards2';
import ProductCards from '../components/content/cardComps/ProductCards';

const Home = () => (
  <>
    <HomeContent />
    <Slider />
    <Products />
    <ProductCards />

    <StyleHorizontalLine>
      <img src={horizonLine} />
    </StyleHorizontalLine>
    <ProductCards2 />
  </>
);

export default Home;
