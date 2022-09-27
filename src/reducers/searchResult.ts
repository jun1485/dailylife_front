import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IResults = string[];

interface IState {
  results: IResults;
}

const searchResult = createSlice({
  name: 'searchResult',
  initialState: {
    results: [] as IResults,
  },
  reducers: {
    bringItems: (state, action: PayloadAction<IResults>): IState => ({
      results: [...state.results, ...action.payload],
    }),
  },
});

export const searchedDataActions = searchResult.actions;
export default searchResult;
