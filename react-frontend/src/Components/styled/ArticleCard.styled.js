import styled, { keyframes } from "styled-components";

// hover animation
const fadeLink = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

export const StyledArticleCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  max-width: 250px;
  height: 350px;
  margin: 0 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  animation: none;

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
  }

  h2.card-title {
    color: ${({ theme }) => theme.colors.cardTitle};
    margin-left: 10px;
    width: 90%;
    margin-bottom: 10px;
  }

  p.card-desc {
    height: 150px;
    opacity: 0;
    margin-left: 10px;
    font-size: 14px;

    transition: opacity 0.15s ease-in-out 0.1s;
  }

  a.card-link {
    display: inline-block;
    opacity: 0;
    height: 20px;
    text-align: center;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    color: white;
    padding: 5px;
    font-size: 14px;
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.cardLinkBackground};
    width: 100px;
  }

  p.card-source {
    position: absolute;
    margin-bottom: 10px;
    margin-right: 10px;
    bottom: 0;
    right: 0;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 300px;
  }

  /* translate card description up to fully cover thumbnail when card is hovered */
  &:hover {
    .card-info {
      top: 0;
    }

    p.card-desc {
      opacity: 1;
    }

    a.card-link {
      animation-name: ${fadeLink};
      animation-timing-function: ease-in-out;
      animation-duration: 1.25s;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }
`;
