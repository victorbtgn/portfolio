import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { aboutRoute } from '../../helpers/routes';

import styles from './About.module.css';

export default function About() {
    return (
        <ScrollableAnchor id={aboutRoute}>
            <article className={styles.About}>
                <h2 className={styles.title}>Hey, I"m Viktor</h2>
                <div className={styles.img__container}></div>
                <p className={styles.text}>A web developer from Bila Tserkva, Ukraine.</p>
            </article>
        </ScrollableAnchor>
    )
}
