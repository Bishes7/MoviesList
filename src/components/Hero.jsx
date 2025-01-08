import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/Random";

const Hero = ({ addMoviesToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const shouldFetchRef = useRef(true);

  const [searching, setSearching] = useState(false);

  const searchRef = useRef("");

  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    setSearching(false);
  };

  const handleMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  };

  const handleOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };

  const handleOnAddToList = (mood) => {
    addMoviesToList({ ...searchedMovie, mood });
    setSearchedMovie({});
    setSearching(true);
  };

  const moviestyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="bg-dark py-2 text-warning fixed-top ">
        <h2 className="container">Movie World</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={moviestyle}
      >
        <div className="hero-content">
          <div className={searching ? "form-center" : "form-top"}>
            {searching && (
              <div className="text-center text-white">
                <h1>Search Millions of Movies</h1>
                <p>Find about the movies before watching.. </p>
              </div>
            )}

            <div className="input-group my-5">
              <input
                onFocus={() => setSearching(true)}
                ref={searchRef}
                type="text"
                className="form-control"
                placeholder="Search for MOVIES"
                aria-label="Search for MOVIES"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon2"
                onClick={handleMovieSearch}
              >
                Search
              </button>
            </div>
          </div>
          {!searching && (
            <div
              className="movie-card-display showMovie"
              style={{ marginTop: "10rem" }}
            >
              <Card
                searchedMovie={searchedMovie}
                deleteFunc={handleOnDelete}
                handleOnAddToList={handleOnAddToList}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
