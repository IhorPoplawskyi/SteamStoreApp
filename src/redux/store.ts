import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import likeListSlice from "./likeListSlice";
import stateSlice from "./stateSlice";
import { gameInfo } from "../types";

function saveToLocalStorage(state: gameInfo[]) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("LikedItems", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const rootReducer = combineReducers({
  stateSlice,
  likeListSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

store.subscribe(() =>
  saveToLocalStorage(store.getState().likeListSlice.likeList)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
