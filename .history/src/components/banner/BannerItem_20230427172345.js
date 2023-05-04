import React from "react";

const BannerItem = () => {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src="https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1_1013_638.jpg"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">One Piece - VUA HAI TAC</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Phieu luu
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Phieu luu
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Phieu luu
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg text-white font-medium bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
