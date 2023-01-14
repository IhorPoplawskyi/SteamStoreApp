import { FC } from 'react'

import SearchBar from './SearchBar'

import styled from 'styled-components'

import filter from '../../icons/filter.png'
import logo_steam from '../../icons/logo_steam.svg'
import { useAppSelector } from '../../redux/store'


const StyledNavBar = styled.div`
    margin: 35px 35px 0px 35px;
    display: flex;
    justify-content: space-between;
    gap: 1%
`

const StyledFilter = styled.div`
    background: #837F7F;
    height: 35px;
    width: 35px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        background: #837F7F;
    }
`

const StyledPriceFilter = styled.select`
    height: 35px;
    width: 20%;
    background: #837F7F;
    border-radius: 10px;
    color: white;
    outline: none;
    &::after {
        border-radius: 10px;
    }
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

const StyledLogo = styled.div``

const NavBar: FC = (): JSX.Element => {
    const ls = useAppSelector(state => state.stateSlice.likeList)

    return (
        <StyledNavBar>
            <StyledLogo>
                <img src={logo_steam} alt='logo' />
            </StyledLogo>
            <SearchBar />
            <StyledFilter onClick={() => console.log(ls)}>
                <img src={filter} alt='filter' />
            </StyledFilter>
            <StyledPriceFilter defaultValue={'Price'}>
                <option value='Price'>Price</option>
                <option value='PublishDate'>PublishDate</option>
            </StyledPriceFilter>
            <LikeList>Like list</LikeList>
        </StyledNavBar>
    )
}

export default NavBar;