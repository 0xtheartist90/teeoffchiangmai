'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';

import { bookingLink } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';

const mobileLinks: { href: string; label: string; external?: boolean }[] = [
    ...navLinks,
    { href: bookingLink, label: 'Book on WhatsApp', external: true }
];

type MobileNavMenuProps = {
    menuAlign?: 'left' | 'right';
};

const MobileNavMenu = ({ menuAlign = 'right' }: MobileNavMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = isOpen ? X : Menu;

    return (
        <div className='relative'>
            <button
                type='button'
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls='mobile-site-menu'
                onClick={() => setIsOpen((current) => !current)}
                className='flex size-10 items-center justify-center text-[#173247] transition hover:text-[#a1612a]'>
                <Icon className='size-5' />
            </button>

            {isOpen ? (
                <div
                    id='mobile-site-menu'
                    className={`absolute top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-lg border border-[#dfcfb4] bg-[#fffaf3]/96 p-2 shadow-2xl backdrop-blur-xl ${
                        menuAlign === 'left' ? 'left-0' : 'right-0'
                    }`}>
                    <div className='grid gap-1'>
                        {mobileLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsOpen(false)}
                                className={`rounded-md px-4 py-3 text-sm font-semibold transition ${
                                    item.external
                                        ? 'bg-[#c97932] text-white hover:bg-[#b46c2e]'
                                        : 'text-[#173247] hover:bg-[#f2dfc4] hover:text-[#a1612a]'
                                }`}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default MobileNavMenu;
