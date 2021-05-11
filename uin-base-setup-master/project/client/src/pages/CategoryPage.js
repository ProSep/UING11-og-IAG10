import Category from '../components/content/pageContent/categoryContent';
import Products from '../components/content/Products/Products';
import Sidebar from '../components/Sidebar.js/Sidebar';
import { Container, Placment, Mainpart } from '../styles/Styles';
import { getKategori, getProducts } from '../utils/yourService';

const CategoryPage = () => (
  <Container>
    <Placment>
      <Sidebar/>
      <Mainpart>
        <Category whatContent={getKategori} />
        <Products whatProducts={getProducts}/>
      </Mainpart>
    </Placment>
  </Container>
);

export default CategoryPage;
