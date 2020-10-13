export const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RECIPIES':
      return action.payload;

    default:
      return state;
  }
};
