import { setIsLoading, setResults } from "./stateSlice";
import { AppDispatch } from "./store";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cea007575bmsh8ac618490079199p1f4533jsn33956ab000fe',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

export const getGames = (name: string, page: number = 1) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(`https://steam2.p.rapidapi.com/search/${name}/page/${page}`, options)
        const data = await response.json();
        dispatch(setResults(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}