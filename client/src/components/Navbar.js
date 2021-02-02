import React, {useState} from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default function Navigation (props) {
  const [pokemonName, setPokemonName] = useState('')

  const onChangeSearch = (event) => {
    setPokemonName(event.target.value)
    props.setPokemonName(event.target.value)
  }

  return (
    <Navbar style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} >
      <Navbar.Brand href="#home" style={{color: "white"}}>Poke World</Navbar.Brand>
      <Nav className="mr-auto" >
        <Nav.Link href="#home" style={{color: "white"}}>All Pokemon</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={pokemonName} onChange={(event) =>  onChangeSearch(event)}/>
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}