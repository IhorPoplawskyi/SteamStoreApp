import styled from 'styled-components';

import { NavBar } from './NavBar';
import { GameCard } from './GameCard';
import { Preloader } from '../Preloader';

import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setOffset, setPaginationResults } from '../../redux/stateSlice';

const StyledMainPage = styled.div`
    width: 100%;
`
const StyledCardContainer = styled.div`
    margin-top: 60px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
`

const StyledButton = styled.button`
    width: 90px;
    height: 45px;
    border: none;
    background: white;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
`
const StyledContainerButton = styled.div`
    display: flex;
    justify-content: center;
`

const StyledNotFound = styled.div`
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
`

export const MainPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const offset = useAppSelector(state => state.stateSlice.offset);
    const results = useAppSelector(state => state.stateSlice.games);
    const isLoading = useAppSelector(state => state.stateSlice.isLoading);
    const paginationResults = useAppSelector(state => state.stateSlice.paginationGames);

    const countPerPage = 4;
    const showLoadMore = offset * countPerPage < 25;
    console.log(offset)

    useEffect(() => {
        if (results !== null && results.length !== 0) dispatch(setPaginationResults(results?.slice(0, countPerPage * offset)));
    }, [results, offset, dispatch])

    return (
        <StyledMainPage>
            <NavBar />
            {isLoading && <Preloader /> }
            <StyledCardContainer>
                {paginationResults && paginationResults!.map(el => <GameCard key={el.appId} {...el} />)}
            </StyledCardContainer>
            {results?.length === 0 ? <StyledNotFound>Not found games by this name!</StyledNotFound> : null}
            {paginationResults && <StyledContainerButton>
                {showLoadMore && <StyledButton onClick={() =>  dispatch(setOffset(offset + 1)) }>Show more</StyledButton>}
            </StyledContainerButton>}
        </StyledMainPage>
    )
}