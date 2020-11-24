import React from 'react';

import ToggleContent from '../../common/ToggleContent';
import Modal from '../../common/Modal';

import certificateImageMin from '../../assets/img/resume/Viktor Batyhin_fs_6168_Certificate@0,25x.jpg';
import appendixImage1Min from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_01@0,25x.jpg';
import appendixImage2Min from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_02@0,25x.jpg';
import certificateImage from '../../assets/img/resume/Viktor Batyhin_fs_6168_Certificate.jpg';
import appendixImage1 from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_01.jpg';
import appendixImage2 from '../../assets/img/resume/Viktor Batyhin_fs_6168_Appendix_02.jpg';
import summaryImageMin from '../../assets/img/resume/summary@0,25x.jpg';
import summaryImage from '../../assets/img/resume/summary.jpg';
import summaryPDF from '../../assets/img/resume/summary.pdf';

import ScrollableAnchor from 'react-scrollable-anchor';
import { summaryRoute } from '../../helpers/routes';

import styles from './Resume.module.css';

export default function Resume() {
    

    return (
        <ScrollableAnchor id={summaryRoute}>
            <section className={styles.Resume}>
                <h3 className={styles.title}>Resume</h3>

                <div className={styles.summary__container}>
                <img src={summaryImageMin} className={styles.img__summary} alt="summary" />
                <div className={styles.summary__overlay}>
                    <ToggleContent
                        toggle={show => 
                            <button onClick={show} className={styles.show__btn}>Show</button>
                        }
                        content={hide => (
                            <Modal onClose={hide}>
                                <img src={summaryImage} className={styles.img__modal} alt="summary" />
                            </Modal>
                        )}
                    />
                    <a href={summaryPDF} download="viktor_batyhin_summary.pdf" className={styles.download__link} >Download</a>
                </div>
                </div>


                <h3 className={styles.title}>Certificate</h3>
                <div className={styles.certificate_container}>
                        <ToggleContent
                            toggle={show =>
                                    <img src={certificateImageMin} onClick={show} className={styles.img} alt="certificate" />
                            }
                            content={hide => (
                                <Modal onClose={hide}>
                                    <img src={certificateImage} className={styles.img__modal} alt="certificate" />
                                </Modal>
                            )}
                        />
                        
                        <ToggleContent
                            toggle={show =>
                                    <img src={appendixImage1Min} onClick={show} className={styles.img} alt="certificate" />
                            }
                            content={hide => (
                                <Modal onClose={hide}>
                                    <img src={appendixImage1} className={styles.img__modal} alt="certificate" />
                                </Modal>
                            )}
                        />
                        
                        <ToggleContent
                            toggle={show =>
                                    <img src={appendixImage2Min} onClick={show} className={styles.img} alt="certificate" />
                            }
                            content={hide => (
                                <Modal onClose={hide}>
                                    <img src={appendixImage2} className={styles.img__modal} alt="certificate" />
                                </Modal>
                            )}
                        />
                </div>
            </section>
        </ScrollableAnchor>
    )
}
