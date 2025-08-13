'use client'

import React, {ReactNode, useEffect, useRef, useState} from 'react';
import styles from './AnimationWrapper.module.css'; // Ensure you have the CSS file for animations
interface ZoomInWrapperProps {
    children: ReactNode;
    method?: 'zoom-in' | 'fade-in';
    className?: string;
}

const AnimationWrapper: React.FC<ZoomInWrapperProps> = ({children, className, method = 'zoom-in'}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimationActive(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.1}
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={
                (`${styles.animation} `) +
                `${className ? className + ' ' : ''}` +
                `animation-method-${method} ` +
                (animationActive ? styles.active : styles.inactive)
            }
        >
            {children}
        </div>
    );
};

export default AnimationWrapper;

