import React from "react";

export function Toggler() {
  return (
    <button
      id="menu"
      className="text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
      onclick="sidebarHandler(true) "
    >
      <img
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_Grey_background-svg7.svg"
        alt="toggler" />
    </button>
  );
}
