import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetClothingListActionPayload } from '../../types/store/reducers.types';
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
      clothingIdsByType: { shirts: [], pants: [], shoes: [] }
    }
  },
  common: {}
}


export const clothingSlice = createSlice({
  name: 'clothing',
  initialState,
  reducers: {
    setClothingList: (state, action: PayloadAction<SetClothingListActionPayload>) => {
      state.api.requests.clothingList = action.payload.clothingList;
      state.api.requests.clothingIdsByType = action.payload.clothingIdsByType
    },
  },
});

export const { setClothingList: setClothingListAction } = clothingSlice.actions;

export const selectUiData = (state: RootState) => state.clothing.ui.data;

export default clothingSlice.reducer;
