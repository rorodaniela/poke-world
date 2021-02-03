import './App.css';
import React, { useState } from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './hooks/useFetch'
import Navigation from './components/Navbar'
import Content from './components/Content'
import DetailPokemon from "./components/DetailPokemon"
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"


export default function App () {
  const {data, isLoad, error} = useFetch('')
  const [pokemonName, setPokemonName] = useState('')
  
  if (error) {
    //kondisi kalau error
    return (
      <div className="App" style={{backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
          <div style={{ padding: "auto", marginTop: "50px", marginRight: "auto", marginLeft: "auto", width: "600px", backgroundColor: "rgba(128,128,128,0.4)"}}>
            <Image src="https://www.pinclipart.com/picdir/big/62-620970_oops-you-found-our-404-page-oops-looks.png" fluid />
            <h1 style={{color: "White"}}> {error} </h1>
          </div>
      </div>
    )
  } else if (isLoad === true) {
    // kondisi kalau udah berhasil fetch data
      const filterPokemon = data.filter( pokemon => {
        return pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
      })

      return (
        <Router>
          <div className="App" style={{minHeight: "100vh", backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
            <Navigation setPokemonName={ setPokemonName}/>
            <Switch>
              {/* Route untuk pokemon cards */}
              <Route exact path="/">
                <Container >
                  <Row >
                    {
                      filterPokemon.map(pokemon => {
                        return <Content key={pokemon.id} pokemon={pokemon}/>
                      })
                    }
                  </Row>
                </Container>
              </Route>
              {/* Route untuk detail pokemon */}
              <Route path="/pokemon/:id">
                <DetailPokemon></DetailPokemon>
              </Route>
            </Switch>
          </div>
        </Router>
      )
  } else if (isLoad === false){
    // kondisi ketika masih loading
    return (
      <div className="App" style={{height: "100vh", backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
        <br/>
        <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>
      </div>
    )
  } 

}
