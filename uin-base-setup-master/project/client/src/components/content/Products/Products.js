import { ProductsArea } from '../../../styles/Styles';
import ProductsFetcher from './ProductsFetcher';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import styled from "styled-components";
import { useState } from 'react';
import ProductsLayoutList from './ProductsLayoutList';
import ProductsLayoutGrid from './ProductsLayoutGrid';

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

const Products = ( {whatProducts} ) => {

const produkts = ProductsFetcher();

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

const [view, setView] = useState("grid");

console.log(view)
  if (view == "grid") {
    return (
      <>
        <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="large"/></Viewbuttons>
        <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="large"/></Viewbuttons>
      <ProductsArea view="repeat(4, 1fr)">
          {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayoutGrid key={produkts.slug} {...produkts} />)
          : null}
      </ProductsArea>
      </>
    )
    } else if (view == "list") {
      return (
        <>
          <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="large"/></Viewbuttons>
          <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="large"/></Viewbuttons>
        <ProductsArea view="repeat(1, 1fr)">
            {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayoutList key={produkts.slug} {...produkts} />)
            : null}
        </ProductsArea>
        </>
      )
    };
  }


export default Products;
