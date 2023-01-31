import styled from "styled-components";

import { FC } from "react";

import { Link } from "react-router-dom";

import { gameInfo } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addToLikeList, deleteFromLikeList } from "../redux/likeListSlice";

import heart from "../../icons/heart.png";
import redHeart from "../../icons/redHeart.png";

export const StyledGameCard = styled.div`
  display: flex;
  flex-direction: column;
  background: url("/background_spotlight.jpg") no-repeat;
  background-size: cover;
  box-shadow: 1px 1px 0.5px black;
  max-height: 380px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: calc(50% - 7px);
  }
  @media only screen and (min-width: 768px) {
    width: calc(50% - 7px);
  }
  @media only screen and (min-width: 992px) {
    width: calc(33.3333% - 7px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(33.3333% - 7px);
  }
`;
export const StyledImgContainer = styled.div`
  height: 160px;
`;
export const StyledImg = styled.img`
  background-size: contain;
  width: 100%;
  height: 100%;
`;
export const StyledInfo = styled.div`
  color: white;
  font-size: 22px;
  padding-left: 10px;
  background: transparent;
`;
export const StyledTitle = styled(StyledInfo)`
  flex-grow: 1;
`;
export const StyledReleased = styled(StyledInfo)`
  font-size: 16px;
  margin-top: 10px;
  color: #acdbf5;
  display: flex;
  background: transparent;
`;
export const StyledPriceAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-radius: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  background: transparent;
`;
export const StyledPrice = styled(StyledInfo)`
  font-size: 16px;
  margin-top: 10px;
  background: transparent;
  color: #acdbf5;
`;
export const StyledHeart = styled.img`
  background: #1b2838;
  cursor: pointer;
  background: transparent;
`;
export const StyledRedHeart = styled.img`
  background: #1b2838;
  cursor: pointer;
  background: transparent;
`;

export const GameCard: FC<gameInfo> = (game): JSX.Element => {
  const likeList = useAppSelector((state) => state.likeListSlice.likeList).map(
    (el) => el.appId
  );
  const dispatch = useAppDispatch();

  return (
    <StyledGameCard>
      <Link style={{ borderRadius: "10px" }} to={`/game/${game.appId}`}>
        <StyledImgContainer>
          <StyledImg src={game.imgUrl} alt="image" />
        </StyledImgContainer>
      </Link>
      <StyledTitle>
        {game.title.length > 80 ? game.title.slice(0, 79) + "..." : game.title}
      </StyledTitle>
      <StyledReleased>{game.released}</StyledReleased>
      <StyledPriceAndLike>
        <StyledPrice>{game.price}</StyledPrice>
        {likeList?.includes(game.appId) ? (
          <StyledRedHeart
            src={redHeart}
            alt="img"
            onClick={() => dispatch(deleteFromLikeList(game.appId))}
          />
        ) : (
          <StyledHeart
            src={heart}
            alt="img"
            title="add to like list"
            onClick={() => {
              dispatch(addToLikeList(game));
            }}
          />
        )}
      </StyledPriceAndLike>
    </StyledGameCard>
  );
};
