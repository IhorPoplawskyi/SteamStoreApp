import { createAsyncThunk } from "@reduxjs/toolkit";
import { gameInfo, singleGame } from "../types";
import { RootState } from "./store";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f0c05d51f5msh03556242bd12f44p164565jsn49ae83ae546b",
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
};

export const fetchGames = createAsyncThunk(
  "stateSlice/fetchGames",
  async (_args, thunkAPI): Promise<gameInfo[]> => {
    const state = thunkAPI.getState() as RootState;
    const { searchTerm } = state.stateSlice;

    const response = await fetch(
      `https://steam2.p.rapidapi.com/search/${searchTerm}/page/1`,
      options
    );
    const data = await response.json();
    return data;
  }
);

export const fetchDetailedGame = createAsyncThunk(
  "stateSlice/fetchDetailedGame",
  async (appId: string, thunkAPI): Promise<singleGame> => {
    const response = await fetch(
      `https://steam2.p.rapidapi.com/appDetail/${appId}`,
      options
    );
    const data = await response.json();
    return data;
  }
);
