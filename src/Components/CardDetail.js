import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardDetail = ({ moviedata, match }) => {
  const movie = moviedata.find((el) => el.id.toString() === match.params.id);

  return (
    <Card
      style={{
        width: "19rem",
        height: "500px",
        background: "rgb(123, 230, 238)",
        }}
      className="mx-4 my-5"
    >
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <a href={movie.trailer}>
          <Button variant="primary">Play</Button>
        </a>
        <br />
        <Link to="/">
          {" "}
          <Button className="my-3" variant="primary">
            Back
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardDetail;
