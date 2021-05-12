import React, { useState } from 'react';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ImgComps from './ImgComps';
import img1 from '../../images/HomeImgs/xsakura-banner1.jpg';
import img2 from '../../images/HomeImgs/xgamle-gubber-2-banner2-outland.jpg';
import img3 from '../../images/HomeImgs/ramune-banner1-outland.png';
import img4 from '../../images/HomeImgs/xvalhall-samleboks-banner1.jpg';
import styled from 'styled-components';

const SliderStyle = styled.div`
  margin: auto;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  overflow: hidden;
  position: relative;
  background: none;
  margin-bottom: 50px;
  border-bottom: 1px solid;
`

 const Slide = styled.div`
  min-width: 100%;
  height: 80%;
  position: relative;
  transition: 0.9s;
  overflow: hidden;
`

const ArrowButtonsLeft = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  background: none;
  border: none;
  outline: none;
  left: 0;
  font-size: 50px;
  transition-duration: 0.1s;
  :hover {
    font-size: 100px;
  }
`

const ArrowButtonRight = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  background: none;
  border: none;
  outline: none;
  right: 0;
  font-size: 50px;
  transition-duration: 0.1s;
  :hover {
    font-size: 100px;
  }
`

const Slider = () => {
  const sliderArr = [
    <ImgComps src={img1} />,
    <ImgComps src={img2} />,
    <ImgComps src={img3} />,
    <ImgComps src={img4} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <SliderStyle>
      {sliderArr.map((item, index) => (
        <Slide
          key={index}
          style={{ transform: `translateX(${x}%)` }}>
          {item}
        </Slide>
      ))}
      <ArrowButtonsLeft onClick={goLeft}>
        <ArrowLeftOutlinedIcon fontSize="inherit"/>
      </ArrowButtonsLeft>
      <ArrowButtonRight onClick={goRight}>
        <ArrowRightOutlinedIcon fontSize="inherit"/>
      </ArrowButtonRight>
    </SliderStyle>
  );
};

export default Slider;
