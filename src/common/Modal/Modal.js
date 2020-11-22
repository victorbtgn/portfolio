import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {


    useEffect(() => {
            const onKeydownEscape = ({ code }) => {
                if(code === 'Escape') onClose();
            }
            window.addEventListener('keydown', onKeydownEscape);
        return () => {
            window.removeEventListener('keydown', onKeydownEscape);
        }
    }, [onClose]);

    useEffect(() => {
        const onPressOverlay = evt => {
            if(evt.target.id === "modal") onClose()
        }
        window.addEventListener('click', onPressOverlay);
    return () => {
        window.removeEventListener('click', onPressOverlay);
    }
}, [onClose]);

    return createPortal(
                <div id="modal" className={styles.Modal__overlay}>
                    <div className={styles.Modal}>
                        {children}
                        <button type="button" onClick={onClose} className={styles.closeBtn}></button>
                    </div>
                </div>,
                modalRootRef
            )
}
