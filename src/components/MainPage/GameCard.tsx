import { FC } from 'react';
import styled from 'styled-components';
import { response } from '../../redux/stateSlice';

const GameCard: FC<response> = ({ imgUrl, title, price, released }) => {
  const StyledGameCard = styled.div`
    height: 310px;
    width: 23%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #17323A;
    margin-bottom: 15px;
  `
  const StyledImgContainer = styled.div`
    height: 140px;
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
    margin-top: 10px;
    font-size: 16px;
  `

  return (
    <>
      <StyledGameCard>
        <StyledImgContainer>
          <StyledImg src={imgUrl} alt='image' />
          <StyledTitle>{title}</StyledTitle>
          <StyledReleased>{released}</StyledReleased>
        </StyledImgContainer>
      </StyledGameCard>
    </>
  )
}

export default GameCard;