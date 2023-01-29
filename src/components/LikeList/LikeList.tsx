import styled from "styled-components";

import sad from "./sad.png";

import React from "react";

import { LikeListItem } from "../LikeListItem";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import { deleteAllFromLikeList, showLikeList } from "../../redux/likeListSlice";

const StyledLikeListWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const StyledLikeListContainer = styled.div`
  height: 95%;
  border: 1px solid white;
  background: white;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
  @media only screen and (min-width: 1200px) {
    width: 55%;
  }
`;
const StyledLikeListHeader = styled.header`
  height: 7%;
  background: white;
  border-radius: 10px 10px 0px 0px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px 0px 24px;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
`;

const StyledCloseLikeListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &::before {
    content: "X";
    color: grey;
    background: white;
  }
  &:hover::before {
    color: red;
  }
`;

const StyledLikeListContent = styled.article`
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  overflow-y: scroll;
`;

const StyledDeleteAllItems = styled.div`
  margin: 25px 0px 15px 0px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledDeleteAllItemsBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  color: #3e77aa;
  cursor: pointer;
  margin-right: 20px;
  justify-content: end;
  &:hover {
    color: red;
  }
`;

const StyledLikeListZeroItems = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const StyledLikeListZeroItemsImg = styled.img`
  margin-top: 100px;
  max-width: 100%;
  background: white;
`;

const StyledLikeListZeroItemsText = styled.div`
  font-size: 24px;
  text-align: center;
  background: white;
  margin-top: 30px;
`;

export const LikeList: React.FC = (): JSX.Element => {
  const likeList = useAppSelector((state) => state.likeListSlice.likeList);
  const dispatch = useAppDispatch();

  return (
    <StyledLikeListWrapper onClick={() => dispatch(showLikeList(false))}>
      <StyledLikeListContainer onClick={(e) => e.stopPropagation()}>
        <StyledLikeListHeader>
          Like list
          <StyledCloseLikeListButton
            onClick={() => dispatch(showLikeList(false))}
          />
        </StyledLikeListHeader>
        {likeList.length !== 0 ? (
          <StyledLikeListContent>
            <StyledDeleteAllItems>
              <StyledDeleteAllItemsBtn
                onClick={() => dispatch(deleteAllFromLikeList())}
              >
                Delete all
              </StyledDeleteAllItemsBtn>
            </StyledDeleteAllItems>
            {likeList.map((el) => (
              <LikeListItem key={el.appId} {...el} />
            ))}
          </StyledLikeListContent>
        ) : (
          <StyledLikeListZeroItems>
            <StyledLikeListZeroItemsImg alt="basket" src={sad} />
            <StyledLikeListZeroItemsText>
              Like list is empty
            </StyledLikeListZeroItemsText>
          </StyledLikeListZeroItems>
        )}
      </StyledLikeListContainer>
    </StyledLikeListWrapper>
  );
};
