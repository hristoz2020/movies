import { useState, useEffect } from 'react';
import * as movieService from '../../service/movieService';

const MovieList = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        movieService.getMovies()
            .then(movie => {
                setMovie(movie);
            })
            .catch(err => {
                alert(err);
            });
    }, []);

    return(
        <>
            
        </>
    );
}

export default MovieList;