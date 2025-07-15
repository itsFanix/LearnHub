
import "../css/MovieCard.css"


function MovieCard({movie}){

    function onFavoriteClick() {
        alert("clicked")
    }

    return(
    <div className="movie_card">
        <div className="movie-poster">
            <img src={movie.url} alt = {movie.title}/>
            <div className="movie-overlay">
                <button className = "favoritye-btn" onClick={onFavoriteClick}>
                    Like
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h3>{movie.release_date}</h3>
        </div>
    
    </div>

    ) 
}


export default MovieCard