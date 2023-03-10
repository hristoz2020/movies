
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8991bdb0msh3a45b3554513272p1a50f5jsn1f7e79eecad9',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

const searchBy = 'games';

export const getMovies = async () => {
	let response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${searchBy}`, options)
	
	let result = await response.json();
	
	return result;
}
