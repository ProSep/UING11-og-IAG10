import styled from 'styled-components/macro';
import React from 'react';

const ImgComps = ({ src }) => {
  const imgStyles = {
    width: `${100}%`,
    height: 'auto',
  };
  return <img src={src} alt="sliding-img" style={imgStyles} />;
};

export default ImgComps;
