import styled from "styled-components";

import saved from "../icons/saved.svg";
import logo_steam from "../icons/logo_steam.svg";

import { FC, useCallback } from "react";

import { SearchBar } from "./SearchBar";

import { LikeList } from "../components/LikeList/LikeList";

import { showLikeList } from "../redux/likeListSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  setSearchTerm,
  sortByPrice,
  sortByPublishedDate,
} from "../redux/stateSlice";

import { fetchGames } from "../redux/thunks";

const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5%;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    height: 80px;
  }
`;

const StyledFilters = styled.select`
  background: #837f7f;
  height: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  @media only screen and (max-width: 600px) {
    width: 45%;
    height: 30px;
    margin-top: 2px;
  }
  @media only screen and (min-width: 600px) {
    width: 47%;
  }
  @media only screen and (min-width: 768px) {
    width: 47%;
  }
  @media only screen and (min-width: 992px) {
    width: 14%;
  }
  @media only screen and (min-width: 1200px) {
    width: 5%;
  }
`;

const StyledPublisedFilter = styled(StyledFilters)``;

const StyledPriceFilter = styled(StyledFilters)``;

const LikeListBtn = styled.img`
  width: 40px;
  height: 35px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 9%;
    margin-top: 2px;
  }
`;

const StyledLogo = styled.img`
  width: 150px;
  @media only screen and (max-width: 600px) {
    width: 18%;
  }
`;

export const NavBar: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const visibleLikeList = useAppSelector(
    (state) => state.likeListSlice.showLikeList
  );
  const searchTerm = useAppSelector((state) => state.stateSlice.searchTerm);

  const onSearchHandler = useCallback(
    (value: string): void => {
      if (value && value === searchTerm) return;
      dispatch(setSearchTerm(value));
      dispatch(fetchGames());
    },
    [dispatch, searchTerm]
  );

  return (
    <StyledNavBar>
      <StyledLogo src={logo_steam} alt="logo" />
      <SearchBar value={searchTerm} onSearch={onSearchHandler} />
      <StyledPublisedFilter
        onChange={(event) => dispatch(sortByPublishedDate(event.target.value))}
        defaultValue={"DATE"}
      >
        <option disabled value="DATE">
          DATE
        </option>
        <option value="newest">newest</option>
        <option value="latest">latest</option>
      </StyledPublisedFilter>
      <StyledPriceFilter
        onChange={(event) => dispatch(sortByPrice(event.target.value))}
        defaultValue={"PRICE"}
      >
        <option disabled value="PRICE">
          PRICE
        </option>
        <option value="low high">low-high</option>
        <option value="high low">high-low</option>
      </StyledPriceFilter>
      <LikeListBtn
        title="Like list"
        src={saved}
        alt="like list"
        onClick={() => dispatch(showLikeList(true))}
      />
      {visibleLikeList && <LikeList />}
    </StyledNavBar>
  );
};
