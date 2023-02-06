import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
	
	return (
		<li>
			<h2>Name: {movie.l}</h2>
			<p>{movie.s}</p>
			<img src={movie.i.imageUrl} alt="movie" /> 
			<Link className="button" to={`/details/${movie.id}`} >
				Details
			</Link>
		</li>
	);
};

export default MovieCard;

