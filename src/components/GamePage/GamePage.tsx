import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getProd } from '../../redux/thunks'

const StyledGamePage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledContainer = styled.div`
  width: 70%;
  border: 1px solid red;
  display: flex;
`

const StyledImageContainer = styled.div`
  height: 260px;
`

const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  background-size: contain;
`

export const GamePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentGame = useAppSelector(state => state.stateSlice.currentGame);
  useEffect(() => {
    dispatch(getProd(id!))
  }, [])
  return (
    <StyledGamePage>
      <StyledContainer>
        <StyledImageContainer>
          <StyledImage alt='image' src={currentGame?.imgUrl} />
        </StyledImageContainer>
      </StyledContainer>
    </StyledGamePage>
  )
}