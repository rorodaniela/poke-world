export const addPokemon = (pokemons) => {
  return {
    type: "FETCH_POKEMON",
    pokemons: pokemons 
  }
}

export const detailPokemon = (pokemon) => {
  return {
    type: "DETAIL_POKEMON",
    pokemon: pokemon
  }
}

export const loadingStatus = (status) => {
  return {
    type: "LOADING_STATUS",
    loading: status
  }
}

export const showError = (message) => {
  return {
    type: "ERROR_MESSAGE",
    error: message
  }
}
