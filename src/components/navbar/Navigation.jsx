import React                            from 'react';

export function Navigation() {
  return (
    <div>
      <ul className="pr-12 xl:flex items-center h-full hidden">
        <li className="hover:text-orange-400 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
          <a href="/hitssales">Хиты продаж</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">
          <a href="/howtoorder">Как заказать</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer h-full flex items-center text-sm text-gray-800 mr-10 tracking-normal">
          <a href="/aboutus">О Нас</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal">
          <a href="/delivery">Доставка</a>
        </li>
      </ul>

    </div>
  );
}
