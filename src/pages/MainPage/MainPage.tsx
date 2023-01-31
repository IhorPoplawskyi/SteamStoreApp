import styled from "styled-components";

import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { GameCard } from "../../components/GameCard";
import { Preloader } from "../../components/Preloader";

import { FC } from "react";

import { useAppSelector } from "../../redux/store";

import controller from '../../icons/controller.png'
import brokenController from '../../icons/brokenController.png'

const StyledMainPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(4, 79, 110);
  background: linear-gradient(
    180deg,
    rgba(4, 79, 110, 1) 32%,
    rgba(1, 91, 120, 1) 60%,
    rgba(33, 115, 126, 1) 87%
  );
`;
const StyledCardContainer = styled.div`
  margin-top: 90px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-bottom: 20px;
  background: transparent;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    width: 60%;
  }
`;

const StyledResultsInfo = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
  width: 70%;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    width: 90%;
    & img {
      width: 70%;
    }
  }
`;

const StyledResultsInfoImg = styled.img`
    background: transparent;
    max-width: 256px;
`

export const MainPage: FC = (): JSX.Element => {
  const results = useAppSelector((state) => state.stateSlice.games);
  const status = useAppSelector((state) => state.stateSlice.status);

  return (
    <StyledMainPage>
      <NavBar />
      {status === "init" && (
        <StyledResultsInfo>
          This is a service where you can find games and information about these games on Steam store. To start,
          please enter an game name in search.
          <StyledResultsInfoImg src={controller} alt='controller'/>
        </StyledResultsInfo>
      )}
      {status === "loading" && <Preloader />}
      {status === "success" && results?.length && results?.length === 0 && (
        <StyledResultsInfo>Nothing found, check that the game name is correct and try again!
            <StyledResultsInfoImg src={brokenController} alt="broken controller"/>
        </StyledResultsInfo>
      )}
      <StyledCardContainer>
        {results?.length && results!.map((el) => <GameCard key={el.appId} {...el} />)}
      </StyledCardContainer>
      <Footer />
    </StyledMainPage>
  );
};
