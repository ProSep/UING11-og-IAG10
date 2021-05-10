import React from 'react';
import './productcards.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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
          <p>
            This paragraph is just a test, there will be production cards here!
          </p>
          <p className="price">{price}</p>
        </div>
        <div className="cardImages">
          <h2>{title}</h2>
          <p>Card images</p>
        </div>
        <div className="cart" />
        <div>
          <ShoppingCartOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default Card;