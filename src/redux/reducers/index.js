import { combineReducers } from 'redux';

import { recipeReducer } from './recipe.reducer';

const allReducers = combineReducers({
  recipes: recipeReducer,
});

export default allReducers;
