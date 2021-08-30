import styled from "styled-components";

export const WorkContainer = styled.div`
  z-index: 1;
  width: 100%;
  background-color: #fff;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.33) 0%,
    #f9f1ff 16.67%,
    #fff4eb 35.42%,
    #f7fff5 52.17%,
    #e4f4ff 72.48%,
    rgba(255, 255, 255, 0.51) 100%
  );

  padding-top: 30px;

  h1 {
    font-family: "PT Sans", sans-serif;
    text-align: center;
    font-size: 58px;
    font-weight: bold;
    color: #676767;
  }

  .content {
    width: 90%;
    max-width: 95%;
    margin: auto;
    padding-top: 30px;
    border-radius: 15px;

    a {
      text-decoration: none !important;
      color: #000;
    }

    .projects {
      box-sizing: content-box;
      padding-bottom: 100px;

      > * {
        &:last-child {
          margin-bottom: 100px;
        }
      }
    }

    .project {
      width: 700px;
      margin: auto;
      margin: 165px auto;
      border-radius: 10px;
      max-width: 90%;
      background-color: #f4e4ff;
      cursor: pointer;
      transition: transform 0.2s;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px 20px;
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
          font-family: "Asap", sans-serif;
          font-size: 40px;
          text-align: left;
          color: rgba(82, 0, 146, 0.83);
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

    .lpdla-app {
      background: rgba(255, 122, 0, 0.19);

      .images {
        background: linear-gradient(
          131.81deg,
          #ff655c 13.99%,
          rgba(255, 184, 0, 0.19) 99.98%
        );
      }

      .description {
        h1 {
          color: #b50000;
        }
      }
    }

    .camera-app {
      background: rgba(77, 215, 67, 0.15);

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(70, 211, 76, 0.69) 2.5%,
          rgba(255, 211, 52, 0.51) 99.98%
        );
      }

      .description {
        h1 {
          color: #008b16;
        }
      }
    }

    .covid-app {
      background: rgba(0, 117, 255, 0.12);

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(0, 102, 255, 0.74) 2.5%,
          rgba(0, 133, 255, 0.31) 99.98%
        );
      }

      .description {
        h1 {
          color: #005eca;
        }
      }
    }
  }
`;
