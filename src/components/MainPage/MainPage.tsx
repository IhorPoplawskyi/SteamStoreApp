import { FC, useEffect } from 'react'
import styled from 'styled-components';
import { setPage } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import GameCard from './GameCard';
import NavigationBar from './NavBar';

const StyledMainPage = styled.div`
    width: 100%;
`
const StyledCardContainer = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
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

const MainPage: FC = () => {
    const results = useAppSelector(state => state.stateSlice.games);
    const page = useAppSelector(state => state.stateSlice.page);
    const dispatch = useAppDispatch();

    return (
        <>
            <StyledMainPage>
                <NavigationBar />
                <StyledCardContainer>
                    {results && results!.slice(0, page*4)?.map(el => <GameCard {...el}/>)}
                </StyledCardContainer>
                <StyledButton onClick={() => dispatch(setPage(page + 1))}>Show more</StyledButton>
            </StyledMainPage>
        </>
    )
}

export default MainPage;