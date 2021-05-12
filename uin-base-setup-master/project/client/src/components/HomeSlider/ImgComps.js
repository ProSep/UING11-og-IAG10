import React from 'react';

const ImgComps = ({ src }) => {
  const imgStyles = {
    width: `${100}%`,
    height: 'auto',
  };
  return <img src={src} alt="sliding-img" style={imgStyles} />;
};

export default ImgComps;
