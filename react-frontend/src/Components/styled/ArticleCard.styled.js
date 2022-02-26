import { keyframes } from "styled-components";
import styled from "styled-components";

// hover animation for article cards
const cardTranslation = keyframes`
  0% {
    .card-info {
      height: 200px;
    }
  }

  100% {
    .card-info {
      height: 400px;
    }
  }
`;

export const StyledArticleCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  max-width: 250px;
  height: 400px;
  margin: 0 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  position: relative;

  animation: none;

  /* news article thumbnail */
  .thumbnail-container {
    width: 100%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }
  }

  .card-info {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
    background-color: white;
    transition: top 0.5s ease-in-out;
    border-radius: 10px;
    /* news article source */
    p.card-source {
      margin-top: auto;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: 10px;
    }
    animation: none;
  }

  /* news article title */
  h2.card-title {
    color: ${({ theme }) => theme.colors.cardTitle};
    margin-left: 10px;
    width: 90%;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 300px;
  }

  /* hover animation */
  &:hover {
    .card-info {
      top: 0;
    }
  }
`;
