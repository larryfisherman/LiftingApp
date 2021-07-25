import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: null,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload.recipes;
    },
  },
});

export const { setRecipes } = recipesSlice.actions;
export const selectRecipes = (state) => state.recipes.recipes;

export default recipesSlice.reducer;
