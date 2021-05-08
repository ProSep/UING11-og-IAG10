import Card from './Card';
import './productcards.css';
import proImg1 from '../ImagesForPages/pikachu-fig-skeleton.jpg';

const ProductCards = () => (
  <div className="product-card-container">
    <div className="row">
      <Card
        title="This production card title is connected to CARD.js"
        image={proImg1}
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

export default ProductCards;
