import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    "imgUrl": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1673427135",
    "title": "The Witcher® 3: Wild Hunt",
    "developer": {
        "link": "https://store.steampowered.com/developer/CDPR?snr=1_5_9__400",
        "name": "CD PROJEKT RED"
    },
    "publisher": {
        "link": "https://store.steampowered.com/publisher/CDPR?snr=1_5_9__400",
        "name": "CD PROJEKT RED"
    },
    "released": "18 May, 2015",
    "description": "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
    "tags": [
        {
            "url": "https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__409",
            "name": "Open World"
        },
        {
            "url": "https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__409",
            "name": "RPG"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Story%20Rich/?snr=1_5_9__409",
            "name": "Story Rich"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Atmospheric/?snr=1_5_9__409",
            "name": "Atmospheric"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Mature/?snr=1_5_9__409",
            "name": "Mature"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Fantasy/?snr=1_5_9__409",
            "name": "Fantasy"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409",
            "name": "Adventure"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__409",
            "name": "Singleplayer"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Choices%20Matter/?snr=1_5_9__409",
            "name": "Choices Matter"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Nudity/?snr=1_5_9__409",
            "name": "Nudity"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Great%20Soundtrack/?snr=1_5_9__409",
            "name": "Great Soundtrack"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Third%20Person/?snr=1_5_9__409",
            "name": "Third Person"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Medieval/?snr=1_5_9__409",
            "name": "Medieval"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Action/?snr=1_5_9__409",
            "name": "Action"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Multiple%20Endings/?snr=1_5_9__409",
            "name": "Multiple Endings"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Action%20RPG/?snr=1_5_9__409",
            "name": "Action RPG"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Magic/?snr=1_5_9__409",
            "name": "Magic"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Dark%20Fantasy/?snr=1_5_9__409",
            "name": "Dark Fantasy"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Dark/?snr=1_5_9__409",
            "name": "Dark"
        },
        {
            "url": "https://store.steampowered.com/tags/en/Sandbox/?snr=1_5_9__409",
            "name": "Sandbox"
        }
    ],
    "allReviews": {
        "summary": "Overwhelmingly Positive"
    },
    "price": "27,84€",
    "DLCs": [
        {
            "appId": "355880",
            "url": "https://store.steampowered.com/app/355880/The_Witcher_3_Wild_Hunt__Expansion_Pass/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Expansion Pass",
            "price": "-70%24,99€7,49€"
        },
        {
            "appId": "378649",
            "url": "https://store.steampowered.com/app/378649/The_Witcher_3_Wild_Hunt__Hearts_of_Stone/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Hearts of Stone",
            "price": "-70%9,99€2,99€"
        },
        {
            "appId": "370000",
            "url": "https://store.steampowered.com/app/370000/The_Witcher_3_Wild_Hunt__Temerian_Armor_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Temerian Armor Set",
            "price": "Free"
        },
        {
            "appId": "370001",
            "url": "https://store.steampowered.com/app/370001/The_Witcher_3_Wild_Hunt__Beard_and_Hairstyle_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Beard and Hairstyle Set",
            "price": "Free"
        },
        {
            "appId": "370002",
            "url": "https://store.steampowered.com/app/370002/The_Witcher_3_Wild_Hunt__Alternative_Look_for_Yennefer/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Alternative Look for Yennefer",
            "price": "Free"
        },
        {
            "appId": "370003",
            "url": "https://store.steampowered.com/app/370003/The_Witcher_3_Wild_Hunt__New_Quest_Contract_Missing_Miners/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Quest 'Contract: Missing Miners'",
            "price": "Free"
        },
        {
            "appId": "373950",
            "url": "https://store.steampowered.com/app/373950/The_Witcher_3_Wild_Hunt__Nilfgaardian_Armor_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Nilfgaardian Armor Set",
            "price": "Free"
        },
        {
            "appId": "373951",
            "url": "https://store.steampowered.com/app/373951/The_Witcher_3_Wild_Hunt__Elite_Crossbow_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Elite Crossbow Set",
            "price": "Free"
        },
        {
            "appId": "376390",
            "url": "https://store.steampowered.com/app/376390/The_Witcher_3_Wild_Hunt__New_Quest_Fools_Gold/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Quest 'Fool's Gold'",
            "price": "Free"
        },
        {
            "appId": "376391",
            "url": "https://store.steampowered.com/app/376391/The_Witcher_3_Wild_Hunt__Ballad_Heroes_Neutral_Gwent_Card_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - 'Ballad Heroes' Neutral Gwent Card Set",
            "price": "Free"
        },
        {
            "appId": "378640",
            "url": "https://store.steampowered.com/app/378640/The_Witcher_3_Wild_Hunt__New_Quest_Scavenger_Hunt_Wolf_School_Gear/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Quest: 'Scavenger Hunt: Wolf School Gear'",
            "price": "Free"
        },
        {
            "appId": "378641",
            "url": "https://store.steampowered.com/app/378641/The_Witcher_3_Wild_Hunt__Alternative_Look_for_Triss/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Alternative Look for Triss",
            "price": "Free"
        },
        {
            "appId": "378642",
            "url": "https://store.steampowered.com/app/378642/The_Witcher_3_Wild_Hunt__New_Quest_Contract_Skelliges_Most_Wanted/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Quest 'Contract: Skellige's Most Wanted'",
            "price": "Free"
        },
        {
            "appId": "378643",
            "url": "https://store.steampowered.com/app/378643/The_Witcher_3_Wild_Hunt__Skellige_Armor_Set/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Skellige Armor Set",
            "price": "Free"
        },
        {
            "appId": "378644",
            "url": "https://store.steampowered.com/app/378644/The_Witcher_3_Wild_Hunt__Alternative_Look_for_Ciri/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Alternative Look for Ciri",
            "price": "Free"
        },
        {
            "appId": "378645",
            "url": "https://store.steampowered.com/app/378645/The_Witcher_3_Wild_Hunt__New_Quest_Where_the_Cat_and_Wolf_Play/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Quest 'Where the Cat and Wolf Play...'",
            "price": "Free"
        },
        {
            "appId": "378646",
            "url": "https://store.steampowered.com/app/378646/The_Witcher_3_Wild_Hunt__New_Finisher_Animations/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - New Finisher Animations",
            "price": "Free"
        },
        {
            "appId": "378647",
            "url": "https://store.steampowered.com/app/378647/The_Witcher_3_Wild_Hunt__NEW_GAME/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - NEW GAME +",
            "price": "Free"
        },
        {
            "appId": "378648",
            "url": "https://store.steampowered.com/app/378648/The_Witcher_3_Wild_Hunt__Blood_and_Wine/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Blood and Wine",
            "price": "-70%19,99€5,99€"
        },
        {
            "appId": "1229320",
            "url": "https://store.steampowered.com/app/1229320/The_Witcher_3_Wild_Hunt_Soundtrack/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt Soundtrack",
            "price": "-50%9,99€4,99€"
        },
        {
            "appId": "1233280",
            "url": "https://store.steampowered.com/app/1233280/The_Witcher_3_Wild_Hunt__Hearts_of_Stone_Soundtrack/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Hearts of Stone Soundtrack",
            "price": "-50%7,99€3,99€"
        },
        {
            "appId": "1233340",
            "url": "https://store.steampowered.com/app/1233340/The_Witcher_3_Wild_Hunt__Blood_and_Wine_Soundtrack/?snr=1_5_9__405",
            "name": "The Witcher 3: Wild Hunt - Blood and Wine Soundtrack",
            "price": "-70%7,99€2,39€"
        }
    ]
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
