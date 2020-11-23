import React from 'react';

import styles from './Projects.module.css';

export default function ProjectItem({ image, title, description, webSiteLink, codeLink }) {
    return (<li className={styles.list__item}>
                <img className={styles.img} src={image} alt="weather-app" />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{description}</p>
                <div className={styles.link__container}>
                    <a href={webSiteLink} target="_blank" rel="noopener noreferrer" className={styles.link}>Website</a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>Code</a>
                </div>
            </li>)
}

