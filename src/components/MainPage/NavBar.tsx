import { FC } from 'react'
import styled from 'styled-components'
import logo_steam from '../../icons/logo_steam.svg'
import filter from '../../icons/filter.png'
import SearchBar from './SearchBar'

const StyledNavBar = styled.div`
    margin: 35px 15px 0px 15px;
    display: flex;
    justify-content: space-between;
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

const StyledLogo = styled.div`

`

const NavBar: FC = () => {
    
    return (
        <>
            <StyledNavBar>
                <StyledLogo>
                    <img src={logo_steam} alt='logo' />
                </StyledLogo>
                <SearchBar/>
                <StyledFilter>
                    <img src={filter} alt='filter'/>
                </StyledFilter>
                <StyledPriceFilter defaultValue={'Price'}>
                    <option value='Price'>Price</option>
                    <option value='PublishDate'>PublishDate</option>
                </StyledPriceFilter>
                <LikeList>Like list</LikeList>
            </StyledNavBar>
        </>
    )
}

export default NavBar;