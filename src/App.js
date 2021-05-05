import React from 'react'

import {Button, Col, Container, Form, Row} from 'react-bootstrap'

const App = () => {
return (
  <Container className="App">
    <Row className="hero flex-column text-center">
      <h1>Celebration Board</h1>
      <h4>Learns &amp; Wins, Big &amp; Small</h4>
      <Col md={{span: 6, offset: 3}}>
        <Form>
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
    </Row>
  </Container>
)}

export default App;
