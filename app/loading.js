import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-48">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <div className="text-xl font-light">Loading ...</div>
    </div>
  );
};

export default Loading;
