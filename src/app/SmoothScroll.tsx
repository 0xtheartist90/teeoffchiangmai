'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/** Lenis smooth scrolling for the whole site. Skipped when the visitor prefers reduced motion. */
const SmoothScroll = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.1,
            // in-page links (#packages, #about, FAQ groups) glide instead of jump; offset clears the sticky header
            anchors: { offset: -90 }
        });

        return () => lenis.destroy();
    }, []);

    // new page: start at the top
    useEffect(() => {
        if (!window.location.hash) window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default SmoothScroll;
