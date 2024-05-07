import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, name: action.payload };
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const selectFilteredContacts = (state) => state.filters.name;
