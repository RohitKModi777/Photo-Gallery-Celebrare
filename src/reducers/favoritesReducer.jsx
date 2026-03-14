const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const isFavorite = state.some(photo => photo.id === action.payload.id);
      let newState;
      if (isFavorite) {
        newState = state.filter(photo => photo.id !== action.payload.id);
      } else {
        newState = [...state, action.payload];
      }
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    }
    case 'SET_INITIAL': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default favoritesReducer;
