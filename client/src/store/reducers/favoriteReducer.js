let initialFavorite = {
    favorites: []
}

function favoriteReducer(state = initialFavorite, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {...state, favorites: state.favorites.concat({
        pokemon: action.pokemon
      })}
    default:
      return state 
  }
}

export default favoriteReducer