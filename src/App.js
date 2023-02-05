import { Routes, Route } from 'react-router-dom';
import MovieList from "./components/MovieList/MovieList";
import Details from '../src/components/Details/Details';
import "./App.css";

function App() {
	return (
		<div className="movies">
            <Routes>
                <Route path='/' element={<MovieList />} />
                <Route path='/details/:movieId' element={<Details />} />
            </Routes>
		</div>
	);
}

export default App;
