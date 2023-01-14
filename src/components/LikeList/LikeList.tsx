import { FC } from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../redux/store'

export const LikeList: FC = (): JSX.Element => {
    const likeList = useAppSelector(state => state.stateSlice.likeList);

    

    const StyledLikeList = styled.div`
        width: 60%;
        border: 1 px solid red;
    `

    return (
        <StyledLikeList>
           
        </StyledLikeList>
    )
}