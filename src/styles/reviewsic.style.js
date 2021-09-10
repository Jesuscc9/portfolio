import styled, { keyframes } from "styled-components";

export const gradientAnimation = keyframes`
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

export const ProjectHeader = styled.div`
  z-index: -1;
  width: 100%;
  background-image: linear-gradient(90deg, #b5a4de 0%, #fbc2eb 100%);
  background-size: 400% 100%;
  animation: ${gradientAnimation} 6s ease infinite;
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
  /* border: 1px solid; */
  column-gap: 1.5rem;

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
    display: flex;
    justify-content: center;
    margin: auto;

    @media (max-width: 850px) {
      margin-top: 6px;
    }

    img {
      width: clamp(250px, 82%, 370px);
    }
  }

  .tools {
    grid-area: tools;
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: #6e00cc;
    font-size: clamp(40px, calc(26px + 4.8vw), 68px);
    text-transform: uppercase;
  }
`;
