import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
          <Card style={{ width: '19rem',height: '600px', background: 'rgb(252, 77, 77)'}} className="mx-4 my-5">
  <Card.Img variant="top" src={movie.posterUrl } style={{height:"70%"}}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    <ReactStars
    count={5}
    isHalf={true}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Text>
<a href={movie.trailer}><Button variant="primary">Play</Button></a>
<br/>
<Link to={`/moviedata/${movie.id}`}><Button className="my-3" variant="primary">See Details</Button></Link>


  </Card.Body>
</Card>
    )
}

export default MovieCard
