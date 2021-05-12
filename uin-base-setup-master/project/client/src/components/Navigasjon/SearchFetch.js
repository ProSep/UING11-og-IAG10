import { useContext, useState } from "react";
import { SearchContext } from "../../../utils/SearchContext";
import { getSearch } from "../../../utils/SanityFercher";
import SearchBar from "./SearchBar";
import SearchRender from "./SearchRender";

const SearchFetch = () => {
  const {searchp, setSearchp} = useContext(SearchContext);
  const [status, setStatus] = useState(null);

  const onSubmit = async (search) => {
    setStatus("loading");
    try {
      const content = await getSearch(search);
      setSearchp(content);
      setStatus("initial");
    } catch (error) {
      setStatus("error");
      setSearchp(error);
      console.log(error);
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Noe gikk galt når data ble hentet. {searchp?.message}</p>;


  return ({ status },
    <>
      <SearchBar onSubmit={onSubmit}/>
    </>
  );
};

export default SearchFetch;
