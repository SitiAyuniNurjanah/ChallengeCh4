import React, { useEffect, useState } from "react";
import { getMovieList } from "../assets/components/api";
import MovieDetail from "./MovieDetail";

export const Home2 = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleMovieClick = (movie) => {
    if (selectedMovie) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  const getTitleText = () => {
    if (selectedMovie) {
      return selectedMovie.title;
    } else {
      return "Popular Movie";
    }
  };

  const PopularMovieList = ({ onMovieClick }) => {
    const moviesToDisplay = popularMovies;

    return moviesToDisplay.map((movie, i) => {
      return (
        <div
          className="movie-wrapper"
          key={i}
          onClick={() => handleMovieClick(movie)}
        >
          <img
            className="movie-image rounded-xl"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      );
    });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <>
      <div className="flex flex-wrap ml-12 mt-[2rem] justify-between items-center">
      <h1 className="font-extrabold text-[3rem] text-black">{getTitleText()}</h1>
        <a className="font-extrabold text-[2rem] text-red-700 mr-12" href="/">
          Back
        </a>
      </div>

      <div className="movie-container mt-8">
        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onMovieClick={handleMovieClick} />
        ) : (
          <PopularMovieList />
        )}
      </div>
    </>
  );
};
