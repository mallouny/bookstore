import React from 'react';

export function Navigation() {
  return (
    <ul className="pr-12 xl:flex items-center h-full hidden">
      <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
        <a href="#id">Скидки %</a>
      </li>
      <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
        <a href="#id">Хиты продаж</a>
      </li>
      <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">
        <a href="#id">Как заказать</a>
      </li>
      <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal">
        <a href="#id">О Нас</a>
      </li>
    </ul>
  );
}
