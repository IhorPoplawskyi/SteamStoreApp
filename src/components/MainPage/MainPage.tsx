import { FC, useEffect } from 'react'
import styled from 'styled-components';
import { setOffset, setPaginationResults } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { GameCard } from './GameCard';
import { NavBar } from './NavBar';

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

export const MainPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const countPerPage = 4;
    const offset = useAppSelector(state => state.stateSlice.offset);
    const results = useAppSelector(state => state.stateSlice.games);
    const paginationResults = useAppSelector(state => state.stateSlice.paginationGames);

    useEffect(() => {
        if (results !== null && results.length !== 0) dispatch(setPaginationResults(results?.slice(0, countPerPage * offset)));
    }, [results, offset])

    return (
        <StyledMainPage>
            <NavBar />
            <StyledCardContainer>
                {paginationResults && paginationResults!.map(el => <GameCard key={el.appId} {...el} />)}
            </StyledCardContainer>
            {results && <StyledContainerButton>
                <StyledButton onClick={() =>  dispatch(setOffset(offset + 1)) }>Show more</StyledButton>
            </StyledContainerButton>}
        </StyledMainPage>
    )
}