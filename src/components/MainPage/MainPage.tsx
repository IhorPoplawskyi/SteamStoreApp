import { FC } from 'react'
import styled from 'styled-components';
import NavigationBar from './NavBar';

const StyledMainPage = styled.div`
    width: 100%;
    min-height: 100vh;
`

const MainPage: FC = () => {
    return (
        <>
            <StyledMainPage>
                <NavigationBar />
            </StyledMainPage>
        </>
    )
}

export default MainPage;