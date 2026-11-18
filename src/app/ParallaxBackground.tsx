'use client';

import { useEffect, useRef } from 'react';

/**
 * Full-bleed background photo that moves slower than the page (parallax).
 * Works on mobile too (unlike background-attachment: fixed). Place inside a `relative isolate overflow-hidden` section.
 */
const ParallaxBackground = ({ src, strength = 0.2 }: { src: string; strength?: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        const section = el?.parentElement;
        if (!el || !section) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const update = () => {
            const rect = section.getBoundingClientRect();
            // -1 when the section enters from below, +1 when it leaves at the top
            const raw = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / (window.innerHeight / 2 + rect.height / 2);
            const progress = Math.max(-1, Math.min(1, raw));
            // the layer overhangs the section by 25% top and bottom, so stay within that
            el.style.transform = `translate3d(0, ${progress * strength * rect.height}px, 0)`;
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [strength]);

    return (
        <div
            ref={ref}
            aria-hidden='true'
            className='absolute inset-x-0 -top-[25%] -bottom-[25%] -z-20 bg-cover bg-center will-change-transform'
            style={{ backgroundImage: `url('${src}')` }}
        />
    );
};

export default ParallaxBackground;
