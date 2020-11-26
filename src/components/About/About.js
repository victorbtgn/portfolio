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
                <p className={styles.text}>I'm from Bila Tserkva, Ukraine. I'm looking for a position junior front-end developer. I want to find a family in which I can show all my skills and qualities as best I can and learn to become an even better developer. Ready to work well for best results. I strive to build working relationships based on trust and mutual respect. I adhere to the standards of conduct adopted by the company and the team.</p>
            </article>
        </ScrollableAnchor>
    )
}
