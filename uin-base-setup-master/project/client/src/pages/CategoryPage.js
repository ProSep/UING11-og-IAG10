import Category from '../components/content/pageContent/categoryContent';
import Products from '../components/content/Products/Products';
import { getKategori } from '../utils/yourService';


const CategoryPage = () => {
  return (
    <>
      <Category whatContent={getKategori}/>
      <Products/>
    </>
  );
};

export default CategoryPage;
