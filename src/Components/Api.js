import axios from "axios";
import { ImdbApiKey } from "./Api.js";

const ImdbApiUrl = "https://imdbapi.net/api";

export function getMovies() {
  return axios.get("https:localhost:5000/movies");
}

export function searchMovies() {
  return axios.post(ImdbApiUrl, {
    key: ImdbApiKey,
    title: term
  });
}
