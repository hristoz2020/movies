import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MovieList from "./components/MovieList/MovieList";
import Details from '../src/components/Details/Details';

function App() {
	return (
		<div className="movies">
            <Header />
            
            <Routes>
                <Route path='/' element={<MovieList />} />
                <Route path='/details/:movieId' element={<Details />} />
            </Routes>
		</div>
	);
}

export default App;
