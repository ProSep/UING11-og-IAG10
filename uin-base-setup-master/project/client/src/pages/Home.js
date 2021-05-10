import React from 'react';
import Slider from '../components/content/carouselSlider/Slider';
import horizonLine from '../components/content/carouselSlider/img/outland-horizontal-line-edit2size.png';
import { Container } from '../styles/Styles';
import GridLayout from '../components/content/cardComps/Grid';
import styled from 'styled-components';
import { getHome } from '../utils/yourService';
import HomePageCards from '../components/content/Products/HomePageCards';

export const StyleHorizontalLine = styled.img`
width: 100%;
`;

const Home = () => (
  <Container>
    <Slider />
    <GridLayout />
      <StyleHorizontalLine src={horizonLine} />
    <HomePageCards whatProducts={getHome}/>
  </Container>
);

export default Home;
