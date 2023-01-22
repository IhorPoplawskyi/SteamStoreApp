import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { gameInfo } from "./stateSlice";

const localStorageState = localStorage.getItem('LikedItems');

interface IinitialState {
  likeList: gameInfo[]
  showLikeList: boolean
}

const initState: IinitialState = {
  likeList: localStorageState === null ? [] : JSON.parse(localStorageState),
  showLikeList: false,
}

const likeListSlice = createSlice({
  name: 'LikeListSlice',
  initialState: initState,
  reducers: {
    addToLikeList(state, action: PayloadAction<gameInfo>) {
      state.likeList!.push(action.payload);
    },
    deleteFromLikeList(state, action: PayloadAction<string>) {
      state.likeList = state.likeList!.filter(el => el.appId !== action.payload);
    },
    deleteAllFromLikeList(state) {
      state.likeList = [];
    },
    showLikeList(state, action: PayloadAction<boolean>) {
      state.showLikeList = action.payload;
    },
  }
})

export const {
  addToLikeList,
  deleteFromLikeList,
  deleteAllFromLikeList,
  showLikeList,
} = likeListSlice.actions;

export default likeListSlice.reducer;
