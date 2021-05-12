import { useContext, useState } from 'react';
import { SearchContext } from '../../utils/SearchContext';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import ProductsLayoutList from '../Products/ProductsLayoutList';
import ProductsLayoutGrid from '../Products/ProductsLayoutGrid';
import { ProductsArea, ButtonFlexBox, Viewbuttons } from '../../styles/Styles';


const SearchRender = () => {

  const {searchp} = useContext(SearchContext);

  console.log(searchp)

  const [view, setView] = useState("grid");

  if (view == "grid") {
    return (
      <>
      <ButtonFlexBox>
          <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="inherit"/></Viewbuttons>
          <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="inherit"/></Viewbuttons>
        </ButtonFlexBox>
      <ProductsArea grid="repeat(4, 1fr)">
          {searchp?.length > 0 ? searchp.map((searchp) => <ProductsLayoutGrid key={searchp.slug} {...searchp} />)
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
        <ProductsArea grid="repeat(1, 1fr)">
            {searchp?.length > 0 ? searchp.map((searchp) => <ProductsLayoutList key={searchp.slug} {...searchp} />)
            : null}
        </ProductsArea>
        </>
      )
    };
  };


export default SearchRender;
