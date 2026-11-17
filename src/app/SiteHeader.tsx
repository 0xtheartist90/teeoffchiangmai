'use client';

import Link from 'next/link';

import BrandLogo from '@/app/BrandLogo';
import MobileNavMenu from '@/app/MobileNavMenu';
import { bookingLink } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';
import { Button } from '@/registry/new-york-v4/ui/button';

const SiteHeader = () => {
    return (
        <header className='sticky top-0 z-50 border-b border-[#e8dcc8]/80 bg-[rgba(250,246,239,0.9)] backdrop-blur-xl'>
            <div className='mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8'>
                <div className='relative flex items-center justify-center md:hidden'>
                    <div className='absolute right-0'>
                        <MobileNavMenu />
                    </div>
                    <Link href='/' aria-label='Tee Off Chiang Mai home' className='flex items-center'>
                        <BrandLogo size='sm' />
                    </Link>
                </div>

                <div className='hidden grid-cols-[auto_1fr_auto] items-center gap-6 md:grid'>
                    <Link href='/' aria-label='Tee Off Chiang Mai home' className='flex items-center justify-self-start'>
                        <BrandLogo size='md' />
                    </Link>

                    <nav className='flex items-center justify-center gap-5 text-sm font-medium text-slate-600 lg:gap-6'>
                        {navLinks.map((link) => (
                            <Link key={link.href} className='transition hover:text-[#14382a]' href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <Button
                        asChild
                        className='justify-self-end rounded-full border border-[#c9a85a] bg-[#2f7a4b] px-5 text-white shadow-sm hover:bg-[#276640]'>
                        <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                            Book on WhatsApp
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
