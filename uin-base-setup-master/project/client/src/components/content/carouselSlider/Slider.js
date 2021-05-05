import React, { useState } from 'react';
import './slider.css';
import ImgComps from './ImgComps';
import img1 from './img/brands-funko.jpg';
import img2 from './img/klær.jpg';
import img3 from './img/brands-pusheen.jpg';
import img4 from './img/Fake-nerd-640x678.jpg';
import img5 from './img/brands-marvel.jpg';

const Slider = () => {
  const sliderArr = [
    <ImgComps src={img1} height="400" />,
    <ImgComps src={img2} height="100%" />,
    <ImgComps src={img3} height="100%" />,
    <ImgComps src={img4} height="200" />,
    <ImgComps src={img5} height="200" />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          {item}
        </div>
      ))}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default Slider;
