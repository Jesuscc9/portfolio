import styled, { keyframes } from "styled-components";

const SquaresAnim = keyframes`
  0%{
    fill: black;
  }

  100%{
    fill: white;
  }
`;

export const Svg = styled.svg`
  [id^="blue_squares"] {
    transition: all 0.3s;
    /* animation: ${SquaresAnim} infinite 3s alternate; */
    fill: ${(props) => (props.hover ? "blue" : "gray")};
  }

  #Vector2 {
    opacity: ${(props) => (props.hover ? "0" : "1")};
    transition: opacity 1s;
  }

  #Vector3 {
    opacity: ${(props) => (props.hover ? "1" : "0")};
    transition: opacity 1s;
  }
`;

export const ImagesContainer = styled.div``;

export const SvgContainer = styled.div`
  width: 600px;
  padding-top: 50px;
`;
