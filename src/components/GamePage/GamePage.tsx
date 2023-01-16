import styled from 'styled-components'

import { FC, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom'

import { getProd } from '../../redux/thunks'
import { useAppDispatch, useAppSelector } from '../../redux/store'


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledGameContainer = styled.div`
  min-height: 80vh;
  width: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: #17323A;
  margin-top: 30px;
`

const StyledImg = styled.img`
  background-size: contain;
  width: 100%;
  height: 300px;
  border-radius: 10px;
`
const commonStyle = styled.div`
  margin-left: 15px;
  color: white;
  background: #17323A;
  font-size: 16px;
`
const StyledTitle = styled(commonStyle)`
  font-size: 24px;
`
const StyledReleased = styled(commonStyle)`
  margin-top: 10px;
`
const StyledDescription = styled(commonStyle)``

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
  const currentGame = useAppSelector(state => state.stateSlice.currentGame);

  useEffect(() => {
    dispatch(getProd(id!))
  }, [])
  return (
    <StyledWrapper>
      <StyledGameContainer>
        <StyledImg src={currentGame?.imgUrl} alt='image' />
        <StyledTitle>{currentGame?.title}</StyledTitle>
        <StyledDescription>{currentGame?.description}</StyledDescription>
        <StyledReleased>{currentGame?.released}</StyledReleased>
        <Link style={{background: '#17323A' }} to={'/home'}>
          <StyledBackButton >Back</StyledBackButton>
        </Link>
      </StyledGameContainer >
    </StyledWrapper>

  )
}