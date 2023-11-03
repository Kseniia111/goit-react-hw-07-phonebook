import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = { value: '' };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filtersInitialState,
//   reducers: {
//     setFilter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
