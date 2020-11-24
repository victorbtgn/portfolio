import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { bannerRoute } from '../../helpers/routes';

import styles from './Banner.module.css';

export default function Banner({scroll}) {

    return (
        <ScrollableAnchor id={bannerRoute} >
            <section className={scroll ? styles.Banner : styles.cleanBanner}>
                <div className={styles.banner__bg}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Viktor Batyhin</h2>
                        <span className={styles.subTitle}>Front-end Developer</span>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
};
