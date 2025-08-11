'use client';

import React, {useEffect, useState} from 'react';
import styles from './NavReturn.module.css';

function NavReturn({children}: { children: React.ReactNode }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <button
            onClick={scrollToTop}
            className={styles.navReturnButton + (visible ? ' ' + styles.visible : '')}
            aria-label="Return to top"
        >
            {children}
        </button>
    );
}

export default NavReturn;
