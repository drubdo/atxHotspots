import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Food from "./Food";
import Jumbotron from "react-bootstrap/Jumbotron";

function HomePage(props) {
  const viewDetails = () => {
    console.log(props, "props");
    window.location.href="/foodDetails"
  };

  return (
    <div>
      <Jumbotron>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <Food />
            </Col>
            <Col lg={6}>Sport</Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomePage;
