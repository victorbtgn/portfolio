import React, { useState } from 'react';
import styles from './MenuBtn.module.css';

export default function MenuBtn () {
    const [activeClass, setActiveClass] = useState(false);

    const handleChange = evt => {
        evt.preventDefault();

        setActiveClass(!activeClass);
    }

    return (
        <div className={!activeClass ? styles.MenuBtn__container : styles.MenuBtn__container__active} onClick={handleChange}>
            <div className={styles.MenuBtn}></div>
        </div>
    )
}


