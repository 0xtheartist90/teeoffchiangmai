import Link from 'next/link';

import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { bookingLink, golfCourses, holidayLink, holidayTiers } from '@/app/golf-data';
import { navLinks } from '@/app/site-nav';

const columnTitle = 'text-[0.62rem] font-semibold tracking-[0.28em] text-[#e2c886] uppercase';
const linkClass = 'text-sm text-white/70 transition hover:text-white';

const SiteFooter = () => {
    return (
        <footer className='relative overflow-hidden bg-[#0c241a] text-white'>
            <div className='h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,90,0.7),transparent)]' />

            {/* CTA strip */}
            <div className='mx-auto flex max-w-[90rem] flex-col gap-6 px-5 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
                <div className='flex items-center gap-6'>
                    <img
                        src='/images/brand/logo-stacked-light.webp'
                        alt='Tee Off Chiang Mai'
                        width={494}
                        height={400}
                        className='h-24 w-auto sm:h-28'
                    />
                    <p className='travel-display max-w-md text-3xl leading-tight sm:text-4xl'>
                        Your round, <span className='text-[#e2c886] italic'>arranged.</span>
                    </p>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <Link
                        href={holidayLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                        Plan my golf holiday
                        <ArrowUpRight className='size-3.5' />
                    </Link>
                    <Link
                        href={bookingLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-lux-ghost-light inline-flex items-center justify-center gap-2'>
                        Book a round
                    </Link>
                </div>
            </div>

            {/* Link columns */}
            <div className='mx-auto grid max-w-[90rem] gap-10 border-t border-white/10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
                <div>
                    <p className={columnTitle}>Explore</p>
                    <nav className='mt-5 grid gap-3'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={linkClass}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <p className={columnTitle}>Golf holidays</p>
                    <nav className='mt-5 grid gap-3'>
                        {holidayTiers.map((tier) => (
                            <Link key={tier.id} href='/golf-holidays#packages' className={linkClass}>
                                {tier.name} package
                            </Link>
                        ))}
                        <Link href='/golf-holidays#plan-your-week' className={linkClass}>
                            Plan your own week
                        </Link>
                    </nav>
                </div>

                <div>
                    <p className={columnTitle}>Courses</p>
                    <nav className='mt-5 grid gap-3'>
                        {golfCourses.map((course) => (
                            <Link key={course.slug} href={`/golf-tours#${course.slug}`} className={linkClass}>
                                {course.shortName}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <p className={columnTitle}>Contact</p>
                    <div className='mt-5 grid gap-4 text-sm text-white/70'>
                        <a
                            className='flex items-center gap-3 transition hover:text-white'
                            href={bookingLink}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <MessageCircle className='size-4 flex-none text-[#e2c886]' strokeWidth={1.5} />
                            WhatsApp
                        </a>
                        <a className='flex items-center gap-3 transition hover:text-white' href='tel:+66931246329'>
                            <Phone className='size-4 flex-none text-[#e2c886]' strokeWidth={1.5} />
                            +66 93 124 6329
                        </a>
                        <a
                            className='flex items-center gap-3 break-all transition hover:text-white'
                            href='mailto:travel@chiang-mai-driver.com'>
                            <Mail className='size-4 flex-none text-[#e2c886]' strokeWidth={1.5} />
                            travel@chiang-mai-driver.com
                        </a>
                        <p className='flex items-center gap-3'>
                            <MapPin className='size-4 flex-none text-[#e2c886]' strokeWidth={1.5} />
                            Chiang Mai, Thailand
                        </p>
                    </div>
                </div>
            </div>

            {/* Big wordmark */}
            <div aria-hidden='true' className='pointer-events-none select-none overflow-hidden px-5 sm:px-6 lg:px-8'>
                <p className='travel-display mx-auto max-w-[90rem] translate-y-[18%] text-center text-[min(12.5vw,9.4rem)] leading-[0.8] whitespace-nowrap text-white/[0.06]'>
                    Tee Off <span className='italic'>Chiang Mai</span>
                </p>
            </div>

            {/* Bottom bar */}
            <div className='relative border-t border-white/10'>
                <div className='mx-auto flex max-w-[90rem] flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:justify-between sm:px-6 lg:px-8'>
                    <p>© {new Date().getFullYear()} Tee Off Chiang Mai. Golf holidays and golf days in Northern Thailand.</p>
                    <p>Operated by NORTHBOUND TRAVEL CO., LTD. · From the team behind Chiang Mai Driver by May.</p>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
