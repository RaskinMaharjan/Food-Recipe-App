import React from 'react';

import SearchBar from './search-bar';
import RecipeList from './recipe-list';

const HomeView = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <RecipeList />
    </React.Fragment>
  );
};

export default HomeView;
