import { Routes, Route }       from 'react-router-dom';
import React                   from 'react';

import Footer                  from './components/Footer';
import Header                  from './components/Header';
import AboutUs                 from './pages/AboutUs';
import Cart                    from './pages/Cart';
import Delivery                from './pages/Delivery';
import HitsSales               from './pages/HitsSales';
import HomePage                from './pages/HomePage';
import HowToOrder              from './pages/HowToOrder';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/hitssales" element={<HitsSales />} />
        <Route path="/howtoorder" element={<HowToOrder />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
