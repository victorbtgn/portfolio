import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
    const [activeClass, setActiveClass] = useState(styles.Modal__overlay);
    const [isClick, setIsClick] = useState(false);

    const ligthCloseModal = useCallback(
        () => {
            setActiveClass(styles.close__modal)
            const timer = setTimeout(() => {
                onClose();
                clearTimeout(timer)
            }, 500)
        },
        [onClose],
    )

    useEffect(() => {
        if(isClick) {
            ligthCloseModal();
        }
    }, [ligthCloseModal, isClick])

    useEffect(() => {
        const onKeydownEscape = ({ code }) => {
            if(code === 'Escape') {
                ligthCloseModal();
            };
        }
            window.addEventListener('keydown', onKeydownEscape);
        return () => {
            window.removeEventListener('keydown', onKeydownEscape);
        }
    }, [ligthCloseModal]);

    return createPortal(
                <div id="modal" className={activeClass}>
                    <div className={styles.Modal}>
                        {children}
                        <button type="button" onClick={() => setIsClick(true)} className={styles.closeBtn}></button>
                    </div>
                </div>,
                modalRootRef
            )
}

