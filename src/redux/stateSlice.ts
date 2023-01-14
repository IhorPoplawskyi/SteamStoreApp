import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const localStorageState = localStorage.getItem('LikedItems');

export interface game {
  appId: string
  title: string
  url: string
  imgUrl: string
  released: string
  reviewSummary: string
  price: string
}

interface IinitialState {
  games: game[] | null
  likeList: game[]
  isLoading: boolean
  gameName: string
  page: number
  currentGame: game | null
}

const initState: IinitialState = {
  games: null,
  likeList: localStorageState === null ? [] : JSON.parse(localStorageState),
  isLoading: false,
  gameName: '',
  page: 1,
  currentGame: null,
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setWordtoSearch(state, action: PayloadAction<string>) {
      state.gameName = action.payload
    },
    setGamesResults(state, action: PayloadAction<game[]>) {
      state.games = action.payload
    },
    setCurrentGame(state, action: PayloadAction<game>) {
      state.currentGame = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    addToLikeList(state, action: PayloadAction<game>) {
      state.likeList!.push(action.payload);
    },
    deleteFromLikeList(state, action: PayloadAction<string>) {
      state.likeList = state.likeList!.filter(el => el.appId !== action.payload);
    },
  }
})

export const {
  setIsLoading,
  setPage,
  setGamesResults,
  setWordtoSearch,
  addToLikeList,
  deleteFromLikeList,
  setCurrentGame,
} = stateSlice.actions
export default stateSlice.reducer
