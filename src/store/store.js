import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import recipes from "./recipesSlice";
import workouts from "./workoutsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user,
  recipes,
  workouts,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
