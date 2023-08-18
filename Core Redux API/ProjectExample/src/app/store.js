import { createStore, combineReducers } from "redux";

import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";

const reducers = {
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
};

export const store = createStore(combineReducers(reducers));
