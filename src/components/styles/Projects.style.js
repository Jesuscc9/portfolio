import styled from "styled-components";

export const WorkContainer = styled.div`
  z-index: 1;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(13px);
  max-height: 100vh;
  min-height: 100vh;
  margin-top: -21px;

  h1 {
    font-family: "Baloo 2", sans-serif;
    text-align: center;
    font-size: 42px;
    color: #585858;
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 95%;
    margin: auto;
    flex-direction: column;
    padding-top: 30px;
    border-radius: 15px;
    border: 1px solid;
    height: 100vh;

    a {
      text-decoration: none !important;
      color: #000;
    }

    .project {
      width: 700px;
      margin-bottom: 100px;
      border-radius: 10px;
      background-color: #f4e4ff;
      cursor: pointer;
      transition: transform 0.2s;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 15px 20px;
      text-decoration: none !important;

      p {
        text-decoration: none !important;
      }

      .images {
        min-width: 150px;
        min-height: 150px;
        max-width: 150px;
        max-height: 150px;
        background: linear-gradient(
          131.81deg,
          rgba(245, 80, 139, 0.5) 2.5%,
          rgba(98, 2, 181, 0.5) 99.98%
        );
        border-radius: 5px;

        .image-container {
          position: relative;

          .pc {
            position: absolute;
            top: 15px;
            right: 40px;
            height: 120px;
            z-index: 1;
          }

          .pcgif-container {
            position: relative;
            z-index: 0;

            img {
              position: absolute;
              top: 20px;
              left: -24px;
              width: 128px;
            }
          }

          .phone {
            position: absolute;
            top: 15px;
            left: 130px;
            height: 115px;
            z-index: 1;
          }

          .phonegif-container {
            position: relative;
            z-index: 0;

            img {
              position: absolute;
              top: 17px;
              left: 134px;
              width: 50px;
              border-radius: 10px;
            }
          }
        }
      }

      .description {
        width: 450px;

        margin-right: 10px;

        h1 {
          margin: 0px;
          font-family: "Raleway", sans-serif;
          font-size: 32px;
          text-align: left;
        }

        p {
          margin-top: 0px;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          text-align: justify;
        }
      }

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;
