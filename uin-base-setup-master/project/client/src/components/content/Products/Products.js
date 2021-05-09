import { ProductsArea } from '../../../styles/Styles';
import ProductsFetcher from './ProductsFetcher';
import ProductsLayout from './ProductsLayout';

const Products = ( {whatProducts} ) => {

const produkts = ProductsFetcher();

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

return (
  <ProductsArea>
      {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayout key={produkts.slug} {...produkts} />)
      : null}
  </ProductsArea>
)
};

export default Products;
