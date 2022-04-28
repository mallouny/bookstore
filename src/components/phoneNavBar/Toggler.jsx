import React from 'react';

export function Toggler() {
  return (
    <button
      id="menu"
      type="button"
      className="text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
      onClick="sidebarHandler(true) "
    >
      <img
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_Grey_background-svg7.svg"
        alt="toggler"
      />
    </button>
  );
}
