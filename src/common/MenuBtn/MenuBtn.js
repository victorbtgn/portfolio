import React, { useState } from 'react';
import NavBar from '../../components/Navigation/NavBar';

import styles from './MenuBtn.module.css';

export default function MenuBtn ({ mobile }) {
    const [activeClass, setActiveClass] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleChange = () => {
        if(activeClass) {
            setIsVisible(false)
            const timer = setTimeout(() => {
                setActiveClass(!activeClass)
                clearTimeout(timer)
            }, 300);
            return;
        }
        setIsVisible(true);
        setActiveClass(!activeClass);
    }

    return (
        <>
            <button type="button" onClick={handleChange} className={isVisible ? styles.MenuBtn__container__active : styles.MenuBtn__container}>
            <div className={styles.MenuBtn}></div>
            </button>
            {activeClass && <NavBar isVisible={isVisible} mobile={mobile} />}
        </>
    )
}
