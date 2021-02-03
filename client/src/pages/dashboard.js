import React from "react"
import useFetch from "../hooks/useFetch"
import ShowError from "../components/Error"
import Content from "../components/ContentCard"
import { Row } from 'react-bootstrap'

export default function Dashboard() {
  const {data: pokemons, loading, error} = useFetch('')

  if (error) {
    return <ShowError></ShowError>

  } else if (loading === true) {
    return (
      <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>
    )
    
  } else {
    return (
      <Row >
        {
          pokemons.map(pokemon => {
            return <Content key={pokemon.id} pokemon={pokemon}/>
          })
        }
      </Row>
    )
  }

}