import styled from "styled-components";

export const StyledArticleCardGrid = styled.div`
  display: grid;
  margin: 0 auto;
  row-gap: 30px;

  /* change number of columns depending on screen size */
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
