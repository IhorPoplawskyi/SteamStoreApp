import { FC } from 'react'
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

const MainPage: FC = () => {
    const results = useAppSelector(state => state.stateSlice.games);
    const page = useAppSelector(state => state.stateSlice.page);
    const countPerPage = 4;
    const dispatch = useAppDispatch();

    return (
        <>
            <StyledMainPage>
                <NavigationBar />
                <StyledCardContainer>
                    {results && results!.slice(0, page * countPerPage)?.map(el => <GameCard {...el} />)}
                </StyledCardContainer>
                {results && <StyledContainerButton>
                    <StyledButton onClick={() => dispatch(setPage(page + 1))}>Show more</StyledButton>
                </StyledContainerButton>}
            </StyledMainPage>
        </>
    )
}

export default MainPage;