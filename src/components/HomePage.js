import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Food from "./Food";
import Attractions from "./Attractions";
import Hotels from "./Hotels";
import Jumbotron from "react-bootstrap/Jumbotron";
import SearchLocation from "./SearchLocation"

function HomePage(props) {
  const viewDetails = () => {
    console.log(props, "props");
    window.location.href = "/foodDetails"
  };

  return (
    <div>
        <Container>
          <SearchLocation />
          <Row className="justify-content-md-center" style={{paddingTop:"200px"}}>
            <Col lg={6}>
              <Food />
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={12} style={{marginBottom:"15px"}}>
                  <Attractions />
                </Col>
                <Col lg={12}>
                  <Hotels />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default HomePage;
