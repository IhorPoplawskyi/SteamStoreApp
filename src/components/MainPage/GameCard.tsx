import { FC } from 'react';
import styled from 'styled-components';
import { addToLikeList, response } from '../../redux/stateSlice';
import heart from '../../icons/heart.png'
import redHeart from '../../icons/redHeart.png'
import { useAppDispatch, useAppSelector } from '../../redux/store';

const GameCard: FC<response> = (response) => {
  const gamesResponse = useAppSelector(state => state.stateSlice.games)?.map(el => el.appId);
  const likeList = useAppSelector(state => state.stateSlice.likeList).map(el => el.appId);

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


  const dispatch = useAppDispatch();

  return (
    <>
      <StyledGameCard>
        <StyledImgContainer>
          <StyledImg src={response.imgUrl} alt='image' />
        </StyledImgContainer>
        <StyledTitle>{response.title.length > 80 ? response.title.slice(0, 79) + '...' : response.title}</StyledTitle>
        <StyledReleased>{response.released}</StyledReleased>
        <StyledPriceAndLike>
          <StyledPrice>{response.price}</StyledPrice>
          {likeList?.includes(response.appId) ?
            <StyledRedHeart src={redHeart} alt='img' /> :
            <StyledHeart src={heart} alt='img' onClick={() => { dispatch(addToLikeList(response)) }} />}
        </StyledPriceAndLike>
      </StyledGameCard>
    </>
  )
}

export default GameCard;