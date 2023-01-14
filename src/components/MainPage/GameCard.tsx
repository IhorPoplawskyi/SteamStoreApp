import { FC } from 'react';
import styled from 'styled-components';
import { response } from '../../redux/stateSlice';

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
  `
  const StyledPrice = styled(StyledInfo)`
    font-size: 16px;
    margin-top: 10px;
  `

  return (
    <>
      <StyledGameCard>
        <StyledImgContainer>
          <StyledImg src={imgUrl} alt='image' />
          <StyledTitle>{title.length > 80 ? title.slice(0, 79) + '...' : title}</StyledTitle>
          <StyledReleased>{released}</StyledReleased>
          <StyledPrice>{price}</StyledPrice>
        </StyledImgContainer>
      </StyledGameCard>
    </>
  )
}

export default GameCard;