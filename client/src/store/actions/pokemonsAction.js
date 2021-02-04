export const fetchPokemons = (pokeId) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`https://api.pokemontcg.io/v1/cards/${pokeId}`)
      const data = await response.json()

      switch (response.status) {
        case 200:
          dispatch({
            type: "FETCH_POKEMONS",
            pokemons: data.cards
          })
          break;
        case 400:
          throw new Error("We could not process that action")
        case 403:
          throw new Error("Forbidden")
        case 404:
          throw new Error("The requested resource could not be found")
        case 500:
          throw new Error("We had a problem with our server. Please try again later")
        default:
          throw new Error("We are temporarily offline for maintenance. Please try again later")
      }
    } catch (error) {
      dispatch(showError(error.message))
    }
  }
}

export const fetchDetail = (pokeId) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`https://api.pokemontcg.io/v1/cards/${pokeId}`)
      const data = await response.json()

      switch (response.status) {
        case 200:
          dispatch({
            type: "DETAIL_POKEMON",
            pokemon: data.card
          })
          break;
        case 400:
          throw new Error("We could not process that action")
        case 403:
          throw new Error("Forbidden")
        case 404:
          throw new Error("The requested resource could not be found")
        case 500:
          throw new Error("We had a problem with our server. Please try again later")
        default:
          throw new Error("We are temporarily offline for maintenance. Please try again later")
      
      }
    } catch (error) {
      dispatch(showError(error.message))
    }
  }
}

export const showError = (message) => {
  return {
    type: "ERROR_MESSAGE",
    error: message
  }
}
