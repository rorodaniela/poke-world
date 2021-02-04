import React, {useContext, useState} from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {SearchContext} from "../context/searchContext"
import useDebounce from "../hooks/useDebounce"

export default function Navigation () {
  const [input, setInput] =useState('')
  const searchValue = useContext(SearchContext)
  const debounce = useDebounce((nextValue) => searchValue.setSearchInput(nextValue), 1000);

  const onChangeSearch = (event) => {
    setInput(event.target.value)
    debounce(input)
  }

  return (
    <Navbar style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} >
      <Navbar.Brand style={{color: "white"}}>Pokemon World</Navbar.Brand>
      <Nav className="mr-auto" >
        <Link to="/" style={{color: "white", marginLeft: "20px"}}>All Pokemon</Link>
        <Link to="/collections" style={{color: "white", marginLeft: "25px"}}>My Collections</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={input} onChange={(event) =>  onChangeSearch(event)}/>
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}