import React from "react";
import Card from "./Card";

const Hero = () => {
  const moviestyle = {
    backgroundImage: `url(https://www.omdbapi.com/src/poster.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="bg-dark py-2 text-warning fixed-top">
        <h2 className="container">Movie World</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={moviestyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center text-white">
              <h1>Search Millions of Movies</h1>
              <p>Find about the movies before watching.. </p>
            </div>
          </div>
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Search
            </button>
          </div>
          <div className="movie-card-display">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
