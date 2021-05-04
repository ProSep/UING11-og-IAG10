import { useState } from 'react';

const SearchBar = () => {
  const SearchBarStyle = {
    width: '20rem',
    background: '#1F1F1F1F',
    border: 'none',
    padding: '0.5rem',
  };

  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    { search },
    (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={search}
            style={SearchBarStyle}
            placeholder="Search..."
            id="search"
          />
          <button type="submit">🔍</button>
        </form>
      </>
    )
  );
};
export default SearchBar;
