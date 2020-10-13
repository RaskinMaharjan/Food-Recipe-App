import React from 'react';
import { history } from '../history';

const RecipeThumbnail = (props) => {
  const { image, label } = props.recipe;

  const goToDetails = () => {
    return history.push({
      pathname: '/recipe',
      state: { recipe: props.recipe },
    });
  };

  return (
    <div className="col-md-3 mt-2 mb-2">
      <div className="recipe-thumbnail" onClick={() => goToDetails()}>
        <img src={image} alt="Recipe-img" />
        <h5 className="mt-2">{label}</h5>
      </div>
    </div>
  );
};

export default RecipeThumbnail;
