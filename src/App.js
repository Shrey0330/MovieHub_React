import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//http://www.omdbapi.com/?i=tt3896198&apikey=73619807
import MovieCard from "./MovieCard";
const API_KEY = "http://www.omdbapi.com?apikey=73619807";

const App = () => {
  const [movies, setMovies] = useState([]);
const [searchTerm,setSearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
console.log(data)
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search For movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
