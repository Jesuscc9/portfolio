import styled from "styled-components";

export const ProjectHeader = styled.div`
  z-index: -1;
  width: 100%;
  background: linear-gradient(
    93.21deg,
    #e9aaff 32.7%,
    rgba(148, 82, 255, 0.31) 98.98%
  );
  height: 30vh;
  position: absolute;
`;

export const ProjectDescription = styled.div`
  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: #6e00cc;
    font-size: clamp(40px, calc(26px + 4.8vw), 68px);
  }
`;
