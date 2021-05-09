import { ProductsArea } from '../../../styles/Styles';
import ProductsFetcher from './ProductsFetcher';
import ProductsLayout from './ProductsLayout';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import styled from "styled-components";
import { useState } from 'react';

const Viewbuttons = styled.button`
  background: ${({ theme }) => theme.colors.light};
  color:  ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 3px;
  align-content: center;
  display: flex;
  transition-duration: 0.1s;
  margin: 40 40 40 40;
  :hover {
    background: ${({ theme }) => theme.colors.dark};
    color:  ${({ theme }) => theme.colors.light};
  }
`

// const view = {
//   list: ProductsAreaList,
//   grid: ProductsAreaGrid
// }

const Products = ( {whatProducts} ) => {

const produkts = ProductsFetcher();

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

const [view, setView] = useState("grid")

return (
  <>
    <Viewbuttons><ListIcon fontSize="large"/></Viewbuttons>
    <Viewbuttons><GridOnIcon fontSize="large"/></Viewbuttons>
  <ProductsArea>
      {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayout key={produkts.slug} {...produkts} />)
      : null}
  </ProductsArea>
  </>
)
};

export default Products;
