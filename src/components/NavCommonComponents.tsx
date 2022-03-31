import styled from "styled-components";

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1px;
  min-width: 42px;
`;

export const Text = styled.h1<{ expand: boolean }>`
  margin-left: 10px;
  opacity: ${(props) => (props.expand ? "1" : "0")};
  visibility: ${(props) => (props.expand ? "visible" : "hidden")};
  transition: opacity 0.6s 0.3s;
  & h2 {
    font-size: 16px;
  }
  & h3 {
    font-size: 11px;
    font-weight: 500;
  }
`;

