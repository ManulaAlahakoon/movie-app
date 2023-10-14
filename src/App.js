import {useState,useEffect} from 'react';
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = 'http://www.omdbapi.com/?apikey=' + API_KEY;

const App = () => {

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        
    }

    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState('Batman')

    useEffect(() => {
        searchMovies("Batman")  
    },[])
     
    return (
        <div className="app">
            <h1>Movie Time</h1>

            <div className="search">
                <input
                    placeholder='Search'
                    value={searchTitle}
                    onChange={(e)=>{setSearchTitle(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="Search icon"
                    onClick={()=>{searchMovies(searchTitle)}}
                />
            </div>

            
                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => <MovieCard TheMovie={movie} />)}
                    </div>
                    ):(
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                )
                   
                }
                
            

        </div>
    )
}

export default App;


/*
const movie1 = {
    
Poster
: 
"N/A",
Title
: 
"Batman Begins",
Type
: 
"movie",
Year
: 
"2005",
imdbID
: 
"tt0372784"

}
*/
