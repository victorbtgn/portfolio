import React from 'react';

import { ReactComponent as GithubIcon } from '../../assets/img/icon/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/img/icon/linkedin.svg';
import { ReactComponent as TelegramIcon } from '../../assets/img/icon/telegram.svg';

import styles from './Footer.module.css';

export default function Footer() {
    

    return (
        <footer className={styles.Footer}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.contacts__container}>
                <div className={styles.contacts__icon}>
                    <a href="https://github.com/victorbtgn" className={styles.contacts__icon__link} target="_blank" rel="noopener noreferrer" >
                        <GithubIcon className={styles.svg__icon} />
                    </a>
                
                    <a href="https://www.linkedin.com/in/victor-batigin" className={styles.contacts__icon__link} target="_blank" rel="noopener noreferrer" >
                        <LinkedinIcon className={styles.svg__icon} />
                    </a>

                    <a href="https://t.me/victor_btgn" className={styles.contacts__icon__link} target="_blank" rel="noopener noreferrer" >
                        <TelegramIcon className={styles.svg__icon} />
                    </a>
                </div>

                <div className={styles.contacts__data}>
                    <a href="tel:+380637813676" className={styles.contacts__data__phone} data-text="+38(063)7813676" >+38(063)7813676</a>
                    <a href="mailto:victor.batigin@ukr.net" className={styles.contacts__data__email}>E-mail: victor.batigin@ukr.net</a>
                </div>
            </div>
        </footer>
    )
}
