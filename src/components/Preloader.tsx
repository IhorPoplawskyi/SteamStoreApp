import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  position: absolute;
  left: 50%;
  top: 25%;

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
