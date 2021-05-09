import SearchRender from '../components/content/Navigasjon/SearchRender';
import Category from '../components/content/pageContent/categoryContent';
import { Container } from '../styles/Styles';
import { getKategori } from '../utils/yourService';


const SearchPage = () => {
  return (
    <Container>
      <Category whatContent={getKategori}/>
      <SearchRender/>
    </Container>
  );
};

export default SearchPage;