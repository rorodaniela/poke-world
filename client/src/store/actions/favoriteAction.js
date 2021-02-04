export const addFavorite = (pokemon) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_FAVORITE",
      pokemon: pokemon
      }
    ) 
  }
}