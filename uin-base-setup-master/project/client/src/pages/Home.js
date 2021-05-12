import React from 'react';
import Slider from '../components/HomeSlider/Slider';
import horizonLine from '../images/HomeImgs/outland-horizontal-line-edit2size.png';
import GridLayout from '../components/cardComps/Grid';
import styled from 'styled-components';
import { getHome } from '../utils/SanityFercher';
import HomePageCards from '../components/Products/HomePageCards';

export const StyleHorizontalLine = styled.img`
width: 100%;
`;

const Home = () => (
  <>
    <Slider />
    <GridLayout />
      <StyleHorizontalLine src={horizonLine} />
    <HomePageCards whatProducts={getHome}/>
  </>
);

export default Home;
