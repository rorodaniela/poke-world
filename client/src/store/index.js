import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from "redux-thunk"
import favoriteReducer from './reducers/favoriteReducer'
import pokemonsReducer from './reducers/pokemonsReducer'

const rootReducers = combineReducers({
  pokemonsRed: pokemonsReducer,
  favoritesRed: favoriteReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

let store = createStore(rootReducers, middlewareEnhancer)

export default store