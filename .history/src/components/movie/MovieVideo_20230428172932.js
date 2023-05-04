import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, fetcher } from "../../config";
import useSWR from "swr";

const MovieVideo = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-5">TRAILER</h2>
      {results.slice(0, 1).map((item) => (
        <div
          key={item.id}
          className="w-[1000px] h-[600px] aspect-video mx-auto"
        >
          <iframe
            width="942"
            height="530"
            src={`https://www.youtube.com/embed/${item.key}`}
            title={item.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full object-fill h-full"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MovieVideo;
