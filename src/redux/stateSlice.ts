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

interface singleGame {
  imgUrl: string
  title: string
  developer: {
    name: string
    link: string;
  }
  publisher: {
    link: string
    name: string
  }
  released: string
  description: string
  allReviews: {
    summary: string
    reviewCount: string
    ratingValue: string
    bestRating: string
    worstRating: string
  }
  price: "Free to Play"
  DLCs: string
}

interface IinitialState {
  games: game[] | null
  likeList: game[]
  isLoading: boolean
  gameName: string
  page: number
  currentGame: singleGame | null
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
    setCurrentGame(state, action: PayloadAction<singleGame>) {
      state.currentGame = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    sortByPrice(state, action: PayloadAction<string>) {
      if (action.payload === 'from lower to bigger') state.games?.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      if (action.payload === 'from bigger to lower') state.games?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    },
    sortByPublishedDate(state, action: PayloadAction<string>) {
      if (action.payload === 'Latest') state.games?.sort((a, b) => Date.parse(a.released) - Date.parse(b.released));
      if (action.payload === 'Newest') state.games?.sort((a, b) => Date.parse(b.released) - Date.parse(a.released));
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
  sortByPrice,
  sortByPublishedDate,
} = stateSlice.actions
export default stateSlice.reducer
