import { useContext } from 'react';
import { ProductsArea } from '../../../styles/Styles';
import { SearchContext } from '../../../utils/SearchContext';
import ProductsLayout from '../Products/ProductsLayout';


const SearchRender = () => {

  const {searchp} = useContext(SearchContext);

console.log(searchp);

return (
  <ProductsArea>
      {searchp?.length > 0 ? searchp.map((searchp) => <ProductsLayout key={searchp.slug} {...searchp} />)
      : null}
  </ProductsArea>
)
};

export default SearchRender;
