import "./App.css";
import { useState, useEffect} from 'react';
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a174bc81dmsh56caf63607c35d9p14adefjsna1c80be58e6e',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

const DisplayMovies =()=>{
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, seterror] = useState(null);

    const searchMovies = async(title) =>{
        try{
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming`, options);
            const data = await response.json();
            setIsLoaded(true);
            setMovies(data);
            console.log(data)
        } catch(err){
           setIsLoaded(true);
           setError(error);
           console.log(err);
        }
    }

    useEffect(()=>{
        searchMovies("Batman");
    }, []);
}