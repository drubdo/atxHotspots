import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div>
      <Container>
        <Row lg={6}>
          <Col>Food</Col>
          <Col>Sport</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
