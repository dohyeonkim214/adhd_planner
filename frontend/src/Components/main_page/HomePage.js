import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GPTArea from "../GPTArea/GPTArea"; // Ensure this path is correct

function HomePage() {
  return (
    <Container>
      <Row>
        <GPTArea />
      </Row>
      <Col>
        <p>This is the homepage</p>
      </Col>
    </Container>
  );
}

export default HomePage;
