import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainLogin = styled.div`
  width: 90%;
  max-width: 369px;
  height: 502px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: #212529;

  flex-direction: column;

  padding: 34px 18px 34px 18px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    align-items: flex-start;

    width: 90%;
    /* max-width: 369px; */
    height: 502px;

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

export const ButtonCadastre = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 324px;
  height: 48px;

  background: #868e96;
  border: 1.2182px solid #868e96;

  border-radius: 4.06066px;

  padding: 0px 16px;

  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
`;
