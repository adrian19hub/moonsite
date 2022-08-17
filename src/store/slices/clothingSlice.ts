import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetClothingListActionPayloadP } from '../../types/store/reducers.types';
import { ClothingSliceState } from '../../types/store/slice.types';
import { RootState } from '../index';


const initialState: ClothingSliceState = {
  ui: {
    data: {
      createdOutfits: [],
      itemSuggestions: [],
    }

  },
  api: {
    requests: {
      clothingList: {},
      clothingIdsByType: { shirts: new Set([]), pants: new Set([]), shoes: new Set([]) }
    }
  },
  common: {}
}


export const clothingSlice = createSlice({
  name: 'clothing',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setClothingList: (state, action: PayloadAction<SetClothingListActionPayloadP>) => {
      state.api.requests.clothingList = action.payload.clothingList;
      state.api.requests.clothingIdsByType = action.payload.clothingIdsByType
    },
  },
});

export const { setClothingList: setClothingListAction } = clothingSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUiData = (state: RootState) => state.clothing.ui.data;

export default clothingSlice.reducer;
