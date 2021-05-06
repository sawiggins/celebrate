import React from 'react'

import {Button, Col, Container, Form, Row} from 'react-bootstrap'

const App = () => {
return (
  <div className="App">
    <Container fluid>
    <Row className="hero flex-column text-center wavy-container py-5">
      <h1>Celebration Board</h1>
      <h4>Learns &amp; Wins, Big &amp; Small</h4>
      <Col md={{span: 6, offset: 3}}>
        <Form className="mt-3">
          <Form.Group>
            <Form.Control type="text" placeholder="search..."></Form.Control>
          </Form.Group>
        </Form>
        <div className="filters">
          <Button variant='frontend'>Frontend</Button>
          <Button variant='backend'>Backend</Button>
          <Button variant='other'>Other</Button>
        </div>
      </Col>
      <div className="wavy-bottom"></div>
    </Row>
  </Container>
  </div>
)}

export default App;
