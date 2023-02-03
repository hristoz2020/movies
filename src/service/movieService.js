const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8991bdb0msh3a45b3554513272p1a50f5jsn1f7e79eecad9',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

export const getMovies = fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=a', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));