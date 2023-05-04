import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque
      veniam doloribus animi earum maiores voluptatum, consequatur tenetur iusto
      assumenda cumque iure, provident, deleniti impedit excepturi eaque eveniet
      tempora. Doloribus.
    </div>
  );
};

export default MovieDetailsPage;
