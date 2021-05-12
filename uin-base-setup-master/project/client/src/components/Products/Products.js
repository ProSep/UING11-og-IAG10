import { ProductsArea, ButtonFlexBox, Viewbuttons } from '../../styles/Styles';
import ProductsFetcher from './ProductsFetcher';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import { useState } from 'react';
import ProductsLayoutList from './ProductsLayoutList';
import ProductsLayoutGrid from './ProductsLayoutGrid';

const Products = ({whatProducts}) => {

const produkts = ProductsFetcher(whatProducts);

const [view, setView] = useState("grid");

  if (view == "grid") {
    return (
      <>
      <ButtonFlexBox>
          <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="inherit"/></Viewbuttons>
          <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="inherit"/></Viewbuttons>
        </ButtonFlexBox>
      <ProductsArea grid="repeat(4, 1fr)">
          {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayoutGrid key={produkts.slug} {...produkts} />)
          : null}
      </ProductsArea>
      </>
    )
    } else if (view == "list") {
      return (
        <>
      <ButtonFlexBox>
          <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="inherit"/></Viewbuttons>
          <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="inherit"/></Viewbuttons>
        </ButtonFlexBox>
        <ProductsArea view="repeat(1, 1fr)">
            {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayoutList key={produkts.slug} {...produkts} />)
            : null}
        </ProductsArea>
        </>
      )
    };
  }

export default Products;
