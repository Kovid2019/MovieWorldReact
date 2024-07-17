import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import {
  accessFromLocalSession,
  storeInLocalSession,
} from "./utils/localStorage";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const mvList = accessFromLocalSession();
    mvList?.length && setMovieList(mvList);
  }, []);

  const addMovieToList = (movie) => {
    //Remove possible duplicate movie
    const tempMv = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMv, movie]);
    storeInLocalSession([...tempMv, movie]);
  };
  const handleOnDeleteMovie = (imdbId) => {
    confirm("Are you sure, you want to delete this movie from the list") &&
      setMovieList(movieList.filter((mv) => mv.imdbID !== imdbId));
  };
  return (
    <div className="wrapper">
      {/* Hero Section  */}
      <Hero addMovieToList={addMovieToList} />
      {/* Display Section  */}
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
    </div>
  );
}

export default App;
