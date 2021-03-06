import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleMovie from './SingleMovie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const apiKey =`870967436c1517d581daf3b245495790`;
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    },[])
    return (
        <Container>
            <Row>
                {
                    movies.map(movie => <SingleMovie movie={movie} key={movie.id}></SingleMovie>)
                }
            </Row>
        </Container>
    );
};

export default Movies;