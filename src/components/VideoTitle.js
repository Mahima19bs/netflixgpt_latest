import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white w-1/2 h-[60vh] pointer-events-none bg-gradient-to-r from-black/80 via-black/30 to-transparent">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="py-6 text-sm w-1/2">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-gray-400 text-black px-8 py-3 text-lg font-semibold rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>

        <button className="bg-gray-400 text-black px-8 py-3 text-lg font-semibold rounded-lg  hover:bg-opacity-80">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;