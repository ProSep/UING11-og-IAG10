import styled from 'styled-components/macro';
import ProductsFetcher from './ProductsFetcher';
import ProductsLayout from './ProductsLayout';

const Products = ( {whatProducts} ) => {

const produkts = ProductsFetcher();

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

const PorductsAlignment = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  height: auto;
`
return (
  <PorductsAlignment>
      {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayout key={produkts.slug} {...produkts} />)
      : null}
  </PorductsAlignment>
)
};

export default Products;
