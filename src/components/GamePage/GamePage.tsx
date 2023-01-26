import styled from 'styled-components'

import { FC, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { getProd } from '../../redux/thunks'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import svg from '../../../public/playRight.svg'

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
  margin-top: 10px;
  box-sizing: border-box;
`

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 220px;
  background: #1B2838;
`

const StyledHeaderImage = styled.img`
  width: 100%;
  height: 100%;
`

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
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

const StyledShortInfo = styled.span`
  color: #556772;
  font-size: 13px;
  background: #1B2838;
  padding: 7px 0px 0px 10px;
`

const StyledReviews = styled(StyledShortInfo)``
const StyledReleased = styled(StyledShortInfo)``
const StyledPrice = styled(StyledShortInfo)``
const StyledPublisher = styled(StyledShortInfo)`
  display: block;
  padding: 7px 0px 0px 10px;
`
const StyledDeveloper = styled(StyledShortInfo)`
  display: block;
  padding: 0px 0px 0px 10px;
`
const StyledBlueText = styled(StyledShortInfo)`
  color: #00BFFF;
`
const StyledLink = styled.a`
  font-size: 13px;
  background: #1B2838;
  padding: 0px 0px 0px 10px;
  color: #00BFFF;
  &:hover {
    color: white;
  }
`

const StyledTagsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1B2838;
  margin-top: 20px;
`

const StyledTagItem = styled(StyledLink)``

const StyledShowDLCButton = styled.button`
  background: #1B2838;
  margin-top: 10px;
  width: 16px;
  height: 16px;
  padding-left: 10px;
  border: none;
  outline: none;
  color: #556772;
  display: flex;
`

const StyledDLCBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 10px;
  padding: 2px;
  background: #1B2838;
  &::-webkit-scrollbar {
    background: #1f2126;
    height: 20px;
  };
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    width: 5px;
  };
  &::-webkit-scrollbar-thumb:hover {
    background: #64a1c4;
  };
  &::-webkit-scrollbar-button:horizontal:start {
    background: url('/playRight.svg') no-repeat;
    width: 30px;
  };
  &::-webkit-scrollbar-button:horizontal:start:increment {
    display: none;
  };
  &::-webkit-scrollbar-button:horizontal:end {
    background: url('/playRight.svg') no-repeat;   
  };
  &::-webkit-scrollbar-button:horizontal:end:decrement {
    display: none;
  };
`

const StyledDLCItem = styled.div`
  width: calc(25% - 1px);
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  margin-left: 1px;
  background: #1f2126;
  padding: 5px;
  &:hover {
    border: 0.5px solid #00BFFF;
  }
`

const StyledDLCItemImg = styled.img`
  background: #1B2838;
`


export const GamePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentGame = useAppSelector(state => state.stateSlice.currentGame);

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
          <StyledReviews>REVIEWS:<StyledBlueText>{currentGame?.allReviews.summary}</StyledBlueText></StyledReviews>
          <StyledReleased>RELEASED:<StyledBlueText>{currentGame?.released}</StyledBlueText></StyledReleased>
          <StyledPrice>PRICE:<StyledBlueText>{currentGame?.price}</StyledBlueText> </StyledPrice>
          <StyledPublisher>
            PUBLISHER:
            <StyledLink href={currentGame?.publisher.link} target='_blank'>{currentGame?.publisher.name}</StyledLink>
          </StyledPublisher>
          <StyledDeveloper>
            DEVELOPER:
            <StyledLink href={currentGame?.developer.link} target='_blank'>{currentGame?.developer.name}</StyledLink>
          </StyledDeveloper>
          <StyledShowDLCButton>DLC</StyledShowDLCButton>
          <StyledDLCBlock>
            {currentGame?.DLCs.map(el => <StyledDLCItem><img title={el.name} src={currentGame.imgUrl} alt='img' />{el.name}</StyledDLCItem>)}
          </StyledDLCBlock>
          <StyledTagsBlock>
            {currentGame?.tags.map(tag => <StyledTagItem href={tag.url}>{`#${tag.name}`}</StyledTagItem>)}
          </StyledTagsBlock>
        </StyledMain>
        {/* <StyledBackButton onClick={() => navigate('/home')}>Back</StyledBackButton> */}
      </StyledGameContainer >
    </StyledWrapper>

  )
}