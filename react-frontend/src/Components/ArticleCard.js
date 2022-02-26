import React from "react";
import { StyledArticleCard } from "./styled/ArticleCard.styled";

const ArticleCard = () => {
  return (
    <StyledArticleCard>
      <div className='thumbnail-container'>
        <img
          src='https://static01.nyt.com/images/2022/02/25/world/25ukraine-refugees-add3/merlin_202850298_66b686bd-b11c-4aef-b332-68a00a69c924-superJumbo.jpg?quality=75&auto=webp'
          alt='card thumbnail'
        />
      </div>

      <div className='card-info'>
        <h2 className='card-title'>
          Russia Will Launch An All-Out Attack Tonight, Ukraine’s President Says
        </h2>

        <p className='card-source'>New York Times</p>
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;
