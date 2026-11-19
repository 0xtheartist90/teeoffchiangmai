import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight, BedDouble, CarFront, Flag, MapPinned } from 'lucide-react';

import PageHero from '@/app/PageHero';
import ParallaxBackground from '@/app/ParallaxBackground';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import HolidayPackages from '@/app/golf-holidays/HolidayPackages';
import WeekPlanner from '@/app/golf-holidays/WeekPlanner';
import { formatThb, holidayLink, sightseeingTrips } from '@/app/golf-data';
import { beigeSection, patternedLight } from '@/app/section-backgrounds';
import { Price } from '@/app/currency';

export const metadata: Metadata = {
    title: 'Golf Holidays | Tee Off Chiang Mai',
    description:
        'One- and two-week golf holidays in Northern Thailand. Choose a package or plan your own week: tee times, private transport, overnight stays and sightseeing arranged for your group.'
};

const included = [
    { title: 'Tee times', text: 'Chiang Mai & Chiang Rai courses', icon: Flag },
    { title: 'Private transport', text: 'With space for golf bags', icon: CarFront },
    { title: 'Overnight stays', text: 'Where your route needs them', icon: BedDouble },
    { title: 'Sightseeing', text: 'Planned around your rounds', icon: MapPinned }
];

const GolfHolidaysPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />

            <PageHero
                tall
                title={
                    <>
                        Golf holidays <span className='text-[#e2c886] italic'>in Northern Thailand</span>
                    </>
                }
                subtitle='A week of golf in the mountains, with days out in between.'
                image='/images/golf/highlands/cover.webp'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <Link href='#packages' className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                        See packages
                        <ArrowRight className='size-3.5' />
                    </Link>
                    <Link href='#plan-your-week' className='btn-lux-ghost-light inline-flex items-center justify-center gap-2'>
                        Plan your own week
                    </Link>
                </div>
            </PageHero>

            {/* What's included */}
            <section className='leaf-overlay relative border-b border-[#14382a]/8 py-10 sm:py-12' style={patternedLight}>
                <ul className='mx-auto grid max-w-6xl gap-x-6 gap-y-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
                    {included.map(({ title, text, icon: Icon }) => (
                        <li key={title} className='flex items-center gap-4'>
                            <span className='lux-icon flex-none'>
                                <Icon className='size-[1.1rem]' strokeWidth={1.5} />
                            </span>
                            <div>
                                <p className='travel-display text-xl leading-tight text-[#14382a]'>{title}</p>
                                <p className='mt-0.5 text-xs text-slate-500'>{text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Packages */}
            <section id='packages' className='leaf-overlay relative scroll-mt-20 py-20 sm:py-24' style={beigeSection}>
                <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>
                    <h2 className='travel-display mb-10 text-center text-[2.6rem] leading-tight text-[#14382a] sm:text-[3.4rem]'>
                        Choose <span className='italic'>your week of golf</span>
                    </h2>
                    <HolidayPackages />
                </div>
            </section>

            {/* Custom week */}
            <section id='plan-your-week' className='relative isolate scroll-mt-20 overflow-hidden py-20 sm:py-28'>
                <ParallaxBackground src='/images/golf/summit-green-valley/aerial-clubhouse.webp' />
                <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.82)_0%,rgba(10,28,20,0.7)_40%,rgba(10,28,20,0.88)_100%)]' />
                <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>
                    <div className='mx-auto mb-10 max-w-2xl text-center text-white'>
                        <h2 className='travel-display text-[2.6rem] leading-tight sm:text-[3.4rem]'>
                            Or plan <span className='text-[#e2c886] italic'>your own week</span>
                        </h2>
                        <p className='mt-3 text-base text-white/75'>Choose a course or a day off for each day.</p>
                    </div>
                    <WeekPlanner />
                </div>
            </section>

            {/* Days off */}
            <section className='relative bg-[#10291f] py-20 text-white sm:py-24'>
                <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>
                    <h2 className='travel-display text-[2.6rem] leading-tight sm:text-[3.4rem]'>
                        Between <span className='text-[#e2c886] italic'>rounds</span>
                    </h2>
                    <p className='mt-3 text-base text-white/70'>Private day trips with our own drivers — price per car for your group.</p>
                    <div className='mt-10 grid gap-5 md:grid-cols-3'>
                        {sightseeingTrips.slice(0, 3).map((item, index) => (
                            <article
                                key={item.id}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 90}ms` }}
                                className='group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-md p-6'>
                                <img
                                    alt={item.name}
                                    src={item.image}
                                    className='absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0)_40%,rgba(10,28,20,0.85)_100%)]' />
                                <h3 className='travel-display text-3xl'>{item.name}</h3>
                                <p className='mt-2 text-sm text-white/75'>{item.text}</p>
                                <p className='mt-4 border-t border-white/25 pt-3 text-sm text-white/80'>
                                    From <span className='travel-display text-2xl text-[#e2c886]'><Price thb={item.price} /></span> per car
                                </p>
                            </article>
                        ))}
                    </div>
                    <div className='mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        {sightseeingTrips.slice(3).map((item, index) => (
                            <article
                                key={item.id}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 90}ms` }}
                                className='group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-md p-5'>
                                <img
                                    alt={item.name}
                                    src={item.image}
                                    className='absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.15)_0%,rgba(10,28,20,0.9)_75%)]' />
                                <h3 className='travel-display text-2xl leading-tight'>{item.name}</h3>
                                <p className='mt-1 text-xs text-white/75'>{item.text}</p>
                                <p className='mt-3 text-xs text-white/80'>
                                    From <span className='travel-display text-xl text-[#e2c886]'><Price thb={item.price} /></span> per car
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section
                className='relative isolate overflow-hidden py-24 sm:py-32'
                style={{ backgroundImage: "url('/images/golf/highlands/sunrise.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 -z-10 bg-[#0f2a1f]/70' />
                <div className='mx-auto max-w-3xl px-5 text-center text-white sm:px-6'>
                    <h2 className='travel-display text-[2.6rem] leading-tight sm:text-6xl'>
                        Two weeks? Bigger group? <span className='text-[#e2c886] italic'>We’ll plan it.</span>
                    </h2>
                    <Link
                        href={holidayLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-lux-gold mt-9 inline-flex items-center justify-center gap-2'>
                        Plan my golf holiday
                        <ArrowUpRight className='size-3.5' />
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default GolfHolidaysPage;
