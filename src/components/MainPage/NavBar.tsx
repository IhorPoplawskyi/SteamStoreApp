import styled from 'styled-components'

import { FC } from 'react'

import { SearchBar } from './SearchBar'

import { LikeList } from '../LikeList/LikeList'

import logo_steam from '../../icons/logo_steam.svg'
import saved from '../../icons/saved.svg'
import { showLikeList } from '../../redux/likeListSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { sortByPrice, sortByPublishedDate } from '../../redux/stateSlice'



const StyledNavBar = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    gap: 0.5%;
    margin-top: 20px;
`

const StyledFilters = styled.select`
    background: #837F7F;
    height: 40px;
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
        width: 10%;
      }
`

const StyledPublisedFilter = styled(StyledFilters)``

const StyledPriceFilter = styled(StyledFilters)``

const LikeListBtn = styled.img`
    width: 5%;
    cursor: pointer;
`

const StyledLogo = styled.img`
    width: 20%;
`

export const NavBar: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const visibleLikeList = useAppSelector(state => state.likeListSlice.showLikeList);

    return (
        <StyledNavBar>
            <StyledLogo src={logo_steam} alt='logo' />
            <SearchBar />
            <StyledPublisedFilter onChange={event => dispatch((sortByPublishedDate(event.target.value)))} defaultValue={'DATE'}>
            <option disabled value='DATE'>DATE</option>
                <option value='newest'>newest</option>
                <option value='latest'>latest</option>
            </StyledPublisedFilter>
            <StyledPriceFilter onChange={event => dispatch(sortByPrice((event.target.value)))}  defaultValue={'PRICE'}>
                <option disabled value='PRICE'>PRICE</option>
                <option value='low high'>low-high</option>
                <option value='high low'>high-low</option>
            </StyledPriceFilter>
            <LikeListBtn title='Like list' src={saved} alt='like list' onClick={() => dispatch(showLikeList(true))} />
            {visibleLikeList && <LikeList />}
        </StyledNavBar>
    )
}