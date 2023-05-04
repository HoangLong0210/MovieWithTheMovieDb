export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "a58d8f2dcc2e162008480323ba82d932";
const tmdbMovie = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbMovie}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) => `${tmdbMovie}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbMovie}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
};
