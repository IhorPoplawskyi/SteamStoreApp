import { FC } from 'react';
import styled from 'styled-components';
import { response } from '../../redux/stateSlice';
import heart from '../../icons/heart.png'

const GameCard: FC<response> = ({ imgUrl, title, price, released }) => {
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

  return (
    <>
      <StyledGameCard>
        <StyledImgContainer>
          <StyledImg src={imgUrl} alt='image' />
        </StyledImgContainer>
        <StyledTitle>{title.length > 80 ? title.slice(0, 79) + '...' : title}</StyledTitle>
        <StyledReleased>{released}</StyledReleased>
        <StyledPriceAndLike>
          <StyledPrice>{price}</StyledPrice>
          <StyledHeart src={heart} onClick={() => {}}/>
        </StyledPriceAndLike>
      </StyledGameCard>
    </>
  )
}

export default GameCard;