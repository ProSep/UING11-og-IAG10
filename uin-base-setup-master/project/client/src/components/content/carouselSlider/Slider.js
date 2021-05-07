import React, { useState } from 'react';
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import ImgComps from './ImgComps';
import img1 from './img/ramune-banner1-outland.png';
import img2 from './img/brands-twd.jpg';
import img3 from './img/ushio-and-tora-edit.jpg';
import img4 from './img/xvalhall-samleboks-banner1.jpg';
import img5 from './img/geeky-stuff.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {
  const sliderArr = [
    <ImgComps src={img1} />,
    <ImgComps src={img2} />,
    <ImgComps src={img3} />,
    <ImgComps src={img4} />,
    <ImgComps src={img5} />,
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
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" />
      </button>
      <button id="goRight" onClick={goRight}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="3x" />
      </button>
    </div>
  );
};

export default Slider;
