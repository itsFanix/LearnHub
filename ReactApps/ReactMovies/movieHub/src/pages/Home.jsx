import MovieCard from "../components/MovieCard"


function Home() {

   const movies = [
    {id:1, title: "John Wick", release_date:"2020"},
    {id:2, title: "Terminator", release_date:"1999"},
    {id:3, title: "The Matrix", release_date:"1998"},
    {id:4, title: "random life", release_date:"2020"}
    
   ] 

    return <div className="home">
          <div className="movie-grid">
            {movies.map(movie => <MovieCard movie ={movie}  key={movie.id}/>)}
            </div>  

    </div>
}