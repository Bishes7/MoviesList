import React, { useEffect, useState } from "react";
import Card from "./Card";

const Display = ({ movieList, handleOnDel }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFilter = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }

    const filteredMovie = movieList.filter((movie) => movie.mood === mood);
    setDisplayList(filteredMovie);
  };

  return (
    <div className="container mt-5">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => handleOnFilter("all")}
                type="button"
                className="btn btn-primary"
              >
                All
              </button>
              <button
                onClick={() => handleOnFilter("drama")}
                type="button"
                className="btn btn-warning"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnFilter("action")}
                type="button"
                className="btn btn-info"
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-white ">
              {displayList.length} movies Listed
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md ">
            {displayList.map((item, i) => (
              <Card searchedMovie={item} key={i} deleteFunc={handleOnDel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
