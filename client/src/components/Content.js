import React from 'react'
import {Card, Col, Button} from 'react-bootstrap'
import{ useHistory } from "react-router-dom"

export default function Content (props) {
  const history = useHistory()
  
  const ChangeRoute = (id) => {
    history.push(`/pokemon/${id}`)
  }

  return (
    <Col lg="3" md="6" xs="6">
      <Card className="zoom" style={{ width: '12rem', height: "20.5rem", marginTop: "5px", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <Card.Img variant="top" src={props.pokemon.imageUrlHiRes} />
        <Card.Body className="d-flex justify-content-center" >
          <Button style={{width: "40px", height: "36px", marginRight: "6px"}}><i className="fas fa-heart"></i></Button>
          <Button onClick={ () => ChangeRoute(props.pokemon.id) } style={{width: "40px", height: "36px"}}><i className="fas fa-info"></i></Button>
        </Card.Body>
      </Card>
    </Col>
  )
}