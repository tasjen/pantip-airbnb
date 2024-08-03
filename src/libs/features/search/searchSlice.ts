import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  terms: string;
}

const initialState: SearchState = {
  terms: '',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerms: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.terms = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerms } = SearchSlice.actions;

export default SearchSlice.reducer;
