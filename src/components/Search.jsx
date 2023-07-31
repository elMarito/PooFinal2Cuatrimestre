import React, { useContext } from 'react'
import { appContext } from '../context/appContext';
import '../styles/search.css';

const Search = () => {
  const { cache, setCache } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // document.getElementById("searchForm").reset();
  }

  const handleChange = (e) => {
    e.preventDefault();
    setCache((prevState) => ({ ...prevState, search: e.target.value, }));
  }

  return (
    <div className='searchForm'>
      <form id='searchForm' onSubmit={handleSubmit}>
        <input id='searchData'
          type="search"
          onChange={handleChange}
          required name='search'
          placeholder="Search products, brands and more…" />
        <input type="submit" value="Search" />
        {/* <button type='submit'>Search</button> */}
      </form>
    </div>
  )
}

export default Search