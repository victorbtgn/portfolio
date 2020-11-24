import React from 'react';

import {
    aboutRoute,
    projectsRoute,
    summaryRoute,
    contactsRoute
} from '../../helpers/routes';

import styles from './NavBar.module.css';

export default function NavBar({ handleChange, isVisible, mobile }) {
    return (
        <>
            <div className={mobile && (isVisible ? styles.navbar__overlay : styles.navbar__overlay__close)} onClick={handleChange} ></div>
            <ul className={mobile ? (isVisible ? styles.NavBar : styles.close__NavBar) : styles.NavBar}>
                <li className={styles.list__item}>
                    <a href={`#${aboutRoute}`} className={styles.link}>About me</a>
                </li>

                <li className={styles.list__item}>
                    <a href={`#${projectsRoute}`} className={styles.link}>Projects</a>
                </li>

                <li className={styles.list__item}>
                    <a href={`#${summaryRoute}`} className={styles.link}>Summary</a>
                </li>

                <li className={styles.list__item}>
                    <a href={`#${contactsRoute}`} className={styles.link}>Contacts</a>
                </li>
            </ul>
            </>
    );
};
