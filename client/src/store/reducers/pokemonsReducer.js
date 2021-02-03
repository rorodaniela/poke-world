let initialPokemons = {
  pokemons: [],
  pokemon: {},
  searchPokemon: "",
  loading: true,
  error: ""
}

function pokemonReducer(state = initialPokemons, action) {
    // console.log(state.pokemon, "<<<<< pokemon dari reducer poke")
  switch (action.type) {
    case "FETCH_POKEMONS":
      return {...state, pokemons: state.pokemons.concat({
        pokemons: action.pokemons
      })}
    case "DETAIL_POKEMON":
      return {...state, pokemon: action.pokemon}
    case "LOADING_STATUS":
      return {...state, loading: action.loading}
    case "ERROR_MESSAGE":
      return {...state, error: action.error}
    default:
      return state
  }
}

export default pokemonReducer