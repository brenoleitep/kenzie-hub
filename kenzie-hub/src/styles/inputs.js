import styled from "styled-components";

export const InputDefault = styled.input`
  padding: 0px 16px;

  width: 90%;
  max-width: 329.93px;
  height: 48px;

  background: #343b41;

  border: 1.2182px solid #343b41;
  border-radius: 4px;
  color: white;

  ::placeholder {
    color: #f8f9fa;
  }

  & hover {
    border: 1.22px solid #f8f9fa;
    background: #343b41;
  }

  & active {
    border: 1.22px solid #f8f9fa;
    background: #343b41;
  }
`;
