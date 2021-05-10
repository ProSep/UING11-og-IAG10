import Card from './Card';
import './productcards2.css';
import Error404 from '../ImagesForPages/404.jpg';
// import proImg1 from '../ImagesForPages/pikachu-fig-skeleton.jpg';
const ProductCards = ({ title, body }) => (
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
/* const ProductCards = () => (
  <div className="product-card-container">
    <div className="row">
      <Card
        title="This production card title is connected to CARD.js"
        price="50kr"
        alt="pikachu half skeleton"
      />
      <Card
        title="gdsgdsagdasgh"
        image="../ImagesForPages/kaiju-png-kaiju-pacific-rim-png.png"
        price="50kr"
        alt="kaiju"
      />
      <Card
        title="erhgshsrhshhs"
        image="../ImagesForPages/ushio-and-tora.jpg"
        price="50kr"
        alt="ushio and tora"
      />
      <Card
        title="erhgshsrhshhs"
        image="../ImagesForPages/yautja-figure.jpg"
        price="50kr"
        alt="yautja"
      />
    </div>
  </div>
);
*/

export default ProductCards;
