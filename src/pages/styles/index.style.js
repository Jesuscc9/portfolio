import styled from "styled-components";

export const Main = styled.div`
  z-index: 1;
  width: 100%;
  background-color: rgba(248, 246, 255, 33%);
  backdrop-filter: blur(15px);

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 95%;
    margin: auto;
    flex-wrap: wrap;

    img {
      margin-top: 20px;
      width: 550px;
    }

    .presentation {
      font-family: "PT Sans", sans-serif;
      font-size: 32px;
      font-weight: bold;
      color: #8b8b8b;
      max-width: 500px;

      h1 {
        word-spacing: 250px;
        margin-top: 0px;
        margin-bottom: 0px;
      }

      .name {
        word-spacing: 0px;
        color: #0085ff;
        margin-bottom: 50px;
      }
    }
  }
`;

export const Shapes = styled.div`
  border: 1px solid;

  img {
    position: absolute;
    top: 0px;
    z-index: -1;
  }

  .donut {
    right: -120px;
    top: -20px;
  }
`;
