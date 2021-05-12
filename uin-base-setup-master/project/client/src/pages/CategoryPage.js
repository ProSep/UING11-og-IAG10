import Category from '../components/pageContent/categoryContent';
import Products from '../components/Products/Products';
import Sidebar from '../components/Sidebar.js/Sidebar';
import { Placment, Mainpart } from '../styles/Styles';
import { getKategori, getProducts } from '../utils/SanityFercher';

const CategoryPage = () => (
    <Placment>
      <Sidebar/>
      <Mainpart>
        <Category whatContent={getKategori} />
        <Products whatProducts={getProducts}/>
      </Mainpart>
    </Placment>
);

export default CategoryPage;
