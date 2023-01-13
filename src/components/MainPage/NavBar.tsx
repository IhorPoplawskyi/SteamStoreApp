import { FC } from 'react'
import styled from 'styled-components'
import logo_steam from '../../icons/logo_steam.svg'
import filter from '../../icons/filter.png'

const StyledNavBar = styled.div`
    margin: 35px 15px 0px 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledSearchBar = styled.input`
    height: 35px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #837F7F;
    width: 50%;
    color: white;
    padding-left: 15px;
    &::placeholder {
        color: white;
    }
`

const StyledFilter = styled.div`
    background: #837F7F;
    height: 35px;
    width: 35px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    &:after {
        content: "!@";
        background-color: black;
    }
`

const StyledLogo = styled.div``

const NavBar: FC = () => {
    return (
        <>
            <StyledNavBar>
                <StyledLogo>
                    <img src={logo_steam} alt='logo' />
                </StyledLogo>
                <StyledSearchBar placeholder='Enter an app name...'/>
                <StyledFilter>
                    <img src={filter} alt='filter'/>
                </StyledFilter>
                <StyledPriceFilter defaultValue={'Price'}>
                    <option disabled value='Price'>Price</option>
                    <option>from bigger to lower</option>
                    <option>from lower to bigger</option>
                </StyledPriceFilter>
            </StyledNavBar>
        </>
    )
}

export default NavBar;