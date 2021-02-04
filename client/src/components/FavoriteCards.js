import React from "react"
import {Card, Col} from "react-bootstrap"

export default function FavoriteCard (props) {

  return (
    <Col lg="3" md="6" xs="6">
      <Card className="zoom" style={{ width: "12rem", height: "16rem", marginTop: "20px", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <Card.Img variant="top" style={{maxHeight: "300px"}} src={props.pokemon.imageUrlHiRes} />
      </Card>
    </Col>
  )
}