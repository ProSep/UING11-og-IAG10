import SearchBar from '../components/content/Navigasjon/SearchBar';
import SearchFetch from '../components/content/Navigasjon/SearchFetch';
import SearchRender from '../components/content/Navigasjon/SearchRender';
import Category from '../components/content/pageContent/categoryContent';
import { getKategori } from '../utils/yourService';


const searchPage = () => {
  return (
    <>
      <Category whatContent={getKategori}/>
      <SearchFetch />
    </>
  );
};

export default searchPage;