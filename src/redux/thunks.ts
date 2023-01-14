import { setIsLoading, setGamesResults, setCurrentGame } from "./stateSlice";
import { AppDispatch } from "./store";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c47d6c8914msh594d30526273045p1ed380jsna2064a2ff076',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
    }
};

export const getGames = (name: string, page: number = 1) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(`https://steam2.p.rapidapi.com/search/${name}/page/${page}`, options)
        const data = await response.json();
        dispatch(setGamesResults(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}

export const getProd = (appId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(`https://steam2.p.rapidapi.com/appDetail/${appId}`, options)
        const data = await response.json();
        dispatch(setCurrentGame(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}