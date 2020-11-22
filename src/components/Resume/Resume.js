import React from 'react';

import ToggleContent from '../../common/ToggleContent';
import Modal from '../../common/Modal';

import certificateImage from '../../assets/img/resume/Viktor Batyhin_fs_6168_Certificate.jpg';
import appendixImage1 from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_01.jpg';
import appendixImage2 from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_02.jpg';
import summaryImage from '../../assets/img/resume/summary.jpg'

import styles from './Resume.module.css';

export default function Resume() {
    

    return (
        <section className={styles.Resume}>
            <h3 className={styles.title}>Resume</h3>
            <ToggleContent
                        toggle={show => 
                            <img src={summaryImage} onClick={show} className={styles.img__summary} alt="summary" />
                        }
                        content={hide => (
                            <Modal onClose={hide}>
                                <img src={summaryImage} className={styles.img__modal} alt="summary" />
                            </Modal>
                        )}
                    />

            <h3 className={styles.title}>Certificate</h3>
            <div className={styles.certificate_container}>
                <div className={styles.certificate}>
                    <ToggleContent
                        toggle={show => 
                            <img src={certificateImage} onClick={show} className={styles.img} alt="certificate" />
                        }
                        content={hide => (
                            <Modal onClose={hide}>
                                <img src={certificateImage} className={styles.img__modal} alt="certificate" />
                            </Modal>
                        )}
                    />
                </div>

                <div className={styles.certificate}>
                    <ToggleContent
                        toggle={show => 
                            <img src={appendixImage1} onClick={show} className={styles.img} alt="certificate" />
                        }
                        content={hide => (
                            <Modal onClose={hide}>
                                <img src={appendixImage1} className={styles.img__modal} alt="certificate" />
                            </Modal>
                        )}
                    />
                </div>
                
                <div className={styles.certificate}>
                    <ToggleContent
                        toggle={show =>
                            <img src={appendixImage2} onClick={show} className={styles.img} alt="certificate" />
                        }
                        content={hide => (
                            <Modal onClose={hide}>
                                <img src={appendixImage2} className={styles.img__modal} alt="certificate" />
                            </Modal>
                        )}
                    />
                </div>
            </div>
        </section>
    )
}

