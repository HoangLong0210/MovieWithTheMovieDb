export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "a58d8f2dcc2e162008480323ba82d932";
const tmdbMovie = "";
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=a58d8f2dcc2e162008480323ba82d932`,
};
