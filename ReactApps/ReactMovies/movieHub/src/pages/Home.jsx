import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"


function Home() {

  const [searchQuery, setSearchQuery] = useState("")

  

  //The useEffect allows you to add side effects to your functions or to your components and define when they should run
   searchMovies
   getPopularMovies

    const [movies, setMovies] = useState([])

    useEffect(() => {}, [])
    const handleSearch  = (e)  => {

      e.preventDefault()
      alert(searchQuery)
    }

    return ( 
      <div className="home">
          <form onSubmit={handleSearch} className ="search-form">
            <input
              type ="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
           />
           <button type ="submit" className="search-button">Search</button>
          </form>

          <div className="movie-grid">
            {movies.map((movie) =>
             
              <MovieCard movie ={movie}  key={movie.id}/>)}
            </div>  

    </div>)

}

export default Home;