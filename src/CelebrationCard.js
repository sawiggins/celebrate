import React from 'react';
import { Card } from 'react-bootstrap';

const CelebrationCard = ({title, category}) => {
  return (
    <Card className={`celebration-card ${category}`} >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>04/27/2021</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default CelebrationCard;
