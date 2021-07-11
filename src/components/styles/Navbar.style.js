import styled from "styled-components";

export const Nav = styled.nav`
  max-width: 100%;
  background-color: rgba(253, 253, 253, 73%);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  backdrop-filter: blur(3px);

  h1 {
    margin: 0px;
    font-family: "Baloo 2", cursive;
    font-size: 24px;
    font-weight: 700;
    color: #3f3f3f;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0px 20px;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      color: #9b9b9b;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;
