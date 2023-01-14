import { FC } from 'react'

import SearchBar from './SearchBar'

import styled from 'styled-components'

import logo_steam from '../../icons/logo_steam.svg'
import { useAppDispatch } from '../../redux/store'
import { sortByPrice, sortByPublishedDate } from '../../redux/stateSlice'


const StyledNavBar = styled.div`
    margin: 35px 35px 0px 35px;
    display: flex;
    justify-content: space-between;
    gap: 1%
`

const StyledFilters = styled.select`
    background: #837F7F;
    height: 35px;
    width: 20%;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    border: none;
`

const StyledPublisedFilter = styled(StyledFilters)`
`

const StyledPriceFilter = styled(StyledFilters)`
`

const LikeList = styled.div`
    height: 35px;
    width: 15%;
    background: #837F7F;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10px;
    cursor: pointer;
`

const StyledLogo = styled.img``

const NavBar: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

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
            <LikeList>Like list</LikeList>
        </StyledNavBar>
    )
}

export default NavBar;