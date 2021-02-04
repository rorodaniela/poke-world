import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Container} from "react-bootstrap"
import Navigation from "./components/Navbar"
import DetailPokemon from "./pages/detail"
import Favorites from "./pages/favorite"
import Dashboard from "./pages/dashboard"
import {SearchProvider} from "./context/searchContext"
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App () {

  return (
    <Router>
      <SearchProvider>
        <div className="App">
          <Navigation/>
          <Container > 
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route path="/pokemon/:id">
              <DetailPokemon/>
            </Route>
            <Route path="/collections">
              <Favorites/>
            </Route>
          </Switch>
          </Container>
        </div>
      </SearchProvider>
    </Router>
  )

}
