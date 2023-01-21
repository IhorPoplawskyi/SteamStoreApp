import { FC } from 'react';
import styled from 'styled-components';
import { game } from '../redux/stateSlice';

const StledItemContainer = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  padding-bottom: 4px;
  background: white;
  cursor: pointer;
`

const StyledItemImage = styled.img`
  width: 20%;
  height: 100%;
`
const StyledItemInfo = styled.span`
  background: white;
  width: 80%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`

export const LikeListItem: FC<game> = (game): JSX.Element => {
  return (
    <StledItemContainer>
      <StyledItemImage alt='img' src={game.imgUrl}/>
      <StyledItemInfo>{game.title}</StyledItemInfo>
    </StledItemContainer>
  )
}