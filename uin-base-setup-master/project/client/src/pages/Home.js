import React, { Component } from 'react';
import HomeContent from '../components/content/pageContent/HomeContent';
import Products from '../components/content/Products/Products';
import Slider from '../components/content/carouselSlider/Slider';
import horizonLine from '../components/content/carouselSlider/img/outland-horizontal-line-edit.png';
import { Container } from '../styles/Styles';

const Home = () => (
  <Container>
    <HomeContent />
    <Slider />
    <Products />

    <img src={horizonLine} />

  </Container>
);

export default Home;
