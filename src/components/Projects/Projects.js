import React from 'react';

import weatherAppImage from '../../assets/img/projects/weather-app.png';
import phonebookImage from '../../assets/img/projects/phonebook.png';
import movieAppImage from '../../assets/img/projects/movie-app.png';

import styles from './Projects.module.css';

export default function Projects() {
    

    return (
        <section className={styles.Projects}>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <img className={styles.img} src={weatherAppImage} alt="weather-app" />
                    <h3 className={styles.title}>Weather app</h3>
                    <p className={styles.text}>This app for tracking weather in your and other city</p>
                    <div className={styles.link__container}>
                        <a href="https://kropivnyy.github.io/weather-app" target="_blank" rel="noopener noreferrer" className={styles.link}>Website</a>
                        <a href="https://github.com/victorbtgn/weather-app" target="_blank" rel="noopener noreferrer" className={styles.link}>Code</a>
                    </div>
                </li>
                
                <li className={styles.list__item}>
                    <img className={styles.img} src={phonebookImage} alt="weather-app" />
                    <h3 className={styles.title}>Phonebook</h3>
                    <p className={styles.text}>This app will help you write down all your contacts number</p>
                    <div className={styles.link__container}>
                        <a href="https://vmb-phonebook.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.link}>Website</a>
                        <a href="https://github.com/victorbtgn/goit-react-hw-08-phonebook" target="_blank" rel="noopener noreferrer" className={styles.link}>Code</a>
                    </div>
                </li>

                <li className={styles.list__item}>
                    <img className={styles.img} src={movieAppImage} alt="weather-app" />
                    <h3 className={styles.title}>Movie</h3>
                    <p className={styles.text}>This website will help you find more interesting films</p>
                    <div className={styles.link__container}>
                        <a href="https://vmb-movie.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.link}>Website</a>
                        <a href="https://github.com/victorbtgn/goit-react-hw-04-movies" target="_blank" rel="noopener noreferrer" className={styles.link}>Code</a>
                    </div>
                </li>
            </ul>
        </section>
    )
}