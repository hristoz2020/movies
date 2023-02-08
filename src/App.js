import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MovieList from "./components/MovieList/MovieList";
import Details from '../src/components/Details/Details';
import Login from '../src/components/Login/Login';
import Register from './components/Register/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="movies">
            <Header />

            <Routes>
                <Route path='/' element={<MovieList />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/details/:movieId' element={<Details />} />
            </Routes>
		</div>
	);
}

export default App;
