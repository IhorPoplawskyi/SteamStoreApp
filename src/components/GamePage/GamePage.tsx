import styled from 'styled-components'

import { FC, useEffect } from 'react'

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

const StyledHeaderBlock = styled.header`
  display: flex;
  width: 100%;
  height: 25%;
  background: #1B2838;
`

const StyledHeaderImageBlock = styled.div`
  width: 50%;
  background: #1B2838;
`

const StyledHeaderInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: #1B2838;
`

const StyleddHeaderImageBlockImg = styled.img`
  width: 100%;
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

export const GamePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentGame = useAppSelector(state => state.stateSlice.currentGame);
  console.log(currentGame)

  // useEffect(() => {
  //   dispatch(getProd(id!))
  // }, [])
  return (
    <StyledWrapper>
      <StyledGameContainer>
        <StyledHeaderBlock>
          <StyledHeaderImageBlock>
            <StyleddHeaderImageBlockImg src={currentGame?.imgUrl} alt='image' />
          </StyledHeaderImageBlock>
          <StyledHeaderInfoBlock>
            <div>{currentGame?.title}</div>
          </StyledHeaderInfoBlock>
        </StyledHeaderBlock>
        <StyledBackButton onClick={() => navigate('/home')}>Back</StyledBackButton>
      </StyledGameContainer >
    </StyledWrapper>

  )
}