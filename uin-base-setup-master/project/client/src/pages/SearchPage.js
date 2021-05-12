import SearchRender from "../components/content/Navigasjon/SearchRender";
import Sidebar from '../components/Sidebar.js/Sidebar';
import { Placment, Mainpart } from '../styles/Styles';


const SearchPage = () => {
  return (
      <Placment>
        <Sidebar />
        <Mainpart>
          <SearchRender />
        </Mainpart>
      </Placment>
  );
};

export default SearchPage;
