import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Container} from "react-bootstrap"
import Navigation from "./components/Navbar"
import DetailPokemon from "./pages/detail"
import Favorites from "./pages/favorite"
import Dashboard from "./pages/dashboard"
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App () {
  return (
    <Router>
      <div className="App" style={{minHeight: "100vh", backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
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
    </Router>
  )

}
