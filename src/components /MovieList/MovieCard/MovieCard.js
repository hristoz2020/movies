//import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
	
	return (
		<li>
			<h3>Name: {movie.name}</h3>
			<p>Type: {movie.type}</p>
			<p className="img">
				<img src={movie.imageUrl} />
			</p>
			<button className="button">
				Details
			</button>
		</li>
	);
};

export default MovieCard;