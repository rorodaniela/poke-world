import React, {useState} from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function Navigation (props) {
  const [pokemonName, setPokemonName] = useState('')

  const onChangeSearch = (event) => {
    setPokemonName(event.target.value)
    props.setPokemonName(event.target.value)
  }

  return (
    <Navbar style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} >
      <Navbar.Brand style={{color: "white"}}>Poke World</Navbar.Brand>
      <Nav className="mr-auto" >
        <Link to="/" style={{color: "white", marginLeft: "20px"}}>All Pokemon</Link>
        <Link to="/collections" style={{color: "white", marginLeft: "25px"}}>My Collections</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={pokemonName} onChange={(event) =>  onChangeSearch(event)}/>
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}