import { Card } from "react-bootstrap";


function Moviecard({ movie }) {
  return (
    <div className="col-md-4 mt-3">
      <Card>
        <Card.Img
          variant="top"
          src={movie.poster}
          style={{ width: "300px", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{movie.rate}</small>
          <p>{''.padStart(movie.rate,'⭐')}</p>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Moviecard;
