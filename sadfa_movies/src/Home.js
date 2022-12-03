import React from 'react';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a174bc81dmsh56caf63607c35d9p14adefjsna1c80be58e6e',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    const allMovies =  async() => {
        try {
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles`, options);
            const data = await response.json();
            setIsLoaded(true);
            setMovies(data);
            console.log(data);
        } catch (err) {
            setIsLoaded(true);
            setError(error);
            console.error(err);
        }
    }

    useEffect(() => {
        allMovies();
    },[]);
    
        if (error) {
            return <div> <p>Error: {error.message}</p> </div>
        } else if (!isLoaded){
                return <div> <p className='loading'> Loading ...</p> </div>
        } else {
            return (
                <div className='home'>
                    <h1>Estate Moviez</h1>

                    {movies.results?.length > 0? (
                        <div className="moviecontainer">
                        {movies.results.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                        </div>
                        ) : (
                        <div className='empty'> 
                            <h2>No movies found</h2>
                        </div>
                    )}
                </div>
            )
        };
    
}


export default Home;