import React from 'react';

import MainLayout from './layouts/MainLayout';
import AppBar from './components/AppBar';
import About from './components/About';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer from './components/Footer/Footer';

import styles from './assets/styles/App.module.css';

const App = () => (
  <div className={styles.App}>
    <AppBar />

    <MainLayout>
      <Banner />
      <About />
      <Projects />
      <Footer />
    </MainLayout>    
  </div>
);

export default App;
