import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { Container, Row, Image, Col, Table } from 'react-bootstrap'
import ShowError from "../components/Error"

export default function DetailPokemon () {
  let { id } = useParams();
  const {data: pokemon, loading, error} = useFetch(id)

  if (error) {
    return <ShowError></ShowError>

  } else if (loading === true) {
      return <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>

  } else if (loading === false) {
      const attack = pokemon.attacks.map(item => {
        return item.name
      })

      const weakness = pokemon.weaknesses.map(item => {
        return item.type
      })

      return (
        <Container>
            <Row style={{marginTop: "50px"}}>
            <Col lg="3" md="0" xs="0">
                <Image src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png" fluid />
            </Col>
            <Col lg="6" md="6" xs="12" style={{backgroundColor: "rgba(0,120,140,0.7)"}}>
                <div style={{marginTop: "20px"}}>
                  <h1 style={{color: "white", textAlign: "center"}}> {pokemon.name} - Info</h1>
                  <Table variant="dark" style={{opacity: "0.9"}}>
                    <tbody>
                      <tr>
                        <td style={{width: "20vw"}}>Types</td>
                        <td>{pokemon.types.join(", ")}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Super Types</td>
                        <td>{pokemon.supertype}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Hp</td>
                        <td>{pokemon.hp}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Evolves From</td>
                        <td>{pokemon.evolvesFrom}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Rarity</td>
                        <td>{pokemon.rarity}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Attacks</td>
                        <td>{attack.join(", ")}</td>
                      </tr>
                      <tr>
                        <td style={{width: "20vw"}}>Weakness</td>
                        <td>{weakness.join(", ")}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
            </Col>
            <Col lg="3" md="6" xs="0">
                <Image src={pokemon.imageUrlHiRes} style={{marginTop: "15vh", marginLeft: "5vw"}} fluid />
            </Col>
            </Row>
        </Container>
      )
  }
}