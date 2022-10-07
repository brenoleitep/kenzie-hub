import styled from "styled-components";

const setStyle = (type) => {
  if (type === "primary") {
    return "#FF577F";
  }

  if (type === "secondary") {
    return "white";
  }
};

export const Title1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: bold;
  line-height: 28px;
  letter-spacing: 0em;
  color: ${(props) => props.primary && setStyle("primary")};
`;

export const Title2 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  font-style: bold;
  color: ${(props) => props.secondary && setStyle("secondary")};
`;

export const Title3 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  font-style: bold;
  letter-spacing: 0em;
`;

export const Headline = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;
`;

export const HeadlineBold = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-size: 12.182px;
  line-height: 18px;
  font-style: bold;
`;

export const HeadlineItalic = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-size: 12.182px;
  line-height: 18px;
  font-style: italic;
`;
