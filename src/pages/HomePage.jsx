import React    from 'react';

import Header   from '../components/Header';
import Products from '../components/Products';
import Slider   from '../components/Slider';

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
    </div>

  );
}

export default Home;