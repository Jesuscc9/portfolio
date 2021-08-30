import styled, { keyframes } from "styled-components";

const svgAnim = keyframes`
  0%{
    stroke-dasharray: 0 70%;
    fill: rgba(0, 133, 255, 0);
    opacity: 1;
  }

  79%{
    fill: rgba(0, 133, 255, 0);
    opacity: 1;
  }

  80%{
    stroke-dasharray: 50% 0;
    stroke-dashoffset: 10%;
    opacity: 0.5;
  }
  100%{
    opacity: 1
  }
`;

export const Nav = styled.nav`
  background-color: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px);" : "blur(0px)")};

  box-shadow: ${(props) =>
    props.scrolled ? "rgba(149, 157, 165, 0.2) 0px 8px 24px;" : ""};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${(props) => (props.scrolled ? "30px" : "60px")};
  height: ${(props) => (props.scrolled ? "7vh" : "9vh")};
  min-width: calc(100vw);
  max-width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 2;
  transition: background-color 0.4s ease, box-shadow 0.4s ease,
    padding 0.4s ease, height 0.4s ease;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;
  h1 {
    margin: 0px;
    font-family: "Baloo 2", cursive;
    font-size: 24px;
    font-weight: 700;
    color: #3f3f3f;
  }

  svg {
    text {
      font-family: "Baloo 2", cursive;
      font-size: 24px;
      font-weight: 700;
      color: #0085ff;
      stroke-width: 1px;
      stroke: #0085ff;
      letter-spacing: 2px;
      fill: rgba(0, 133, 255, 1);
      transition: fill 0.3s;
      animation: ${svgAnim} 2s;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0px 30px;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      color: #7c7c7c;
      font-weight: 600;
      text-decoration: none;

      .svg-container {
        position: relative;

        svg {
          position: absolute;
          bottom: -7px;
          left: 2px;
          opacity: 0;
          width: 76px;
          height: 40px;
          transform: scaleX(1.3);
          fill: none;
          stroke: #0084ff;
          stroke-linecap: round;
          stroke-width: 2px;
          stroke-dasharray: var(--offset, 69px) 278px;
          stroke-dashoffset: 361px;

          transition: stroke 0.25s ease var(--stroke-delay, 0s),
            stroke-dasharray 0.6s, opacity 1s;
        }

        .svg-1 {
          transform: scaleX(0.9);
          left: -13px;
        }

        .svg-2 {
          transform: scaleX(1.5);
          left: 9px;
        }

        .svg-3 {
          transform: scaleX(1.06);
          left: -4px;
        }
      }

      &:hover {
        svg {
          opacity: 1;
          --spacing: 4px;
          --stroke: var(--line-active);
          --stroke-delay: 0.1s;
          --offset: 180px;
        }
      }
    }
  }
`;
