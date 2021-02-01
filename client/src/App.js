import './App.css';
import {Component} from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemons: [],
      pokemonName: ''
    }
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon(){
    fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.cards
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  searchHandler = (name) => {
    this.setState({
      pokemonName: name
    })
  }

  render(){
    const filterPokemon = this.state.pokemons.filter( pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.pokemonName)
    })

    return (
      <div className="App">
          <Navbar searchHandler={this.searchHandler} pokemons={this.state.pokemons}/>
        <div id="Content" className="container">
          <div className="row">
              {
                filterPokemon.map(pokemon => {
                  return <Content key={pokemon.id} pokemon={pokemon}/>
                })
              }
          </div>
        </div>
      </div>
    )
  }
}


export default App;
