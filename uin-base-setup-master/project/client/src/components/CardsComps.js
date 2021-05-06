import React from 'react';
import '../cardsComps.css';
// don't forget to import style component that you have created in order to style the cards!
import Error404 from '../images/404.jpg';
import EzioAuditore from '../images/ezio-auditore-ray-fredian.jpg';

const ProductsCards = ({ title, body }) => (
  <div className="card-container">
    <div className="image-container">
      <img src={Error404} alt="Testing banner" />
      <img src={EzioAuditore} alt="Test 2" />
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
