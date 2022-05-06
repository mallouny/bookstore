import { Link }                from 'react-router-dom';
import React                   from 'react';

export function Logo() {
  return (
    <Link to="/" className="mr-10 flex items-center">
      <img
        className="w-8 h-8"
        src="https://www.svgrepo.com/show/83343/book.svg"
        alt="logo"
      />
      <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
        BookStore
      </h3>
    </Link>
  );
}
