import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../assets/components/api";
import MovieDetail from "./MovieDetail";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [customTitle, setCustomTitle] = useState("Popular Movie");
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  const search = async (q) => {
    if (q.length >= 1) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      setCustomTitle(`Search Results for "${q}"`);
    } else {
      getMovieList().then((result) => {
        setPopularMovies(result.slice(0, 4));
        setCustomTitle("Popular Movie");
      });
    }
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result.slice(0, 4));
    });
  }, []);

  const handleMovieClick = (movie) => {
    setShowMovieDetail(!showMovieDetail);
    setSelectedMovie(showMovieDetail ? null : movie);
    setCustomTitle(showMovieDetail ? "Popular Movie" : movie.title);
  };

  const PopularMovieList = () => {
    const moviesToDisplay =
      searchQuery.length >= 1 ? popularMovies : popularMovies.slice(0, 4);

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

  const MovieDisplay = () => {
    if (showMovieDetail) {
      return (
        <MovieDetail movie={selectedMovie} onMovieClick={handleMovieClick} />
      );
    } else {
      return <PopularMovieList />;
    }
  };

  return (
    <>
      <div className="bg-image flex flex-col h-screen w-full">
        <div className="flex justify-between items-center w-[95%] ml-12 ">
          <h1 className="flex font-extrabold text-[4rem] text-red-700">
            MovieList
          </h1>
          <input
            type="text"
            placeholder="search..."
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
            className="bg-transparent border border-red-700 text-white placeholder-white rounded-full w-[50rem] h-[3rem]"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(searchQuery);
              }
            }}
          />
          <button className="bg-transparent border border-red-700 hover:bg-red-600 text-red-400 ml-2 w-[8rem] h-[3rem] rounded-full">
            Input
          </button>
          <button className="bg-red-700 hover:bg-red-600 text-white ml-2 w-[8rem] h-[3rem] rounded-full">
            Register
          </button>
        </div>
        <div className="flex flex-col ml-12 w-[52%] mt-[7rem]">
          <h1 className="font-extrabold text-[6rem] text-white">
            Doctor Strange in the Multiverse of Madness
          </h1>
          <p className="text-[2rem] text-white">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="bg-red-700 hover:bg-red-600 text-white mt-[2rem] w-[15rem] h-[3rem] rounded-full">
            WATCH TRAILER
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ml-12 mt-[2rem] justify-between items-center">
        <h1 className="font-extrabold text-[3rem] text-black">{customTitle}</h1>
        <a className="font-extrabold text-[2rem] text-red-700 mr-12" href="/H2">
          See All Movie
        </a>
      </div>

      <div className="movie-container mt-8">
        <MovieDisplay />
      </div>
    </>
  );
};
