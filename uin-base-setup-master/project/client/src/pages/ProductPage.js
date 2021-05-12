import Product from '../components/pageContent/ProductContent';
import { getProduct } from '../utils/SanityFercher';

const ProductPage = () => (
  <>
      <Product whatContent={getProduct} />
  </>
);

export default ProductPage;
