import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivCadastro = styled.div`
  width: 90%;
  max-width: 369px;
  /* height: 502px; */

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: #212529;

  flex-direction: column;

  padding: 34px 18px 34px 18px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  gap: 16px;

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    align-items: flex-start;

    width: 90%;
    /* max-width: 369px; */
    /* height: 502px; */

    color: #f8f9fa;

    label {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 0px;
      /* identical to box height, or 0% */

      /* grey-0 */

      color: #f8f9fa;
    }

    span {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 14px;

      text-align: center;
      color: #868e96;
    }
  }
`;

export const DivMainCadastro = styled.div`
  width: 90%;
  max-width: 369px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const ButtonBackToLogin = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 99.49px;
  height: 32px;

  background: #212529;
  color: #ffffff;
  border-radius: 4px;

  padding: 0px 16px;

  cursor: pointer;

  color: #ffffff;

  text-decoration: none;
  text-align: center;
`;
