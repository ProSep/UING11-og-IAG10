import Product from '../components/content/pageContent/ProductContent';
import { getProduct } from '../utils/yourService';

const ProductPage = () => {
  return (
    <>
      <Product whatContent = { getProduct }/>
    </>
  );
};

export default ProductPage;
