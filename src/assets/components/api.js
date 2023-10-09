import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apikey}`)
 return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apikey}`)
  return search.data
}


