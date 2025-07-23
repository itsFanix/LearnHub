import { useState } from 'react'

import './css/App.css'

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';


// condition redenring : condition ? ():() or condition && data
function App() {

const movieNumber = 1;
  

  return (
    <MovieProvider>
      <NavBar/>
        <main className="main-content">
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/favorites" element = {<Favorites/>}/>
            </Routes>
          </main>
    </MovieProvider>
  
  );
}

export default App;
