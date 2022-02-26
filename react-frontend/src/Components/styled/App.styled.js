import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
