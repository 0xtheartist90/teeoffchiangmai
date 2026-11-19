'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BrandLogo from '@/app/BrandLogo';
import MobileNavMenu from '@/app/MobileNavMenu';
import { CurrencySelector } from '@/app/currency';
import { holidayLink } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';

/** On the homepage the header floats transparently over the hero video until the visitor scrolls. */
const SiteHeader = ({ overlay = false }: { overlay?: boolean }) => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!overlay) return;
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [overlay]);

    const transparent = overlay && !scrolled;

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
                transparent
                    ? 'border-transparent bg-transparent'
                    : 'border-[#14382a]/8 bg-[rgba(248,245,238,0.92)] backdrop-blur-xl'
            }`}>
            <div className='mx-auto max-w-[90rem] px-5 py-3 sm:px-6 sm:py-4 lg:px-8'>
                <div className='relative flex items-center justify-center md:hidden'>
                    <div className='absolute right-0'>
                        <MobileNavMenu light={transparent} />
                    </div>
                    <Link href='/' aria-label='Tee Off Chiang Mai home' className='flex items-center'>
                        <BrandLogo size='sm' variant={transparent ? 'light' : 'dark'} />
                    </Link>
                </div>

                <div className='hidden grid-cols-[auto_1fr_auto] items-center gap-6 md:grid'>
                    <Link href='/' aria-label='Tee Off Chiang Mai home' className='flex items-center justify-self-start'>
                        <BrandLogo size='md' variant={transparent ? 'light' : 'dark'} />
                    </Link>

                    <nav className='flex items-center justify-center gap-4 xl:gap-7'>
                        {navLinks.map((link) => {
                            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`border-b pb-0.5 text-[0.66rem] font-semibold tracking-[0.14em] whitespace-nowrap uppercase transition xl:tracking-[0.2em] ${
                                        transparent
                                            ? `text-white/85 hover:text-white ${active ? 'border-[#e2c886]' : 'border-transparent'}`
                                            : `text-[#14382a]/70 hover:text-[#14382a] ${active ? 'border-[#c9a85a] text-[#14382a]' : 'border-transparent'}`
                                    }`}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className='flex items-center gap-3 justify-self-end'>
                        <CurrencySelector light={transparent} className='hidden lg:inline-flex' />
                        <Link
                            href={holidayLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`${transparent ? 'btn-lux-ghost-light' : 'btn-lux'} inline-flex items-center`}>
                            Plan my trip
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
