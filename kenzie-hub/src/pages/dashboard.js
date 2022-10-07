import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 80px;
  align-items: center;

  div {
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px 16px;
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  /* width: 100%; */
  max-width: 1200px;

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;
    /* margin-top: 20px; */

    width: 100%;
    height: 100px;

    color: white;

    box-shadow: 0px 0px 1px 1px #212529;

    @media (min-width: 728px) {
      flex-direction: row;
    }
  }
`;
