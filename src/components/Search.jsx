import React from "react";

export function Search() {
  return (
    <div className="w-full pr-12 h-full flex items-center border-r">
      <div className="relative w-full">
        <div className="text-gray-600 absolute ml-3 inset-0 m-auto w-4 h-4">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_Grey_background-svg3.svg"
            alt="search" />
        </div>
        <input
          className="border border-gray-100 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-gray-500 placeholder-gray-600 bg-gray-100 pl-8 py-2"
          type="text"
          placeholder="Search" />
      </div>
    </div>
  );
}
