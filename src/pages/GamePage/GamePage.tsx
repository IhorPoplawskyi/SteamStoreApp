import styled from "styled-components";

import { FC, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { fetchDetailedGame } from "../../redux/thunks";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledGameContainer = styled.div`
  min-height: 100vh;
  width: 45%;
  display: flex;
  flex-direction: column;
  background: #1b2838;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    width: 45%;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 250px;
  background: #1b2838;
`;

const StyledHeaderImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #1b2838;
`;

const StyledBackButton = styled.button`
  background: #1f2126;
  border: 1px solid #00bfff;
  color: #00bfff;
  width: 70px;
  height: 25px;
  border-radius: 10px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #64a1c4;
  }
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 24px;
  background: #1b2838;
  padding: 10px 0px 0px 10px;
  @media only screen and (max-width: 330px) {
    font-size: 16px;
  }
`;

const StyledDescription = styled.div`
  color: white;
  font-size: 17px;
  background: #1b2838;
  padding: 5px 0px 0px 10px;
`;

const StyledShortInfo = styled.span`
  color: #556772;
  font-size: 13px;
  background: #1b2838;
  padding: 7px 0px 0px 10px;
`;

const StyledReviews = styled(StyledShortInfo)`
  margin-top: 15px;
`;
const StyledReleased = styled(StyledShortInfo)``;
const StyledPrice = styled(StyledShortInfo)``;
const StyledPublisher = styled(StyledShortInfo)`
  display: block;
  padding: 7px 0px 0px 10px;
`;
const StyledDeveloper = styled(StyledShortInfo)`
  display: block;
  padding: 0px 0px 0px 10px;
`;
const StyledBlueText = styled(StyledShortInfo)`
  color: #00bfff;
`;
const StyledLink = styled.a`
  font-size: 13px;
  background: #1b2838;
  padding: 0px 0px 0px 10px;
  color: #00bfff;
  &:hover {
    color: white;
  }
`;

const StyledTagsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1b2838;
  margin-bottom: 10px;
`;

const StyledTagItem = styled(StyledLink)``;

const StyledDLCTitle = styled.span`
  background: #1b2838;
  margin-top: 20px;
  padding-left: 10px;
  color: #556772;
`;

const StyledDLCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1b2838;
`;

const StyledDLCBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 2px;
  padding: 2px;
  background: #1b2838;
  &::-webkit-scrollbar {
    background: #1f2126;
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000f18;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #64a1c4;
  }
  &::-webkit-scrollbar-button:horizontal:start {
    background: url("/left.png") no-repeat;
    background-color: #011b2b;
    background-position: center;
    border-radius: 5px;
    width: 40px;
  }
  &::-webkit-scrollbar-button:horizontal:start:increment {
    display: none;
  }
  &::-webkit-scrollbar-button:horizontal:end {
    background: url("/right.png") no-repeat;
    background-color: #011b2b;
    background-position: center;
    border-radius: 5px;
    width: 40px;
  }
  &::-webkit-scrollbar-button:horizontal:end:decrement {
    display: none;
  }
`;

const StyledDLCItem = styled.a`
  width: calc(25% - 1px);
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  margin-left: 1px;
  background: #1f2126;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid #00bfff;
  }
  @media only screen and (max-width: 330px) {
    font-size: 7px;
  }
`;

const StyledDLCItemImg = styled.img`
  background: #1b2838;
`;

export const GamePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentGame = useAppSelector((state) => state.stateSlice.currentGame);

  useEffect(() => {
    if (id) dispatch(fetchDetailedGame(id));
  }, [id]);
  return (
    <StyledWrapper>
      <StyledGameContainer>
        <StyledHeader>
          <StyledHeaderImage src={currentGame?.imgUrl} alt="image" />
        </StyledHeader>
        <StyledBackButton onClick={() => navigate("/home")}>
          Back
        </StyledBackButton>
        <StyledMain>
          <StyledTitle>{currentGame?.title}</StyledTitle>
          <StyledDescription>{currentGame?.description}</StyledDescription>
          <StyledReviews>
            REVIEWS:
            <StyledBlueText>{currentGame?.allReviews.summary}</StyledBlueText>
          </StyledReviews>
          <StyledReleased>
            RELEASED:<StyledBlueText>{currentGame?.released}</StyledBlueText>
          </StyledReleased>
          <StyledPrice>
            PRICE:<StyledBlueText>{currentGame?.price}</StyledBlueText>{" "}
          </StyledPrice>
          <StyledPublisher>
            PUBLISHER:
            <StyledLink href={currentGame?.publisher.link} target="_blank">
              {currentGame?.publisher.name}
            </StyledLink>
          </StyledPublisher>
          <StyledDeveloper>
            DEVELOPER:
            <StyledLink href={currentGame?.developer.link} target="_blank">
              {currentGame?.developer.name}
            </StyledLink>
          </StyledDeveloper>
          {currentGame?.DLCs.length !== 0 && (
            <StyledDLCWrapper>
              <StyledDLCTitle>Additional content</StyledDLCTitle>
              <StyledDLCBlock>
                {currentGame?.DLCs.map((el) => (
                  <StyledDLCItem key={el.appId} href={el.url} target="_blank">
                    <StyledDLCItemImg
                      title={el.name}
                      src={currentGame.imgUrl}
                      alt="img"
                    />
                    {el.name}
                  </StyledDLCItem>
                ))}
              </StyledDLCBlock>
            </StyledDLCWrapper>
          )}
        </StyledMain>
        <StyledTagsBlock>
          {currentGame?.tags.map((tag) => (
            <StyledTagItem href={tag.url}>{`#${tag.name}`}</StyledTagItem>
          ))}
        </StyledTagsBlock>
      </StyledGameContainer>
    </StyledWrapper>
  );
};
