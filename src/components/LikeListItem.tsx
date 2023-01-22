import { FC } from 'react';
import styled from 'styled-components';
import { gameInfo } from '../redux/stateSlice';
import trashBin from '../components/LikeList/trashBin.png'
import { useAppDispatch } from '../redux/store';
import { deleteFromLikeList } from '../redux/likeListSlice';
import { useNavigate } from 'react-router-dom';

const StledItemContainer = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid Gainsboro;
  padding-bottom: 4px;
  background: white;
  cursor: pointer;
`

const StyledItemImage = styled.img`
  width: 40%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    width: 40%;
  }
  @media only screen and (min-width: 600px) {
    width: 30%;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`
const StyledItemInfo = styled.span`
  background: white;
  width: 70%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const StyledItemDeleteBtn = styled.button`
  border: none;
  background: transparent;
  width: 10%;
`

const StyledItemDeleteBtnIcon = styled.img`
  background: white;
  cursor: pointer;
`

export const LikeListItem: FC<gameInfo> = (game): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <StledItemContainer>
      <StyledItemImage alt='img' src={game.imgUrl} onClick={() => navigate(`/game/${game.appId}`)} />

      <StyledItemInfo onClick={() => navigate(`/game/${game.appId}`)}>{game.title}</StyledItemInfo>

      <StyledItemDeleteBtn onClick={() => dispatch(deleteFromLikeList(game.appId))}>

        <StyledItemDeleteBtnIcon alt='trashBin' src={trashBin} />

      </StyledItemDeleteBtn>
    </StledItemContainer>
  )
}