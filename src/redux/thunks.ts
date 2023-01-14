import { setIsLoading, setGamesResults, setCurrentGame } from "./stateSlice";
import { AppDispatch } from "./store";

const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0c05d51f5msh03556242bd12f44p164565jsn49ae83ae546b',
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