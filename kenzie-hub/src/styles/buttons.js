import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: 100%;
  max-width: 324px;
  height: 48px;

  background: #ff577f;

  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;

  padding: 0px 16px;

  cursor: pointer;

  color: #ffffff;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background: #ff427f;
  border: 1.22px solid #ff427f;
`;

export const ButtonDisable = styled(ButtonPrimary)`
  background: #59323f;
  border: 1.2182px solid #59323f;
`;

export const ButtonGrey1 = styled(ButtonPrimary)`
  background: #868e96;
  border: 1.2182px solid #868e96;
`;

export const ButtonGrey2 = styled(ButtonPrimary)`
  background: #343b41;
  border: 1.2182px solid #343b41;
`;

export const TextButtonDisable = styled.button`
  width: 99.49px;
  height: 32px;

  background: #212529;
  color: #ffffff;
  border-radius: 4px;

  padding: 0px 16px 0px 16px;
`;

export const TextButton = styled(TextButtonDisable)`
  background: #343b41;
`;
