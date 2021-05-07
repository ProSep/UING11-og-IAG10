import React from 'react';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
  const newClassName = `color_bg ${props.alt}`;
  const bg_img = `url(${props.images})`;
  const { title, images, price, alt } = props;
  return (
    <div className="card">
      <div className="wrapper">
        <div className={newClassName} />
        <div className="card_img" style={{ backgroundImage: bg_img }} />
        <div className="cardInfo">
          <h2>{title}</h2>
          <p className="price">{price}</p>
        </div>
        <div className="cart">
          <div>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
