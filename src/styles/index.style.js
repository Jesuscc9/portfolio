import styled, { keyframes } from "styled-components";

const rocketAnimPc = keyframes`
  0%{
    transform: translate(100vw, -400px) rotate(270deg);
    opacity: 0;
    /* animation-timing-function: cubic-bezier(.25,.1,1,1); */
  }
  40%{
    transform: translate(55vw, -400px) rotate(270deg);
    /* animation-timing-function: cubic-bezier(1,1,1,1); */
    opacity: 1;
  }
  50%{
    transform: translate(40vw, -300px) rotate(180deg);
    /* animation-timing-function: ease-out; */
    opacity: 1;
  }
  60%{
    transform: translate(40vw, -50px) rotate(180deg);
    /* animation-timing-function: ease-out; */
    opacity: 1;
  }
  70%{
    transform: translate(40vw, 0px) rotate(270deg);
    /* animation-timing-function: linear; */
    opacity: 1;
  }
  80%{
    transform: translate(0px, 0px) rotate(270deg);
    /* animation-timing-function: linear; */
    opacity: 0;
  }
  100%{
    display: none;
    visibility: hidden;
  }
`;

const rocketAnim = keyframes`
  0%{
    transform: translate(100vw, -400px) rotate(270deg);
    opacity: 0;
  }
  40%{
    transform: translate(70vw, -400px) rotate(270deg);
    opacity: 1;
  }
  50%{
    transform: translate(70vw, -400px) rotate(180deg);
    opacity: 1
  }
  60%{
    transform: translate(70vw, 0px) rotate(180deg);
    opacity: 1
  }
  70%{
    transform: translate(70vw, 0px) rotate(270deg);
    opacity: 1
  }
  80%{
    transform: translate(0px, 0px) rotate(270deg);
    opacity: 0
  }
  100%{
    visibility: hidden;
    display: none;
  }
`;

const buttonAnim = keyframes`
  0%{
    transform: scale(1);
  }
  
  90%{
    transform: scale(1);
  }

  95%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

export const Main = styled.div`
  z-index: 1;
  width: 100%;
  max-height: 95vh;
  min-height: 95vh;
  margin-top: calc(5vh);
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 110vh;
    min-height: 110vh;
  }

  @media (max-width: 640px) {
    max-height: 125vh;
    min-height: 125vh;
  }

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
        text-align: left;
        @media (max-width: 768px) {
          font-size: 50px;
        }
      }

      .name {
        font-family: "PT Sans", sans-serif;
        font-size: 86px;
        color: #0085ff;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          font-size: 81px;
        }
      }

      .rocket-container {
        position: relative;
        z-index: -1;

        img {
          z-index: -1;
          position: absolute;
          opacity: 0;
        }

        .rocket {
          animation: ${rocketAnimPc} 8s cubic-bezier(1, -0.3, 0.3, 1);
          animation-delay: 1s;
        }

        @media (max-width: 800px) {
          .rocket {
            animation: ${rocketAnim} 8s cubic-bezier(1, -0.3, 0.3, 1);
            animation-delay: 1s;
          }
        }
      }

      button {
        z-index: 2;
        margin-top: 40px;
        background: #ffb930;

        transition: background-color 0.2s;
        animation: ${buttonAnim} 6.7s cubic-bezier(1, -0.3, 0.3, 1);
        animation-delay: 1s;

        &:hover {
          background-color: #ff9d00;
        }

        @media (max-width: 768px) {
          transform: scale(0.95);
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

export const ContactInfo = styled.div`
  .email-info {
    border: 1px solid;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100px;

    .rotate-text {
      transform: rotate(90deg);
      position: relative;
      right: 50px;
      width: 255px;
    }
  }

  .line {
    width: 2px;
    height: 200px;
    background-color: blue;
  }
`;
