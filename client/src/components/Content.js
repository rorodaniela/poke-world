import {Component} from 'react'

class Content extends Component {
  render(){
    return (
    <div className="col-md-6 col-lg-4 ms-auto" style={{marginTop: "30px"}}>
        <div className="card" style={{width: "18rem", borderRadius: "20px"}}>
            <div className="card-body">
                <h5 className="card-text"  style={{textAlign: "center"}}>{this.props.pokemon.name}</h5> 
            </div>
            <img src={this.props.pokemon.imageUrlHiRes} className="card-img-top" alt="pokemon"/>
        </div>
    </div>
    )
  }
}

export default Content