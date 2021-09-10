import styled, { keyframes } from "styled-components";

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
  height: 44vh;
  position: fixed;
`;

export const ProjectDescription = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  row-gap: 20px;
  width: 90%;
  margin: auto;
  margin-top: 10vh;
  grid-template-areas: "image description" "image tools ";
  border: 1px solid;
  column-gap: 1.5rem;
  overflow: scroll;
  max-height: 80vh;

  grid-template-rows: calc(40vh - 6vh) auto;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-areas: "description" "image" "tools ";
    grid-template-rows: auto auto;
    margin-top: 4vh;
  }

  div {
    /* border: 1px solid; */
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
        width: 90%;
        margin: auto;
      }
    }
  }

  .project-image {
    grid-area: image;
    margin: 10px auto;
    border: 1px solid;

    .image-container {
      border: 1px solid;
      position: sticky;
      top: 0;

      img {
        border: 1px solid;
        width: 100px;
        width: clamp(230px, 80%, 350px);
      }
    }

    @media (max-width: 850px) {
      margin-top: 6px;
    }
  }

  .tools {
    grid-area: tools;

    p {
      color: #000;
    }

    .date {
      font-size: 16px;
      font-weight: bold;
      color: #8c8c8c;
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
    font-size: clamp(40px, calc(26px + 4.8vw), 68px);
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
