import styled from 'styled-components'

import { FC } from 'react'

import { SearchBar } from './SearchBar'

import { LikeList } from '../LikeList/LikeList'

import logo_steam from '../../icons/logo_steam.svg'
import { showLikeList } from '../../redux/likeListSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { sortByPrice, sortByPublishedDate } from '../../redux/stateSlice'



const StyledNavBar = styled.div`
    position: relative;
    margin: 35px 35px 0px 35px;
    display: flex;
    gap: 1%;
    flex-wrap: wrap;
`

const StyledFilters = styled.select`
    background: #837F7F;
    margin-top: 5px;
    height: 35px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    @media only screen and (max-width: 600px) {
        width: 47%;
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
        width: 15%;
      }
`

const StyledPublisedFilter = styled(StyledFilters)``

const StyledPriceFilter = styled(StyledFilters)``

const LikeListBtn = styled.div`
    height: 35px;
    width: 9%;
    margin-top: 5px;
    background: #837F7F;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        width: 30%;
        position: absolute;
        top: -5px;
        left: 65%;
    }
    @media only screen and (min-width: 600px) {
        width: 30%;
        position: absolute;
        top: -5px;
        left: 65%;
    }
    @media only screen and (min-width: 768px) {
        width: 30%;
        position: absolute;
        top: -5px;
        left: 65%;
    }
    @media only screen and (min-width: 992px) {
        width: 12%;
        position: absolute;
        top: 0;
        left: 87%;
    }
    @media only screen and (min-width: 1200px) {
        width: 14%;
        position: absolute;
        top: 0;
        left: 87%;
    }
`

const StyledLogo = styled.img``

export const NavBar: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const visibleLikeList = useAppSelector(state => state.likeListSlice.showLikeList);

    return (
        <StyledNavBar>
            <StyledLogo src={logo_steam} alt='logo' />
            <SearchBar />
            <StyledPublisedFilter onChange={event => dispatch((sortByPublishedDate(event.target.value)))} defaultValue={'Sort by published date'}>
            <option disabled value='Sort by published date'>Sort by published date</option>
                <option value='Newest'>Newest</option>
                <option value='Latest'>Latest</option>
            </StyledPublisedFilter>
            <StyledPriceFilter onChange={event => dispatch(sortByPrice((event.target.value)))}  defaultValue={'Sort by price'}>
                <option disabled value='Sort by price'>Sort by price</option>
                <option value='from lower to bigger'>from lower to bigger</option>
                <option value='from bigger to lower'>from bigger to lower</option>
            </StyledPriceFilter>
            <LikeListBtn onClick={() => dispatch(showLikeList(true))}>Like list</LikeListBtn>
            {visibleLikeList && <LikeList />}
        </StyledNavBar>
    )
}