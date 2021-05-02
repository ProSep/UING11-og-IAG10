import styled from 'styled-components/macro';
import ProductsLayout from './ProductsLayout';
import ProductsFetcher from './ProductsFetcher';

const Products = () => {

const produkts  = ProductsFetcher();

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {navitem?.message}</p>;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin: 30px 10px 50px 50px;
`
return (
  <Div>
      {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayout key={produkts.slug} {...produkts} />)
      : null}
  </Div>

)
};

export default Products;
