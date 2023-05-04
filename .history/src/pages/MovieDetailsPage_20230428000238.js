import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
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
