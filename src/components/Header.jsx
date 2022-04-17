import React          from 'react';

import Cart           from './Cart';
import { Logo }       from './Logo';
import { Navigation } from './Navigation';
import { Search }     from './Search';
import { Toggler }    from './Toggler';

function Header() {
  return (
    <div className="h-full w-full absolute">
      <div className="w-full xl:hidden h-full absolute z-40">
        <div
          className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
          onClick="sidebarHandler(false)"
        />
      </div>

      <nav className="w-full mx-auto bg-white shadow">
        <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
          <div className="h-full flex items-center">
            <Logo />
            <Navigation />
          </div>
          <div className="h-full xl:flex items-center justify-end hidden">
            <div className="w-full h-full flex items-center">
              <Search />
              <Cart />
            </div>
          </div>
          <div className="visible xl:hidden flex items-center">
            <div>
              <Toggler />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
