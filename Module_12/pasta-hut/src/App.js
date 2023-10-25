import React, { useState } from 'react';


// import Card from './components/UI/Card';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  }

  const closeCartHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <React.Fragment>
      <Header onOpenCart={openCartHandler} />
      <Banner />

      <main>
        <Menu />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
