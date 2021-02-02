import React from 'react'
import {Card, Col} from 'react-bootstrap'
// import { Heart } from 'react-bootstrap-icons';

export default function Content (props) {
  return (
    <Col lg="3" md="6" xs="6">
      <Card className="zoom" style={{ width: '12rem', marginTop: "15px", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <Card.Img variant="top" src={props.pokemon.imageUrlHiRes} />
        <Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}