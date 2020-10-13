import React from 'react';
import { useSelector } from 'react-redux';
import RecipeThumbnail from './recipe-thumbnail';

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <React.Fragment>
      {recipes.length >= 1 && (
        <React.Fragment>
          <h3>List of Recipes</h3>
          <div className="col-md-12 row">
            {recipes.map((item, key) => (
              <RecipeThumbnail key={key} recipe={item.recipe} />
            ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RecipeList;
