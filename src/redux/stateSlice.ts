import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDetailedGame, fetchGames } from "./thunks";
import { gameInfo, singleGame } from "../types";

interface Error {
  message: string;
}

interface IinitialState {
  games: gameInfo[] | null;
  gamesError: Error | null;
  statusMP: "init" | "loading" | "success" | "error";
  statusGP: "init" | "loading" | "success" | "error";
  searchTerm: string;
  currentGame: singleGame | null;
  currentGameError: Error | null;
}

const initState: IinitialState = {
  games: null,
  gamesError: null,
  statusMP: "init",
  statusGP: "init",
  searchTerm: "",
  currentGame: null,
  currentGameError: null,
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState: initState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setGamesResults(state, action: PayloadAction<gameInfo[] | null>) {
      state.games = action.payload;
    },
    setGamesError(state, action: PayloadAction<Error | null>) {
      state.gamesError = action.payload;
    },
    setCurrentGame(state, action: PayloadAction<singleGame | null>) {
      state.currentGame = action.payload;
    },
    setCurrentGameError(state, action: PayloadAction<Error | null>) {
      state.currentGameError = action.payload;
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
      state.statusMP = "success";
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.statusMP = "error";
    });
    builder.addCase(fetchGames.pending, (state) => {
      state.statusMP = "loading";
    });
    builder.addCase(fetchDetailedGame.fulfilled, (state, action) => {
      state.currentGame = action.payload;
      state.statusGP = "success";
    });
    builder.addCase(fetchDetailedGame.rejected, (state) => {
      state.statusGP = "error";
    });
    builder.addCase(fetchDetailedGame.pending, (state) => {
      state.statusGP = "loading";
    });
  },
});

export const {
  setGamesResults,
  setGamesError,
  setSearchTerm,
  setCurrentGame,
  setCurrentGameError,
  sortByPrice,
  sortByPublishedDate,
} = stateSlice.actions;
export default stateSlice.reducer;
