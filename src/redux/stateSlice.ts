import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const localStorageState = localStorage.getItem('LikedItems');

const mockValue = [
    {
        "appId": "1174180",
        "title": "Red Dead Redemption 2",
        "url": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/?snr=1_7_7_151_150_1",
        "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_sm_120.jpg?t=1671485009",
        "released": "5 Dec, 2019",
        "reviewSummary": "Very Positive<br>89% of the 320,049 user reviews for this game are positive.",
        "price": "                        59,99€19,79€                    "
    },
    {
        "appId": "1404210",
        "title": "Red Dead Online",
        "url": "https://store.steampowered.com/app/1404210/Red_Dead_Online/?snr=1_7_7_151_150_1",
        "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/1404210/capsule_sm_120.jpg?t=1656615218",
        "released": "1 Dec, 2020",
        "reviewSummary": "Very Positive<br>84% of the 44,382 user reviews for this game are positive.",
        "price": "                        19,99€9,99€                    "
    },
    {
        "appId": "543440",
        "title": "Cold Iron - Quick Draw Western Duels",
        "url": "https://store.steampowered.com/app/543440/Cold_Iron__Quick_Draw_Western_Duels/?snr=1_7_7_151_150_1",
        "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/543440/capsule_sm_120.jpg?t=1667325972",
        "released": "29 Jan, 2018",
        "reviewSummary": "Mostly Positive<br>78% of the 37 user reviews for this game are positive.",
        "price": "                        11,59€                    "
    },
    {
        "appId": "755950",
        "title": "Fantasy Quest Solitaire",
        "url": "https://store.steampowered.com/app/755950/Fantasy_Quest_Solitaire/?snr=1_7_7_151_150_1",
        "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/755950/capsule_sm_120.jpg?t=1660765330",
        "released": "16 Jan, 2018",
        "reviewSummary": "Very Positive<br>81% of the 72 user reviews for this game are positive.",
        "price": "                        8,99€                    "
    },
    {
        "appId": "1197440",
        "title": "Broken Spell 2",
        "url": "https://store.steampowered.com/app/1197440/Broken_Spell_2/?snr=1_7_7_151_150_1",
        "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/1197440/capsule_sm_120.jpg?t=1667016654",
        "released": "11 Feb, 2020",
        "reviewSummary": "Mostly Negative<br>36% of the 111 user reviews for this game are positive.",
        "price": "                        8,19€                    "
    }
]

const curGame = {
  "imgUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
  "title": "Red Dead Redemption 2",
  "developer": {
      "link": "https://store.steampowered.com/developer/rockstargames?snr=1_5_9__400",
      "name": "Rockstar Games"
  },
  "publisher": {
      "link": "https://store.steampowered.com/publisher/rockstargames?snr=1_5_9__400",
      "name": "Rockstar Games"
  },
  "released": "5 Dec, 2019",
  "description": "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
  "tags": [],
  "allReviews": {
    "summary": "Very Positive"
  },
  "price": "19,79€",
  "DLCs": []
}

export interface gameInfo {
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
  tags: {
    url: string, name: string
  } []
  allReviews: {
    summary?: string
    reviewCount?: string
    ratingValue?: string
    bestRating?: string
    worstRating?: string
  }
  price: string
  DLCs: {
    appId: string
    url: string
    name: string
    price: string
  }[]
}

interface IinitialState {
  games: gameInfo[] | null
  isLoading: boolean
  gameName: string
  offset: number
  currentGame: singleGame | null
  paginationGames: gameInfo[] | null
}

const initState: IinitialState = {
  games: mockValue,
  isLoading: false,
  gameName: '',
  offset: 1,
  currentGame: curGame,
  paginationGames: null,
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setWordtoSearch(state, action: PayloadAction<string>) {
      state.gameName = action.payload
    },
    setGamesResults(state, action: PayloadAction<gameInfo[]>) {
      state.games = action.payload
    },
    setPaginationResults(state, action: PayloadAction<gameInfo[]>) {
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
  }
})

export const {
  setIsLoading,
  setOffset,
  setGamesResults,
  setPaginationResults,
  setWordtoSearch,
  setCurrentGame,
  sortByPrice,
  sortByPublishedDate,
} = stateSlice.actions
export default stateSlice.reducer
