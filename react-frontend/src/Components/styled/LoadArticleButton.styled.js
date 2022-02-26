import styled from "styled-components";

export const LoadArticleButton = styled.button`
  color: ${(props) => props.theme.colors.loadButton};
  font-size: 24px;
  font-weight: 700;
  width: auto;
  padding: 0;
  margin: 30px;
  display: block;
  border: 0;
  align-self: center;
  background-color: transparent;
  cursor: pointer;
`;
