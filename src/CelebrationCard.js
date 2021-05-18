import React from "react";
import { Card } from "react-bootstrap";

const CelebrationCard = ({
  title,
  category,
  date,
  description,
  isDescriptionCode,
}) => {
  {
    /* TODO: CLEAN UP, ONLY PASS IF TRUE */
  }
  const isDescriptionCodeClass = isDescriptionCode ? "code" : false;
  return (
    <Card className="celebration-card">
      <Card.Header className={`${category}`}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{date}</Card.Subtitle>
      </Card.Header>
      {description && (
        <Card.Body>
          <Card.Text className={`${isDescriptionCodeClass}`}>
            {description}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default CelebrationCard;
