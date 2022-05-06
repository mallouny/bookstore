import React          from 'react';

import { Logo }       from './Logo';
import Cart           from './navbar/Cart';
import { Navigation } from './navbar/Navigation';
import { Search }     from './navbar/Search';
import { Toggler }    from './phoneNavBar/Toggler';

function Header() {
  return (
    <div className="w-full sticky top-0 z-50">
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
