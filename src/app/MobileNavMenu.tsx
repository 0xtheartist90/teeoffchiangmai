'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';

import { CurrencySelector } from '@/app/currency';
import { bookingLink } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';

const mobileLinks: { href: string; label: string; external?: boolean }[] = [
    ...navLinks,
    { href: bookingLink, label: 'Book on WhatsApp', external: true }
];

type MobileNavMenuProps = {
    menuAlign?: 'left' | 'right';
    light?: boolean;
};

const MobileNavMenu = ({ menuAlign = 'right', light = false }: MobileNavMenuProps) => {
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
                className={`flex size-10 items-center justify-center transition ${light ? 'text-white' : 'text-[#14382a]'} hover:text-[#c9a85a]`}>
                <Icon className='size-5' />
            </button>

            {isOpen ? (
                <div
                    id='mobile-site-menu'
                    className={`absolute top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-md border border-[#14382a]/10 bg-[#f8f5ee]/97 p-2 shadow-2xl backdrop-blur-xl ${
                        menuAlign === 'left' ? 'left-0' : 'right-0'
                    }`}>
                    <div className='flex items-center justify-between border-b border-[#14382a]/10 px-4 pt-2 pb-3'>
                        <span className='text-[0.62rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Currency</span>
                        <CurrencySelector />
                    </div>
                    <div className='mt-1 grid gap-1'>
                        {mobileLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsOpen(false)}
                                className={`rounded px-4 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition ${
                                    item.external
                                        ? 'mt-1 bg-[#14382a] text-center text-[#f6efe0] hover:bg-[#1f4c39]'
                                        : 'text-[#14382a] hover:bg-[#efe9dc]'
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
