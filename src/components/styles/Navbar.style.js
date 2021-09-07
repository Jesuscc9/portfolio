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

const showMenu = keyframes`
  0%{
    max-height: 100px;
  }

  100%{
    max-height: 200px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    padding: 10px ${(props) => (props.scrolled ? "30px" : "30px")};
  }

  background-color: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px);" : "blur(0px)")};
  padding: 10px ${(props) => (props.scrolled ? "30px" : "60px")};
  box-shadow: ${(props) =>
    props.scrolled ? "rgba(149, 157, 165, 0.2) 0px 8px 24px;" : ""};

  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 1;
  transition: background-color 0.4s ease, box-shadow 0.4s ease,
    padding 0.4s ease, max-height 0.5s ease-in-out 0.3s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;
  min-height: 65px;
  /* height: 60px; */
  max-height: ${(props) => (props.activeNav ? "300px" : "65px")};

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

    height: 50px;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.3s 0.3s;

    a {
      margin: 0px 30px;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      color: #7c7c7c;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 18px;
      }

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

    @media (max-width: 768px) {
      margin-top: 30px;
      position: relative;
      left: -10px;
      opacity: 0;
      pointer-events: none;
      flex-direction: column;

      a {
        margin: 20px 0px;
      }
    }
  }

  .active-menu {
    opacity: 1;
    transition: opacity 0.3s 0.5s;
  }

  .nav-icon {
    width: 60px;
    height: 45px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    transform: scale(0.4);
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .nav-icon span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #7c7c7c;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  .nav-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .nav-icon span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .nav-icon span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  .nav-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
`;
