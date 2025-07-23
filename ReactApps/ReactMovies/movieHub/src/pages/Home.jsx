import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"


function Home() {

  const [searchQuery, setSearchQuery] = useState("")

  //Just a comment

 
  //The useEffect allows you to add side effects to your functions or to your components and define when they should run
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const loadPopularMovies = async () =>  {
        try {
          const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        }catch(err) {
          console.log(err)
          setError("Failed to load movies..")
        }
        finally{
          setLoading(false)
        }

      }
      loadPopularMovies()
    }, [])


    const handleSearch  = async (e)  => {
      e.preventDefault()
      if(!searchQuery.trim()) return
      if(loading) return
      setLoading(true)
      try{
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)

      }catch(error) {
        console.log(err)
        setError("Failed to search movie...")
      }
      finally{
        setLoading(false)
      }
      
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
        
          {error && <div className="error-message">
            {error}
            </div>}

          {loading ?(
            <div className="loading">Loading...</div>
          ): (<div className="movies-grid">
            {movies.map((movie) =>
             
              <MovieCard movie ={movie}  key={movie.id}/>)}
            </div> )}


           

    </div>)

}

export default Home;