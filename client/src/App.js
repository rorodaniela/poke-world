import './App.css';
import React, {useState} from 'react'
import useFetch from './hooks/useFetch'
import Navigation from './components/Navbar'
import Content from './components/Content'
import {Container, Row, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {
  const {data, isLoad, error} = useFetch()
  const [pokemonName, setPokemonName] = useState('')
  
  if (error) {
    return (
      <div className="App" style={{backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
          <div style={{ padding: "auto", marginTop: "50px", marginRight: "auto", marginLeft: "auto", width: "600px", backgroundColor: "rgba(128,128,128,0.4)"}}>
            <Image src="https://www.pinclipart.com/picdir/big/62-620970_oops-you-found-our-404-page-oops-looks.png" fluid />
            <h1 style={{color: "White"}}> {error} </h1>
          </div>
      </div>
    )
  } else if (isLoad === true) {
      const filterPokemon = data.filter( pokemon => {
        return pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
      })

    return (
      <div className="App" style={{backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
        <Navigation setPokemonName={ setPokemonName}/>
        <Container >
          <Row >
            {
              filterPokemon.map(pokemon => {
                return <Content key={pokemon.id} pokemon={pokemon}/>
              })
            }
          </Row>
        </Container>
      </div>
      )
  } else if (isLoad === false){
    return (
      <div className="App" style={{height: "100vh", backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="loader" style={{marginRight: "auto", marginLeft: "auto"}}></div>
      </div>
    )
  } 

}
