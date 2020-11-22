import React, { useState, useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

import styles from './assets/styles/App.module.css';

const App = () => {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => { if(window.scrollY > 0) setScroll(true) };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className={styles.App}>
    <AppBar scroll={scroll} />

    <MainLayout>
      <Banner scroll={scroll} />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </MainLayout>
  </div>
)};

export default App;
