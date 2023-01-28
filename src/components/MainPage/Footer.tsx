import { FC } from 'react'
import styled from 'styled-components'

import linkedin from '../../icons/linkedin.png'
import telegram from '../../icons/telegram.png'
import github from '../../icons/github.png'

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    background: #171A21;
    height: 100px;
    width: 100%;
`

const StyledIconsBlock = styled.section`
    display: flex;
`

const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
    transition: background 0.2s ease-out 50ms;
    &:hover {
        background: blue;
    }
`

export const Footer: FC = (): JSX.Element => {
    return (
       <StyledFooter>
           <StyledIconsBlock>
                <StyledIcon><img style={{background: 'transparent'}} src={linkedin} alt='linkedin'/></StyledIcon>
                <StyledIcon><img style={{background: 'transparent'}} src={github} alt='github'/></StyledIcon>
                <StyledIcon><img style={{background: 'transparent'}} src={telegram} alt='telegram'/></StyledIcon>
                <StyledIcon><img style={{background: 'transparent'}} src={linkedin} alt='linkedin'/></StyledIcon>
           </StyledIconsBlock>
       </StyledFooter>
    )
}