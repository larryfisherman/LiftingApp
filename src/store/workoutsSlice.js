import { createSlice } from "@reduxjs/toolkit";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: null,
  },
  reducers: {
    setWorkouts: (state, action) => {
      state.workouts = action.payload.workouts;
    },
  },
});

export const { setWorkouts } = workoutsSlice.actions;
export const selectWorkouts = (state) => state.workouts.workouts;

export default workoutsSlice.reducer;
