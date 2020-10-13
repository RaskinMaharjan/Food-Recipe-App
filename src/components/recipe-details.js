import React from 'react';

const RecipeDetails = (props) => {
  const { recipe } = props.location.state;

  return (
    <React.Fragment>
      <img src={recipe.image} alt="recipe-img" />
      <h3 className="m-0">{recipe.label}</h3>
      <a
        className="source-link"
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        (Go to source)
      </a>
      <div className="mt-3">
        <h5 className="text-left">Ingredients</h5>
        <div>
          <ul className="ingredient-list">
            {recipe.ingredientLines.map((line, key) => (
              <li key={key}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetails;
