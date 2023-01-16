import style from '../MainPage/SearchBar.module.css';

import useDebounce from '../../hooks/useDebounce';

import { FC, useEffect } from 'react';

import { getGames } from '../../redux/thunks';
import { setWordtoSearch } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const SearchBar: FC = (): JSX.Element => {
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