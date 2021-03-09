import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const apiKey =`870967436c1517d581daf3b245495790`;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMovie(data))
    },[id]);
    const {poster_path, title, overview, release_date} = movie;
    return (
        <Container>
            <Row className='align-items-center'>
            <div className="col-md-6 g-4">
                <img className='img-fluid' src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt=""/>
            </div>
            <div className="col-md-6 g-4">
                <h3>{title}</h3>
                <h6>Release Date: {release_date}</h6>
                <p>{overview}</p>
            </div>
            </Row>
        </Container>
    );
};

export default MovieDetails;