import styled from "styled-components";

export const CustomFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 60px 30px;

  h2 {
    font-size: 30px;
    color: #003584;
    margin-bottom: 20px;
  }

  .contact {
    div {
      display: flex;
      align-items: center;
      margin: 16px 0px;

      p,
      a {
        margin: 0px 16px;
        color: #000;
      }

      a {
        color: #0066ff;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    svg {
      color: #003584;
      transform: scale(1.1);
    }
  }

  .social {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 0px 20px;
    }

    .icons {
      height: 70%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      align-items: center;

      svg {
        font-size: 34px;
        color: #0066ff;
      }
    }
  }
`;
