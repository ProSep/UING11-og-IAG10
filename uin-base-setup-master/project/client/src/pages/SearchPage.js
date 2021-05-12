import SearchRender from "../components/content/Navigasjon/SearchRender";
import Category from "../components/content/pageContent/categoryContent";
import Sidebar from '../components/Sidebar.js/Sidebar';
import { Container, Placment, Mainpart } from '../styles/Styles';
import { getKategori } from "../utils/yourService";


const SearchPage = () => {
  return (
    <Container>
      <Placment>
        <Sidebar />
        <Mainpart>
          <Category whatContent={getKategori} />
          <SearchRender />
        </Mainpart>
      </Placment>
    </Container>
  );
};

export default SearchPage;
