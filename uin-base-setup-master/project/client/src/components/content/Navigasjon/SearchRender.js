import styled from 'styled-components/macro';
import ProductsLayout from '../Products/ProductsLayout';
import SearchFetch from './SearchFetch';

const Div = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin: 30px 10px 50px 50px;
`

const SearchRender = ({produkts}) => {

console.log(produkts);

if (status === 'loading') return <p>Loading...</p>;
if (status === 'error') return <p>Noe gikk galt når data ble hentet. {produkts?.message}</p>;

return (
  <Div>
      {produkts?.length > 0 ? produkts.map((produkts) => <ProductsLayout key={produkts.slug} {...produkts} />)
      : null}
  </Div>
)
};

export default SearchRender;
