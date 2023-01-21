import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import stateSlice from "./stateSlice";
import { game } from "./stateSlice";

function saveToLocalStorage(state: game[]) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("LikedItems", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const rootReducer = combineReducers({
  stateSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore();

store.subscribe(() => saveToLocalStorage(store.getState().stateSlice.likeList));

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector