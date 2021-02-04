import React from "react"
import {useSelector} from "react-redux"
import FavoriteCard from "../components/FavoriteCards"
import { Row } from 'react-bootstrap'


export default function Favorites () {
  const {favorites} = useSelector((state) => state.favoritesRed)
  
  return (
    <div style={{marginTop: "10px"}}>
      <h1 style={{color: "white", textAlign: "center"}}> Favorite Pokemons</h1>
      <div style={{backgroundColor: "rgba(0,120,140,0.7)", minHeight: "80vh", paddingLeft: "40px"}}>
        <Row>
          {
            favorites.map(favorite => {
              return <FavoriteCard key={favorite.pokemon.id} pokemon={favorite.pokemon}/>
            })
          }
        </Row>
      </div>
    </div>
  )
}