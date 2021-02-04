import React, { useEffect, useContext } from "react"
import ShowError from "../components/Error"
import Content from "../components/ContentCard"
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemons } from "../store/actions/pokemonsAction"
import {SearchContext} from "../context/searchContext"

export default function Dashboard() { 
  const {pokemons, loading, error} = useSelector((state) => state.pokemonsRed)
  const searchValue = useContext(SearchContext)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchPokemons(""))
  }, [])

  if (error) {
    return <ShowError error={error}></ShowError>

  } else if (loading === true) {
    return (
      <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>
    )
    
  } else {
    const filterPokemon = pokemons.filter( pokemon => {
      return pokemon.name.toLowerCase().includes(searchValue.searchInput.toLowerCase())
    })
    return (
      <Row >
        {
          filterPokemon.map(pokemon => {
            return <Content key={pokemon.id} pokemon={pokemon}/>
          })
        }
      </Row>
    )
  }

}