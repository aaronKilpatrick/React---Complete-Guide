import React from 'react';


// import Card from './components/UI/Card';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />

      <main>
        <Menu />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
