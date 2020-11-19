import React from 'react';

import styles from './About.module.css';

export default function About() {
    

    return (
        <article className={styles.About}>
            <h2 className={styles.title}>Hey, I"m Viktor</h2>
            <div className={styles.img__container}></div>
            <p className={styles.text}>A web developer from Bila Tserkva, Ukraine.</p>
        </article>
    )
}
