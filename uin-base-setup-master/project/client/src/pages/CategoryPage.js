import styled from 'styled-components/macro';
import Category from '../components/content/pageContent/categoryContent';
import Products from '../components/content/Products/Products';
import Sidebar from '../components/Sidebar.js/Sidebar';
import { Container } from '../styles/Styles';
import { getKategori, getProducts } from '../utils/yourService';

const Placment = styled.section`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-column-gap: 50px;
`

const Mainpart = styled.section`
  grid-column: 2;
`

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
