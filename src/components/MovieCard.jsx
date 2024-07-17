import React from "react";

export const MovieCard = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheList,
}) => {
  const { Poster, Title, imdbRating, Plot, mood, imdbID } = searchedMovie;
  console.log(searchedMovie);
  return (
    <div className="container ">
      <div className="row  border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" width={150} />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB rating : {imdbRating}</p>
          <p>{Plot?.slice(0, 70)}...</p>

          {!mood && (
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-warning flex-grow-1"
                onClick={() => handleOnAddToTheList("drama")}
              >
                {" "}
                Drama
              </button>
              <button
                className="btn btn-info flex-grow-1"
                onClick={() => handleOnAddToTheList("action")}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button
              onClick={() => deleteFunc(imdbID)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
