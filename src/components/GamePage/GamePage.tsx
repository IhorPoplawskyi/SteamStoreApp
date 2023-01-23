import styled from 'styled-components'

import { FC, useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { getProd } from '../../redux/thunks'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledGameContainer = styled.div`
  min-height: 95vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  background: #1B2838;
  margin-top: 30px;
`

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 220px;
  background: #1B2838;
  border: 1px solid red;
`

const StyledHeaderImage = styled.img`
  width: 100%;
  height: 100%;
`

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  flex-grow: 1;
  background: #1B2838;
`

const StyledBackButton = styled.button`
  background: white;
  outline: none;
  border: none;
  width: 50px;
  height: 25px;
  border-radius: 10px;
  margin-left: 15px;
  margin-top: 25px;
`

const StyledTitle = styled.div`
  color: white;
  font-size: 24px;
  background: #1B2838;
  padding: 10px 0px 0px 10px;
`

const StyledDescription = styled.div`
  color: white;
  font-size: 17px;
  background: #1B2838;
  padding: 5px 0px 0px 10px;
`

const StyledBlueTextBlock = styled.div`
  color: #00BFFF;
  font-size: 13px;
  background: #1B2838;
  padding: 7px 0px 0px 10px;
`

const StyledReviews = styled(StyledBlueTextBlock)``
const StyledReleased = styled(StyledBlueTextBlock)``
const StyledPrice = styled(StyledBlueTextBlock)``

const StyledDLCBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`

const StyledDLCItem = styled.div`
  width: calc(20% - 5px);
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 10px;
`

export const GamePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showDlc, setShowDlc] = useState(false);
  const currentGame = useAppSelector(state => state.stateSlice.currentGame);
  console.log(currentGame)

  // useEffect(() => {
  //   dispatch(getProd(id!))
  // }, [])
  return (
    <StyledWrapper>
      <StyledGameContainer>
        <StyledHeader>
          <StyledHeaderImage src={currentGame?.imgUrl} alt='image' />
        </StyledHeader>
        <StyledMain>
          <StyledTitle>{currentGame?.title}</StyledTitle>
          <StyledDescription>{currentGame?.description}</StyledDescription>
          <StyledReviews>REVIEWS: {currentGame?.allReviews.summary}</StyledReviews>
          <StyledReleased>RELEASED: {currentGame?.released}</StyledReleased>
          <StyledPrice>PRICE: {currentGame?.price}</StyledPrice>
          <button onClick={() => setShowDlc(showDlc => !showDlc)}>DLCs</button>
          {showDlc && <StyledDLCBlock>
            {currentGame?.DLCs.map(el => <StyledDLCItem><img title={el.name} src={currentGame.imgUrl} />{el.name}</StyledDLCItem>)}
          </StyledDLCBlock>}
        </StyledMain>
        <StyledBackButton onClick={() => navigate('/home')}>Back</StyledBackButton>
      </StyledGameContainer >
    </StyledWrapper>

  )
}