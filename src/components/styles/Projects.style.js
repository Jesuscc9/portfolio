import styled from "styled-components";

export const WorkContainer = styled.div`
  z-index: 1;
  width: 100%;
  background-color: #fff;

  background: linear-gradient(
    180deg,
    #eff8ff 0%,
    #eff8ff 0.01%,
    #f8f0fe 11.46%,
    #f2f2f2 27.08%,
    #f2fff0 37.5%,
    #dff1ff 52.6%,
    #fffff2 65.1%,
    #fff4eb 79.69%,
    #ffffff 91.15%
  );

  .content {
    width: 90%;
    max-width: 95%;
    margin: auto;
    border-radius: 15px;

    a {
      text-decoration: none !important;
      color: #000;
    }

    h1 {
      margin-top: 20vh;
      font-size: clamp(32px, calc(32px + 4vw), 64px);

      @media (max-width: 768px) {
        margin-top: 10vh;
      }
    }

    .projects {
      box-sizing: content-box;
      padding-bottom: 100px;

      > * {
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }

    .project {
      width: 700px;
      margin: auto;
      margin: 140px auto;
      border-radius: 10px;
      max-width: 90%;
      background-color: #f4e4ff;
      cursor: pointer;
      transition: transform 0.2s;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px;
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

        h2 {
          color: rgba(82, 0, 146, 0.83);
        }

        p {
          margin-top: 1.2rem;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          text-align: justify;
        }

        a {
          color: rgba(82, 0, 146, 0.83);
          text-decoration: underline !important;
          cursor: arrow;
          font-weight: 600;
        }
      }

      &:hover {
        transform: scale(1.02);
      }
    }

    @media (max-width: 800px) {
      .project {
        justify-content: center;
        padding: 30px;
        box-sizing: border-box;

        .description {
          flex-basis: 100%;
          width: 100%;
        }

        .images {
          margin: auto;
          margin-top: 40px;
        }
      }

      .even {
        flex-direction: column-reverse;
      }
    }

    .reviewsic {
      margin-top: 120px;
    }

    .lpdla {
      background: rgba(255, 122, 0, 0.19);
      margin-bottom: 16px;

      .images {
        background: linear-gradient(
          131.81deg,
          #ff655c 13.99%,
          rgba(255, 184, 0, 0.19) 99.98%
        );
      }

      .description {
        h2 {
          color: #b50000;
        }

        a {
          color: #b50000;
        }
      }
    }

    .physiology {
      background-color: #e4e4e4;

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(183, 212, 255, 0.74) 2.5%,
          rgba(113, 198, 255, 0.96) 99.98%
        );
      }

      .description {
        h2 {
          color: #0072d7;
        }

        a {
          color: #0072d7;
        }
      }
    }

    .lights {
      background-color: #fffac3;

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(255, 199, 0, 0.69) 2.5%,
          rgba(238, 186, 0, 0.1) 99.98%
        );
      }

      .description {
        h2 {
          color: #efbb00;
        }

        a {
          color: #efbb00;
        }
      }
    }

    .camera {
      background: rgba(77, 215, 67, 0.15);

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(70, 211, 76, 0.69) 2.5%,
          rgba(255, 211, 52, 0.51) 99.98%
        );
      }

      .description {
        h2 {
          color: #008b16;
        }

        a {
          color: #008b16;
        }
      }
    }

    .covid {
      background: rgba(0, 117, 255, 0.12);

      .images {
        background: linear-gradient(
          131.81deg,
          rgba(0, 102, 255, 0.74) 2.5%,
          rgba(0, 133, 255, 0.31) 99.98%
        );
      }

      .description {
        h2 {
          color: #005eca;
        }

        a {
          color: #005eca;
        }
      }
    }
  }

  .projects-text {
    margin: auto;
    width: 700px;
    max-width: 90%;
    padding-bottom: 80px;
    box-sizing: border-box;

    li {
      margin: 1rem 0px;
    }

    a {
      color: #0085ff;
      font-weight: 500;
    }
  }

  summary {
    cursor: pointer;
    background-color: #e9e9e9;
    padding: 1rem;
    border-radius: 0.7rem;
    color: #6d6d6d;
    font-weight: 500;
  }
`;
