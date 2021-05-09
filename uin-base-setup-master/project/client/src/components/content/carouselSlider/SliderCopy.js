import React, { useState } from 'react';
import './slider.css';
import '../pageContent/grid-test.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Cell } from 'styled-css-grid';
import ImgComps from './ImgComps';
import img1 from './img/xsakura-banner1.jpg';
import img2 from './img/xgamle-gubber-2-banner2-outland.jpg';
import img3 from './img/ramune-banner1-outland.png';
import img4 from './img/xvalhall-samleboks-banner1.jpg';
import img5 from './img/geeky-stuff.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {
  <Grid className="grid-test-columns">
    <Cell>
      <h3>dsgsgsgsg</h3>
    </Cell>
    <Cell height={5}>This is a bar</Cell>
    <Cell width={2}>baz</Cell>
  </Grid>;

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
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="4x" />
      </button>
      <button id="goRight" onClick={goRight}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="4x" />
      </button>
    </div>
  );
};

export default Slider;
