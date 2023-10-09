import React from "react";

const MovieDetail = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-detail">
      <div>
        <img
          className="flex flex-col h-screen w-[100%]"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
          alt={movie.title}
          onClick={() => onMovieClick(null)}
        />
      </div>
      <div className="font-extrabold text-[3rem] text-red-700">{movie.title}</div>
      <div className="text-[2rem] text-black">
        <h1 className="font-extrabold text-[2rem] text-black">Detail Film: </h1>{movie.overview}</div>
        
        <div className="text-[2rem] text-black">
        <h1 className="font-extrabold text-[2rem] text-black">Release Date:  </h1>{movie.release_date}</div>

        <div className="text-[2rem] text-black">
        <h1 className="font-extrabold text-[2rem] text-black">Rating:   </h1>{movie.vote_average}</div>
        
    </div>
  );
};

export default MovieDetail;
