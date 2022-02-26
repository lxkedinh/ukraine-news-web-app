import styled from "styled-components";

export const WebsiteTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  width: auto;
  margin: 40px auto;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.websiteTitle};

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 36px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    font-size: 42px;
  }
`;
