import { useState } from "react";
import { getSearch } from "../../../utils/yourService";
import SearchBar from "./SearchBar";
import SearchRender from "./SearchRender";

const SearchFetch = () => {
  const [produkts, setProdukts] = useState(null);
  const [status, setStatus] = useState(null);

  const onSubmit = async (search) => {
    setStatus("loading");
    try {
      const content = await getSearch(search);
      setProdukts(content);
      setStatus("initial");
    } catch (error) {
      setStatus("error");
      setProdukts(error);
      console.log(error);
    }
  };

  return ({ status }, produkts,
    <>
    <SearchBar onSubmit={onSubmit}/>
    <SearchRender produkts={produkts}/>
    </>
  );
};

export default SearchFetch;
