'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const RevealEffects = () => {
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.add('reveal-ready');

        const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
};

export default RevealEffects;
