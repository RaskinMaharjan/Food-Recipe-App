import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipies } from '../api';
import { storeRecipies } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSearch = async () => {
    await getRecipies(input).then((res) => {
      if (res.data) {
        dispatch(storeRecipies(res.data.hits));
      }
    });
  };

  return (
    <div className="search-bar m-4">
      <input
        className="search-input"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter a dish name"
      />
      <button className="search-btn btn btn-sm" onClick={handleSearch}>
        <ion-icon name="search"></ion-icon>
      </button>
    </div>
  );
};

export default SearchBar;
