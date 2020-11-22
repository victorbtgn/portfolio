import React from 'react';

import styles from './Banner.module.css';

export default function Banner({scroll}) {
    return (
        <section className={scroll ? styles.Banner : styles.cleanBanner}>
            <div className={styles.container}>
                <h2 className={styles.title}>Viktor Batyhin</h2>
                <span className={styles.subTitle}>Front-end Developer</span>
            </div>
        </section>
    )
};
