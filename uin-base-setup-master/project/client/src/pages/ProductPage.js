import Product from '../components/content/pageContent/ProductContent';
import { getProduct } from '../utils/yourService';
import { Container } from '../styles/Styles';

const ProductPage = () => (
  <>
    <Container>
      <Product whatContent={getProduct} />
    </Container>
  </>
);

export default ProductPage;
