import { FC, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { setWordtoSearch } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getGames } from '../../redux/thunks';
import style from '../MainPage/SearchBar.module.css';

const SearchBar: FC = () => {
  const gameName = useAppSelector(state => state.stateSlice.gameName);
  const dispatch = useAppDispatch();
  const debouncedSearchTerm = useDebounce(gameName, 800)
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getGames(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])
  return (
    <input
      className={style.SearchBar}
      placeholder='Enter an app name...'
      value={gameName}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setWordtoSearch(event.target.value))} />
  )
}

export default SearchBar;