import { createStore } from 'redux'
import favoriteReducer from './reducers/favoriteReducer'
// import pokemonsReducer from './reducers/pokemonsReducer'

// const rootReducers = combineReducers({
//   pokemon: pokemonsReducer,
//   favorite: favoriteReducer
// })

let store = createStore(favoriteReducer)

export default store