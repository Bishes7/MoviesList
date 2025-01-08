import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMoviesToList = (movie) => {
    const tempMovies = movieList.filter((item) => item.imdbID !== movie.imdbID);

    setMovieList([...tempMovies, movie]);
  };

  const handleOnDel = (imdbID) => {
    setMovieList(movieList.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <div className="wrapper">
      {/* Hero Section */}
      <Hero addMoviesToList={addMoviesToList} />

      {/* Display section */}
      <Display movieList={movieList} handleOnDel={handleOnDel} />
    </div>
  );
}

export default App;
