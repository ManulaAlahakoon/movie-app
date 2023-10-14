import React from 'react';

const MovieCard = ({ TheMovie }) => {
    return (
        <div className="movie">
            <div>
                <p>{TheMovie.Year }</p>
            </div> 
            <div>
                <img src={TheMovie.Poster == "N/A" ? "https://via.placeholder.com/400" :TheMovie.Poster} alt={TheMovie.Title + " Poster"}/>
            </div>
            <div>
                <span>{TheMovie.Type}</span>
                <h3>{TheMovie.Title }</h3>
            </div>
        </div>
    )
}

export default MovieCard;