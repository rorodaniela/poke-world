let initialPokemons = {
  pokemons: [],
  pokemon: {},
  loading: true,
  error: ""
}

function pokemonReducer(state = initialPokemons, action) {
  console.log(state, "<< ini dari pokemon reducer yg state nya");
  switch (action.type) {
    case "FETCH_POKEMONS":
      return {...state, pokemons: action.pokemons, loading: false} // ini array
    case "DETAIL_POKEMON": 
      console.log(state.pokemon, "<<< ini pokemon dari reducer")
      return {...state, pokemon: action.pokemon, loading: false} //ini objek
    case "ERROR_MESSAGE":
      return {...state, error: action.error, loading: false}
    default:
      return state
  }
}

export default pokemonReducer