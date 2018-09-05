import axios from "axios";
import { ImdbApiKey } from "./AppConfig";

const ImdbApiUrl = "http://imdbapi.net/api";
const MovieApiUrl = "https:localhost:5000/movies";

export function getMovies() {
  return axios.get("https:localhost:5000/movies");
}

export function searchMovies(term) {
  return axios.post(ImdbApiUrl, {
    key: ImdbApiKey,
    title: term
  });
}

export function createMovie(movie) {
  return axios.post(MovieApiUrl, movie);
}

export function deleteMovie(movie) {
  return axios.delete(`${MovieApiUrl}/${movie.id}`);
}
