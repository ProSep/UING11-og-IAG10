import styled from 'styled-components/macro';
import Category from '../components/content/pageContent/categoryContent';
import Products from '../components/content/Products/Products';
import { Container } from '../styles/Styles';
import { getKategori, getProducts } from '../utils/yourService';

const Placment = styled.section`
  display: grid;
  grid-template-columns: 2fr 6fr;
`
const Sidebar = styled.section`
  grid-column: 1;
`

const Mainpart = styled.section`
  grid-column: 2;
`

const CategoryPage = () => (
  <Container>
    <Placment>
      <Sidebar>
        <p>Hello</p>
      </Sidebar>
      <Mainpart>
        <Category whatContent={getKategori} />
        <Products whatProducts={getProducts}/>
      </Mainpart>
    </Placment>
  </Container>
);

export default CategoryPage;
