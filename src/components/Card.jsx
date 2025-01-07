import React from "react";

const Card = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;

  return (
    <div className="container movie-card-item">
      <div className="row  border rounded p-2">
        <div className="col-md ">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md text-dark">
          <h3>{Title}</h3>
          <p>IMDB Rating : {imdbRating}</p>
          <p>{Plot}</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid my-3 ">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
