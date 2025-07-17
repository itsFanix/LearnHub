import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"


function Home() {

  const [searchQuery, setSearchQuery] = useState("")

  //  const movies = [
  //   {id:1, title: "John Wick", release_date:"2020"},
  //   {id:2, title: "Terminator", release_date:"1999"},
  //   {id:3, title: "The Matrix", release_date:"1998"},
  //   {id:4, title: "random life", release_date:"2020"}
    
  //  ] 

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