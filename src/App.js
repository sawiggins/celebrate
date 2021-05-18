import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import CelebrationCard from "./CelebrationCard.js";

const CARDDATA = [
  {
    id: 1,
    title: "Published a new version on an npm package.",
    date: "05/04/2021",
    category: "frontend",
    description: "npm publish",
    isDescriptionCode: true,
  },
  {
    id: 2,
    title: "Learned about recursion.",
    date: "04/23/2021",
    category: "other",
    description: "Take a function/method and passs it to itself again.",
    isDescriptionCode: false,
  },
  {
    id: 3,
    title: "Add to database using Rails console .new and .create methods.",
    date: "05/02/2021",
    category: "backend",
    description:
      "Model.new + Model.save(validation: true/false) Model.create (will run validations)",
    isDescriptionCode: true,
  },
  {
    id: 4,
    title: "Lightbulb on bootstrap override placements.",
    date: "05/05/2021",
    category: "frontend",
    description:
      "$variable-name: value; import bootstrap  h1 {value-to-change: value;}",
    isDescriptionCode: true,
  },
  {
    id: 5,
    title:
      "Live coded for the first time at Code Connector’s Coding Dojo event.",
    date: "04/03/2021",
    category: "other",
  },
];
const App = () => {
  const [celebrationCards, setCelebrationCards] = useState(CARDDATA);
  const [filteredCelebrationCards, setFilteredCelebrationCards] =
    useState(celebrationCards);

  const filteredToRender = filteredCelebrationCards.map((card) => (
    <CelebrationCard
      title={card.title}
      date={card.date}
      category={card.category}
      description={card.description}
      isDescriptionCode={card.isDescriptionCode}
    />
  ));

  const frontend = celebrationCards.filter(
    (card) => card.category === "frontend"
  );
  const backend = celebrationCards.filter(
    (card) => card.category === "backend"
  );
  const other = celebrationCards.filter((card) => card.category === "other");

  const search = (e) => {
    const searchParam = e.target.value;
    if (searchParam != "") {
      const searchResults = celebrationCards.filter((card) => {
        return card.title.includes(searchParam);
      });
      setFilteredCelebrationCards(searchResults);
    } else setFilteredCelebrationCards(celebrationCards);
  };

  const filterFrontend = () => {
    setFilteredCelebrationCards(frontend);
  };

  const filterBackend = () => {
    setFilteredCelebrationCards(backend);
  };

  const filterOther = () => {
    setFilteredCelebrationCards(other);
  };

  const removeFilter = () => {
    setFilteredCelebrationCards(celebrationCards);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row className="hero flex-column text-center wavy-container py-5">
          <h1>Celebration Board</h1>
          <h4>Learns &amp; Wins, Big &amp; Small</h4>
          <Col md={{ span: 6, offset: 3 }}>
            <Form className="mt-3">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="search..."
                  onChange={search}
                ></Form.Control>
              </Form.Group>
            </Form>
            <div className="filters">
              <Button variant="frontend" onClick={() => filterFrontend()}>
                Frontend
              </Button>
              <Button variant="backend" onClick={() => filterBackend()}>
                Backend
              </Button>
              <Button variant="other" onClick={() => filterOther()}>
                Other
              </Button>
              <Button variant="primary-dark" onClick={() => removeFilter()}>
                All
              </Button>
            </div>
          </Col>
          <div className="wavy-bottom"></div>
        </Row>
      </Container>
      <Container>
        <div className="card-columns">{filteredToRender}</div>
      </Container>
    </div>
  );
};

export default App;
