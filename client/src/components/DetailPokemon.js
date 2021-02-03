import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { Container, Row, Image, Col } from 'react-bootstrap'

export default function Detail () {
  let { id } = useParams();
  const {data, isLoad, error} = useFetch(id)

  if (error) {
    return (
      <div className="App" style={{backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
          <div style={{ padding: "auto", marginTop: "50px", marginRight: "auto", marginLeft: "auto", width: "600px", backgroundColor: "rgba(128,128,128,0.4)"}}>
            <Image src="https://www.pinclipart.com/picdir/big/62-620970_oops-you-found-our-404-page-oops-looks.png" fluid />
            <h1 style={{color: "White"}}> {error} </h1>
          </div>
      </div>
    )
  } else if (isLoad === true) {
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
  } else if (isLoad === false) {
    return (
      <div className="App" style={{height: "100vh", backgroundImage: `url("https://i.pinimg.com/originals/ca/fe/c2/cafec2809887a1c37c83d9ebbc953252.jpg")`}}>
        <br/>
        <div className="loader" style={{marginRight: "auto", marginLeft: "auto", marginTop: "250px"}}></div>
      </div>
    )
  }
}