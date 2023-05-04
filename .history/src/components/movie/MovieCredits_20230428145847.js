import React from "react";

const MovieCredits = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mb-10">CASTS</h2>
      <div className="grid grid-cols-5 gap-5">
        {cast.slice(0, 5).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;
