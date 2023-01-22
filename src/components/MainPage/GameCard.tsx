import styled from 'styled-components';

import { FC } from 'react';

import { Link } from 'react-router-dom';

import { gameInfo } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addToLikeList, deleteFromLikeList } from '../../redux/likeListSlice';

import heart from '../../icons/heart.png'
import redHeart from '../../icons/redHeart.png'


export const StyledGameCard = styled.div`
    min-height: 280px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #1B2838;
    margin-bottom: 8px;
    margin-top: 8px;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    @media only screen and (min-width: 600px) {
      width: 60%;
    }
    @media only screen and (min-width: 768px) {
      width: 45%;
    }
    @media only screen and (min-width: 992px) {
      width: 30%;
    }
    @media only screen and (min-width: 1200px) {
      width: 21%;
    }
  `
export const StyledImgContainer = styled.div`
    height: 140px;
    border-radius: 10px;
    background: #1B2838;
  `
export const StyledImg = styled.img`
    background-size: contain;
    width: 100%;
    border-radius: 10px;
  `
export const StyledInfo = styled.div`
    background: #1B2838;
    color: white;
    font-size: 22px;
    padding-left: 10px;
  `
export const StyledTitle = styled(StyledInfo)``
export const StyledReleased = styled(StyledInfo)`
    font-size: 16px;
    margin-top: 10px;
    display: flex;
  `
export const StyledPriceAndLike = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-radius: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    background: #1B2838;
    flex-grow: 1;
  `
export const StyledPrice = styled(StyledInfo)`
    font-size: 16px;
    margin-top: 10px;
  `
export const StyledHeart = styled.img`
    background: #1B2838;
    cursor: pointer;
  `
export const StyledRedHeart = styled.img`
    background: #1B2838;
    cursor: pointer;
  `

export const GameCard: FC<gameInfo> = (game): JSX.Element => {
  const likeList = useAppSelector(state => state.likeListSlice.likeList).map(el => el.appId);
  const dispatch = useAppDispatch();

  return (
    <StyledGameCard>
      <Link style={{ borderRadius: '10px' }} to={`/game/${game.appId}`}>
        <StyledImgContainer>
          <StyledImg src={game.imgUrl} alt='image' />
        </StyledImgContainer>
      </Link>
      <StyledTitle>{game.title.length > 80 ? game.title.slice(0, 79) + '...' : game.title}</StyledTitle>
      <StyledReleased>{game.released}</StyledReleased>
      <StyledPriceAndLike>
        <StyledPrice>{game.price}</StyledPrice>
        {likeList?.includes(game.appId) ?
          <StyledRedHeart src={redHeart} alt='img' onClick={() => dispatch(deleteFromLikeList(game.appId))} /> :
          <StyledHeart src={heart} alt='img' onClick={() => { dispatch(addToLikeList(game)) }} />}
      </StyledPriceAndLike>
    </StyledGameCard >
  )
}