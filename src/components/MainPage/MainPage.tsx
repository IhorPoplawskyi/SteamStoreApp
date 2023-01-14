import { FC } from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../redux/store';
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

const MainPage: FC = () => {
    const results = useAppSelector(state => state.stateSlice.games);

    return (
        <>
            <StyledMainPage>
                <NavigationBar />
                <StyledCardContainer>
                    {results?.map(el => <GameCard {...el}/>)}
                </StyledCardContainer>
            </StyledMainPage>
        </>
    )
}

export default MainPage;