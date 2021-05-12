import { useContext, useState } from 'react';
import { SearchContext } from '../../../utils/SearchContext';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import styled from "styled-components";
import ProductsLayoutList from '../../Products/ProductsLayoutList';
import ProductsLayoutGrid from '../../Products/ProductsLayoutGrid';
import { ProductsArea } from '../../../styles/Styles';


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

const SearchRender = () => {

  const {searchp} = useContext(SearchContext);

  console.log(searchp)

  const [view, setView] = useState("grid");

  if (view == "grid") {
    return (
      <>
        <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="large"/></Viewbuttons>
        <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="large"/></Viewbuttons>
      <ProductsArea grid="repeat(4, 1fr)">
          {searchp?.length > 0 ? searchp.map((searchp) => <ProductsLayoutGrid key={searchp.slug} {...searchp} />)
          : null}
      </ProductsArea>
      </>
    )
    } else if (view == "list") {
      return (
        <>
          <Viewbuttons onClick={() => setView("list")}><ListIcon fontSize="large"/></Viewbuttons>
          <Viewbuttons onClick={() => setView("grid")}><GridOnIcon fontSize="large"/></Viewbuttons>
        <ProductsArea grid="repeat(1, 1fr)">
            {searchp?.length > 0 ? searchp.map((searchp) => <ProductsLayoutList key={searchp.slug} {...searchp} />)
            : null}
        </ProductsArea>
        </>
      )
    };
  };


export default SearchRender;
