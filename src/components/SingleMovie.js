import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = ({ movie }) => {
    const { title, poster_path, popularity, id } = movie;
    return (
        <div className="col-xl-4  col-md-6 g-4 my-3 text-center">
            <Card className='shadow'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Popularity: {popularity}
                    </Card.Text>
                    <Button as={Link} to={`/movie/${id}`} variant="secondary" size="lg" block>
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMovie;