import {Component} from 'react'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      pokemonName: ''
    }
  }

  onChangeSearch = (event) => {
    this.setState({
      pokemonName: event.target.value
    })
    this.props.searchHandler(event.target.value)
  }

  render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand" >Navbar</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <span className="nav-link active" aria-current="page" >Home</span>
                </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse navbarSupportedContent d-flex flex-row-reverse">
              <form>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.pokemonId} onChange={this.onChangeSearch}></input>
              </form>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar