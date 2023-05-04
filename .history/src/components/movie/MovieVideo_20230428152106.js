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
  console.log(data);
  if (!data) return null;
  return (
    <div>
      {data.map((item) => (
        <iframe
          width="942"
          height="530"
          src="https://www.youtube.com/embed/P7d6SSrn05U"
          title="TẤT TẦN TẬT VỀ GIẢI ĐẤU MSI 2023 &amp; GAM ESPORTS: THỂ THỨC, LỊCH THI ĐẤU, CƠ HỘI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ))}
    </div>
  );
};

export default MovieVideo;
