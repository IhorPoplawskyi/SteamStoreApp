import { FC } from "react";
import styled from "styled-components";

import gmail from "../icons/gmail.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import telegram from "../icons/telegram.png";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background: #171a21;
  height: 60px;
  width: 100%;
  justify-content: space-around;
  @media only screen and (max-width: 330px) {
    flex-wrap: wrap;
  }
`;

const StyledIconsBlock = styled.section`
  display: flex;
`;

const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-out 50ms;
  &:hover {
    background: orange;
  }
`;

const StyledImg = styled.img`
  background: transparent;
`;

const StyledInfo = styled.p`
  color: white;
  font-size: 13px;
`;

const StyledName = styled.a`
  text-decoration: none;
  color: orange;
  cursor: pointer;
`;

export const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledInfo>
        Created by{" "}
        <StyledName target="_blank" href="https://t.me/Greg_vishki">
          Ihor Poplawskyi
        </StyledName>
      </StyledInfo>
      <StyledIconsBlock>
        <StyledIcon
          href="https://www.linkedin.com/in/ihor-poplawskyi-867a20254/"
          target="_blank"
        >
          <StyledImg src={linkedin} alt="linkedin" />
        </StyledIcon>
        <StyledIcon href="https://github.com/IhorPoplawskyi" target="_blank">
          <StyledImg src={github} alt="github" />
        </StyledIcon>
        <StyledIcon href="https://t.me/Greg_vishki" target="_blank">
          <StyledImg src={telegram} alt="telegram" />
        </StyledIcon>
        <StyledIcon href="mailto:poplawskyiihor@gmail.com" target="_blank">
          <StyledImg src={gmail} alt="gmail" />
        </StyledIcon>
      </StyledIconsBlock>
    </StyledFooter>
  );
};
