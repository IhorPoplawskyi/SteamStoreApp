import { RootState } from "./store";

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  setGamesError,
  setGamesResults,
  setCurrentGame,
  setCurrentGameError,
} from "./stateSlice";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef3d81f10msh81d8f2b66d806e2p1b071djsn6648ea2c76c9",
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
};

export const fetchGames = createAsyncThunk(
  "stateSlice/fetchGames",
  async (_args, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { searchTerm } = state.stateSlice;

    const response = await fetch(
      `https://steam2.p.rapidapi.com/search/${searchTerm}/page/1`,
      options
    );
    const data = await response.json();
    if (response.ok) {
      thunkAPI.dispatch(setGamesResults(data));
      thunkAPI.dispatch(setGamesError(null));
    } else if (!response.ok) {
      thunkAPI.dispatch(setGamesResults(null));
      thunkAPI.dispatch(setGamesError(data));
    }
    return data;
  }
);

export const fetchDetailedGame = createAsyncThunk(
  "stateSlice/fetchDetailedGame",
  async (appId: string, thunkAPI) => {
    const response = await fetch(
      `https://steam2.p.rapidapi.com/appDetail/${appId}`,
      options
    );
    const data = await response.json();
    if (response.ok) {
      thunkAPI.dispatch(setCurrentGame(data));
      thunkAPI.dispatch(setCurrentGameError(null));
    } else if (!response.ok) {
      thunkAPI.dispatch(setCurrentGame(null));
      thunkAPI.dispatch(setCurrentGameError(data));
    }
    return data;
  }
);
