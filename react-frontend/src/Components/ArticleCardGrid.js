import React from "react";
import { StyledArticleCardGrid } from "./styled/StyledArticleCardGrid.styled";
import ArticleCard from "./ArticleCard";

const ArticleCardGrid = () => {
  return (
    <StyledArticleCardGrid>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </StyledArticleCardGrid>
  );
};

export default ArticleCardGrid;
