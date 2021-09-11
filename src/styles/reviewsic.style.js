import styled, { createGlobalStyle, keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: #fff !important;
    background: #fff !important;
  }
`;

const textAnimtaion = keyframes`
    to {
      background-position: -200% center;
    }
`;

export const ProjectHeader = styled.div`
  z-index: -1;
  width: 100%;
  background: linear-gradient(
    93.21deg,
    #e9aaff 32.7%,
    rgba(148, 82, 255, 0.31) 98.98%
  );
  /* background-size: 400% 100%; */
  animation: ${gradientAnimation} 12s ease infinite;
  background-repeat: no-repeat;
  height: 40vh;
  position: absolute;
  top: 0px;
`;

export const ProjectDescription = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  row-gap: 20px;
  width: 90%;
  margin: auto;
  grid-template-areas: "image description" "image tools ";
  column-gap: 1.5rem;
  margin-top: 15vh;
  grid-template-rows: calc(20vh) auto;
  margin-bottom: 120px;

  @media (max-width: 850px) {
    margin-top: 10vh;
    grid-template-columns: 1fr;
    grid-template-areas: "description" "image" "tools ";
    grid-template-rows: auto auto;
  }

  @media (min-width: 768px) {
    max-height: 92vh;
    min-height: 92vh;
  }

  div {
  }

  .description {
    grid-area: description;

    h2,
    p {
      text-align: justify;
    }

    @media (max-width: 850px) {
      h2,
      p {
        text-align: center;
      }

      p {
        margin-top: 12px;
      }

      p {
        width: 85%;
        margin: auto;
      }
    }
  }

  .project-image {
    grid-area: image;
    margin: 10px auto;

    .image-container {
      display: flex;
      justify-content: center;

      img {
        width: 100px;
        width: clamp(230px, 80%, 350px);
        max-height: 100%;
      }
    }

    @media (max-width: 850px) {
      margin-top: 6px;
    }
  }

  .tools {
    grid-area: tools;
    overflow-x: scroll;

    .buttons-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        margin: 0px 10px;
        padding: 4px 16px;
        font-size: 14px;

        svg {
          margin-left: 8px;
        }
      }

      @media (max-width: 768px) {
        margin: 25px 0px;
        margin-bottom: 45px;
        justify-content: center;
      }

      .app-button-reviewsic {
        background-color: #6e00cc;
      }

      .github-button {
        background-color: #333;
      }
    }

    p {
      color: #000;
    }

    .date {
      font-size: 16px;
      font-weight: bold;
      color: #8c8c8c;
      position: sticky;
    }

    h3 {
      font-family: "Asap", sans-serif;
    }

    ul {
      margin: 0px;
    }

    li {
      color: #000;
      margin: 0px;
    }
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: #6e00cc;
    font-size: clamp(50px, 5.5vw, 72px);
    text-transform: uppercase;

    background: linear-gradient(
      to right,
      #6e00cc 40%,
      #b966ff 50%,
      #b966ff 60%,
      #6e00cc 70%
    );
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${textAnimtaion} 4s ease infinite;
  }
`;
