import styled from "styled-components";

export const AboutmeContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 1286px) {
    margin-top: 150px;
  }

  .about-me {
    width: 950px;
    max-width: 85%;
    height: auto;
    margin: auto;
    background-color: #d9eeff;
    border-radius: 20px;
    padding: 20px 50px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h1 {
      color: #0085ff;
      font-size: clamp(32px, calc(32px + 4vw), 64px);
    }

    button {
      margin: 20px auto;
      transition: background-color 0.2s, transform 0.2s;

      &:hover {
        background-color: #0077e6;
      }
    }

    p {
      font-size: 18px;
      margin: 35px 0px;
      text-align: center;
      line-height: 32px;
    }
  }
`;
