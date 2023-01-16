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
  price: string
  DLCs: string
}

interface IinitialState {
  games: game[] | null
  likeList: game[]
  isLoading: boolean
  gameName: string
  offset: number
  currentGame: singleGame | null
  paginationGames: game[] | null
  showLikeList: boolean
}

const initState: IinitialState = {
  games: null,
  likeList: localStorageState === null ? [] : JSON.parse(localStorageState),
  isLoading: false,
  gameName: '',
  offset: 1,
  currentGame: null,
  paginationGames: null,
  showLikeList: false,
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
    setPaginationResults(state, action: PayloadAction<game[]>) {
      state.paginationGames = action.payload
    },
    setCurrentGame(state, action: PayloadAction<singleGame>) {
      state.currentGame = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload
    },
    sortByPrice(state, action: PayloadAction<string>) {
      state.paginationGames?.map(game => isNaN(parseFloat(game.price)) ? game.price = '0' : game);
      state.paginationGames?.map(game => game.price.replace(',', '.'))
      if (action.payload === 'from lower to bigger') state.paginationGames?.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      if (action.payload === 'from bigger to lower') state.paginationGames?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      state.paginationGames?.map(game => game.price === '0' ? game.price = 'Free to play' : game);
    },
    sortByPublishedDate(state, action: PayloadAction<string>) {
      if (action.payload === 'Latest') state.paginationGames?.sort((a, b) => Date.parse(a.released) - Date.parse(b.released));
      if (action.payload === 'Newest') state.paginationGames?.sort((a, b) => Date.parse(b.released) - Date.parse(a.released));
    },
    addToLikeList(state, action: PayloadAction<game>) {
      state.likeList!.push(action.payload);
    },
    deleteFromLikeList(state, action: PayloadAction<string>) {
      state.likeList = state.likeList!.filter(el => el.appId !== action.payload);
    },
    showLikeList(state) {
      state.showLikeList = !state.showLikeList;
    },
  }
})

export const {
  setIsLoading,
  setOffset,
  setGamesResults,
  setPaginationResults,
  setWordtoSearch,
  addToLikeList,
  deleteFromLikeList,
  setCurrentGame,
  sortByPrice,
  sortByPublishedDate,
  showLikeList,
} = stateSlice.actions
export default stateSlice.reducer
