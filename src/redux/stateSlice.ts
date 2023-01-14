import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface response {
  appId: string
  title: string
  url: string
  imgUrl: string
  released: string
  reviewSummary: string
  price: string
}

interface IinitialState {
  games: response[] | null
  likeList: response[]
  isLoading: boolean
  gameName: string
  page: string
}

const initState: IinitialState = {
  games: null,
  likeList: [],
  isLoading: false,
  gameName: '',
  page: '1'
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setWordtoSearch(state, action: PayloadAction<string>) {
      state.gameName = action.payload
    },
    setResults(state, action: PayloadAction<response[]>) {
      state.games = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload
    },
    addToLikeList(state, action: PayloadAction<response>) {
      state.likeList.push(action.payload);
    },
    deleteFromLikeList(state, action: PayloadAction<string>) {
      state.likeList = state.likeList.filter(el => el.appId !== action.payload);
    },
  }
})

export const {
  setIsLoading,
  setPage,
  setResults,
  setWordtoSearch,
} = stateSlice.actions
export default stateSlice.reducer
