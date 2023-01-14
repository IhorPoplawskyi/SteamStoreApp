import { FC } from 'react';

import styled from 'styled-components';

import { addToLikeList, game } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import heart from '../../icons/heart.png'
import redHeart from '../../icons/redHeart.png'
import { Link } from 'react-router-dom';


const StyledGameCard = styled.div`
    min-height: 280px;
    width: 21%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #17323A;
    margin-bottom: 15px;
  `
const StyledImgContainer = styled.div`
    height: 140px;
    border-radius: 10px;
    background: #17323A;
  `
const StyledImg = styled.img`
    background-size: contain;
    width: 100%;
    border-radius: 10px;
  `
const StyledInfo = styled.div`
    background: #17323A;
    color: white;
    font-size: 22px;
    padding-left: 10px;
  `
const StyledTitle = styled(StyledInfo)``
const StyledReleased = styled(StyledInfo)`
    font-size: 16px;
    margin-top: 10px;
    display: flex;
  `
const StyledPriceAndLike = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-radius: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    background: #17323A;
    flex-grow: 1;
  `
const StyledPrice = styled(StyledInfo)`
    font-size: 16px;
    margin-top: 10px;
  `
const StyledHeart = styled.img`
    background: #17323A;
    cursor: pointer;
  `
const StyledRedHeart = styled.img`
    background: #17323A;
    cursor: pointer;
  `

const GameCard: FC<game> = (game): JSX.Element => {
  const likeList = useAppSelector(state => state.stateSlice.likeList).map(el => el.appId);
  const dispatch = useAppDispatch();

  return (
    <StyledGameCard>
      <Link style={{borderRadius: '10px'}} to={`/game/${game.appId}`}>
        <StyledImgContainer>
          <StyledImg src={game.imgUrl} alt='image' />
        </StyledImgContainer>
      </Link>
      <StyledTitle>{game.title.length > 80 ? game.title.slice(0, 79) + '...' : game.title}</StyledTitle>
      <StyledReleased>{game.released}</StyledReleased>
      <StyledPriceAndLike>
        <StyledPrice>{game.price}</StyledPrice>
        {likeList?.includes(game.appId) ?
          <StyledRedHeart src={redHeart} alt='img' /> :
          <StyledHeart src={heart} alt='img' onClick={() => { dispatch(addToLikeList(game)) }} />}
      </StyledPriceAndLike>
    </StyledGameCard >
  )
}

export default GameCard;