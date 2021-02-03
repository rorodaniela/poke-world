import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { Container, Row, Image, Col } from 'react-bootstrap'
import ShowError from "../components/Error"

export default function DetailPokemon () {
  let { id } = useParams();
  const {data, loading, error} = useFetch(id)

  if (error) {
    return <ShowError></ShowError>

  } else if (loading === true) {
      return <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>

  } else if (loading === false) {
      return (
        <Container>
            <Row style={{marginTop: "50px"}}>
            <Col lg="3" md="0" xs="0">
                <Image src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png" fluid />
            </Col>
            <Col lg="7" md="6" xs="6" style={{backgroundColor: "rgba(0,120,140,0.7)"}}>
                <div style={{marginTop: "20px"}}>
                <h1 style={{color: "white", textAlign: "center"}}> {data.name} Info</h1>
                </div>
            </Col>
            </Row>
        </Container>
      )
  }
}