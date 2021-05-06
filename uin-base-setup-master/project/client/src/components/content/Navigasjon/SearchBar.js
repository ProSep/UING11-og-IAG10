import { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

const SearchBarStyle = styled.input`
  width: "20rem";
  background: "#1F1F1F1F";
  border: "none";
  padding: "0.5rem";
`;

const SearchBar = ({ onSubmit }) => {

  const [search, setSearch] = useState();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(search);
  };


  return (
      <>
      <Route render={({ history}) => (
        <form onSubmit={handleSubmit}>
          <SearchBarStyle
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Search..."
            id="search"
          />
          <button type='submit'onClick={() => { history.push(`/search/results/${search}`) }}>🔍</button>
        </form>
        )} />
      </>
  );
};
export default SearchBar;
