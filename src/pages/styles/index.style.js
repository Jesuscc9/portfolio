import styled, { keyframes } from "styled-components";

const rocketAnimPc = keyframes`
  0%{
    transform: translate(100vw, -400px) rotate(270deg);
    opacity: 0;
  }
  30%{
    transform: translate(40vw, -400px) rotate(270deg);
    opacity: 1;
  }
  35%{
    transform: translate(40vw, -400px) rotate(180deg);
    opacity: 1
  }
  70%{
    transform: translate(40vw, 0px) rotate(180deg);
    opacity: 1
  }
  75%{
    transform: translate(40vw, 0px) rotate(270deg);
    opacity: 1
  }
  100%{
    transform: translate(0px, 0px) rotate(270deg);
    opacity: 0
  }
`;

const rocketAnim = keyframes`
  0%{
    transform: translate(100vw, -400px) rotate(270deg);
    opacity: 0;
  }
  30%{
    transform: translate(70vw, -400px) rotate(270deg);
    opacity: 1;
  }
  35%{
    transform: translate(70vw, -400px) rotate(180deg);
    opacity: 1
  }
  70%{
    transform: translate(70vw, 0px) rotate(180deg);
    opacity: 1
  }
  75%{
    transform: translate(70vw, 0px) rotate(270deg);
    opacity: 1
  }
  100%{
    transform: translate(0px, 0px) rotate(270deg);
    opacity: 0
  }
`;

export const Main = styled.div`
  z-index: 1;
  width: 100%;
  max-height: 95vh;
  min-height: 95vh;
  margin-top: calc(5vh);

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 95%;
    margin: auto;
    flex-wrap: wrap;
    padding-top: 50px;

    .illustration {
      img {
        margin-top: 40px;
        width: 600px;
        z-index: 1;
      }

      .vector {
        position: absolute;
        z-index: -1;
      }

      .glasses {
        position: absolute;
        z-index: 2;
      }
    }

    .presentation {
      max-width: 700px;

      h1 {
        font-family: "PT Sans", sans-serif;
        font-size: 70px;
        font-weight: bold;
        color: #8b8b8b;
        margin-top: 0px;
        margin-bottom: 0px;
      }

      .name {
        font-family: "PT Sans", sans-serif;
        font-size: 86px;
        color: #0085ff;
        margin-bottom: 10px;
      }

      .rocket-container {
        position: relative;
        z-index: -1;

        img {
          z-index: -1;
          position: absolute;
          opacity: 0;
        }

        .rocket-pc {
          animation: ${rocketAnimPc} 7s ease-in-out;
          animation-delay: 2.2s;
        }

        .rocket-notpc {
          animation: ${rocketAnim} 7s ease-in-out;
          animation-delay: 2.2s;
        }
      }

      button {
        z-index: 2;
        margin-top: 40px;
        width: 152px;
        height: 50px;
        background: #ffb930;
        border-radius: 10px;
        outline: none;
        border: none;
        cursor: pointer;
        font-family: Poppins;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
          background-color: #ff9d00;
        }
      }
    }
  }
`;

export const Shapes = styled.div`
  height: 0px;
  z-index: 0;

  img {
    position: absolute;
    z-index: -1;
    top: 0px;
  }

  .circle2 {
    left: 7%;
    top: 80%;
  }

  .circle3 {
    top: 5%;
    left: 40%;
  }

  .circle4 {
    left: 89%;
    top: 7%;
  }

  .circle5 {
    top: 75%;
    left: 75%;
  }
`;
