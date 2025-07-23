
import { useMovieContext } from "../contexts/MovieContext"
import "../css/MovieCard.css"


function MovieCard({movie}){

    const  {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

    function onFavoriteClick() {
        alert("clicked")
    }

    return(
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title}/>
            <div className="movie-overlay">
                <button className = "favoritye-btn" onClick={onFavoriteClick}>
                    Like
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    
    </div>

    ) 
}


export default MovieCard