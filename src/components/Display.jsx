import React from "react";
import Card from "./Card";

const Display = () => {
  return (
    <div className="container mt-5">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">
                All
              </button>
              <button type="button" className="btn btn-warning">
                Drama
              </button>
              <button type="button" className="btn btn-info">
                Action
              </button>
            </div>
            <div className="mt-3 text-white ">2 movies Listed</div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
