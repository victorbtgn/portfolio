import React from 'react';
import Title from '../Title';

import styles from './AppBar.module.css';

export default function AppBarView ({scroll}) {
  return (
  <header className={styles.AppBar}>
    <Title scroll={scroll} />
    {<div className={scroll ? styles.pointer__leave : styles.pointer}></div>}
  </header>
  )
};
