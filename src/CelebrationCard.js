import React from 'react';
import { Card } from 'react-bootstrap';

const CelebrationCard = ({title}) => {
  return (
    <Card className="celebration-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>04/27/2021</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default CelebrationCard;
