import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDetailedGame, fetchGames } from "./thunks";
import { gameInfo, singleGame } from "../types";

interface IinitialState {
  games: gameInfo[] | null;
  status: "init" | "loading" | "success" | "error";
  searchTerm: string;
  currentGame: singleGame | null;
}

const initState: IinitialState = {
  games: null,
  status: "init",
  searchTerm: "",
  currentGame: null,
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState: initState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setGamesResults(state, action: PayloadAction<gameInfo[]>) {
      state.games = action.payload;
    },
    setCurrentGame(state, action: PayloadAction<singleGame>) {
      state.currentGame = action.payload;
    },
    sortByPrice(state, action: PayloadAction<string>) {
      state.games?.map((game) =>
        isNaN(parseFloat(game.price)) ? (game.price = "0") : game
      );
      state.games?.map((game) => game.price.replace(",", "."));
      if (action.payload === "low high")
        state.games?.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      if (action.payload === "high low")
        state.games?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      state.games?.map((game) =>
        game.price === "0" ? (game.price = "Free to play") : game
      );
    },
    sortByPublishedDate(state, action: PayloadAction<string>) {
      if (action.payload === "latest")
        state.games?.sort(
          (a, b) => Date.parse(a.released) - Date.parse(b.released)
        );
      if (action.payload === "newest")
        state.games?.sort(
          (a, b) => Date.parse(b.released) - Date.parse(a.released)
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(fetchGames.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchDetailedGame.fulfilled, (state, action) => {
      state.currentGame = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchDetailedGame.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(fetchDetailedGame.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const {
  setGamesResults,
  setSearchTerm,
  setCurrentGame,
  sortByPrice,
  sortByPublishedDate,
} = stateSlice.actions;
export default stateSlice.reducer;
