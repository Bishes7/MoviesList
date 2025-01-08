import React from "react";

const Card = ({ searchedMovie, deleteFunc, handleOnAddToList }) => {
  const { Poster, Title, imdbRating, Plot, mood } = searchedMovie;

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
          {!mood && (
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-warning"
                onClick={() => {
                  handleOnAddToList("drama");
                }}
              >
                Drama
              </button>
              <button
                className="btn btn-info"
                onClick={() => handleOnAddToList("action")}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid my-3 ">
            <button onClick={deleteFunc} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
