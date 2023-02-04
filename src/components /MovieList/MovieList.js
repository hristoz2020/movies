import { useEffect, useState } from "react";
import { getMovies } from "../../service/moviesService";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = () => {
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        getMovies()
            .then(result => {
                setMovie(result.d);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
	return (
		<>
			<h1>Wellcome to movie list!</h1>
            <ul>
                {movie.map((x) => (
                    <MovieCard key={x.id} movie={x} />
                ))}
            </ul>
		</>
	);
};

export default MovieList;
