import { FC } from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../redux/store'
import { GameCard } from '../MainPage/GameCard';

export const LikeList: FC = (): JSX.Element => {
    const likeList = useAppSelector(state => state.stateSlice.likeList);

    const StyledLikeList = styled.div`
        position: absolute;
        top: 40px;
        left: 30%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        border-radius: 10px;
        background: floralwhite;
        border: 1px solid white;
        @media only screen and (max-width: 600px) {
            width: 100%;
            left: 0;
        }
        @media only screen and (min-width: 600px) {
            width: 100%;
            left: 0;
        }
        @media only screen and (min-width: 768px) {
            width: 100%;
            left: 0;
        }
        @media only screen and (min-width: 992px) {
            width: 70%;
            left: 30%;
            top: 50px;
        }
        @media only screen and (min-width: 1200px) {
            width: 70%;
            left: 30%;
            top: 50px;
        }
    `
    return (
        <StyledLikeList>
           {likeList.map(el => <GameCard {...el}/>)}
        </StyledLikeList>
    )
}