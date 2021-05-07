import Category from '../components/content/pageContent/categoryContent';
import Products from '../components/content/Products/Products';
import { Container } from '../styles/Styles';
import { getKategori } from '../utils/yourService';

const CategoryPage = () => (
  <Container>
    <Category whatContent={getKategori} />
    <Products />
  </Container>
);

export default CategoryPage;
