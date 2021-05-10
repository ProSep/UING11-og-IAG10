import React from 'react';
import './productcards2.css';
import Error404 from '../ImagesForPages/404.jpg';

const ProductsCards = ({ title, body }) => (
  <div className="card-container">
    <div className="image-container">
      <img src={Error404} alt="Testing banner" />
    </div>
    <div className="card-content">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
    <div className="btn">
      <button>
        <a>View more</a>
      </button>
    </div>
  </div>
);

export default ProductsCards;
