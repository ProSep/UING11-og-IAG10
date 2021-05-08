import { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchBarStyle = styled.input`
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
`;

const Button = styled.button`
  background: white;
  color: black;
  border: none;
  display: inline-block;
  align-self: flex-end;
`

const SearchAndButton = styled.form`
  background-color: white;
  border: 2px solid black;
  width: 20%;
  padding: 8px;
  align-items: center;
  display: flex;
`

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
        <SearchAndButton onSubmit={handleSubmit}>
          <SearchBarStyle
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Search..."
            id="search"
          />
          <Button type='submit'onClick={() => { history.push(`/search/results/${search}`) }}><SearchOutlinedIcon fontSize="large"/></Button>
        </SearchAndButton>
        )} />
      </>
  );
};
export default SearchBar;
