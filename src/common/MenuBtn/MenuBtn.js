import React, { useState } from 'react';
import NavBar from '../../components/Navigation/NavBar';

import styles from './MenuBtn.module.css';

export default function MenuBtn () {
    const [activeClass, setActiveClass] = useState(false);

    const handleChange = evt => {
        evt.preventDefault();
        setActiveClass(!activeClass);
    }

    return (
        <>
            <button type="button" onClick={handleChange} className={activeClass ? styles.MenuBtn__container__active : styles.MenuBtn__container}>
            <div className={styles.MenuBtn}></div>
            </button>
            {activeClass && <NavBar />}
        </>
    )
}
