import Link from 'next/link';

import { Mail, MessageCircle, Phone } from 'lucide-react';

import BrandLogo from '@/app/BrandLogo';
import { bookingLink } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';

const SiteFooter = () => {
    return (
        <footer className='relative bg-[#0f2e22] py-10 text-white sm:py-12'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.1fr_0.6fr_0.9fr] lg:items-start'>
                    <div>
                        <BrandLogo variant='light' size='md' />
                        <h2 className='travel-display mt-4 max-w-sm text-lg leading-snug text-white sm:text-xl'>
                            Tee times, green fees and private hotel transfers. All you need to focus on is your 18 holes.
                        </h2>
                        <p className='mt-3 text-sm text-white/60'>From the team behind Chiang Mai Driver.</p>
                    </div>

                    <div>
                        <p className='text-sm font-semibold tracking-[0.18em] text-[#e4c98a] uppercase'>Explore</p>
                        <nav className='mt-3 grid gap-2 text-sm text-white/78'>
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className='transition hover:text-white'>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className='text-sm font-semibold tracking-[0.18em] text-[#e4c98a] uppercase'>Contact</p>
                        <div className='mt-3 grid gap-3 text-sm text-white/78'>
                            <a
                                className='flex items-center gap-3 transition hover:text-white'
                                href={bookingLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='flex size-8 items-center justify-center rounded-md bg-white/10 text-[#e4c98a]'>
                                    <MessageCircle className='size-4' />
                                </span>
                                <span>WhatsApp +66 93 124 6329</span>
                            </a>
                            <a className='flex items-center gap-3 transition hover:text-white' href='tel:+66931246329'>
                                <span className='flex size-8 items-center justify-center rounded-md bg-white/10 text-[#e4c98a]'>
                                    <Phone className='size-4' />
                                </span>
                                <span>+66 93 124 6329</span>
                            </a>
                            <a
                                className='flex items-center gap-3 transition hover:text-white'
                                href='mailto:travel@chiang-mai-driver.com'>
                                <span className='flex size-8 items-center justify-center rounded-md bg-white/10 text-[#e4c98a]'>
                                    <Mail className='size-4' />
                                </span>
                                <span>travel@chiang-mai-driver.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='mt-10 border-t border-white/10 pt-6 text-xs text-white/50'>
                    © {new Date().getFullYear()} Tee Off Chiang Mai. Golf tours in Chiang Mai and Northern Thailand.
                </p>
            </div>
        </footer>
    );
};

export default SiteFooter;
