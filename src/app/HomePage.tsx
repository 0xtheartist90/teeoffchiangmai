'use client';

import Link from 'next/link';

import { ArrowRight, ArrowUpRight, CalendarCheck, CarFront, MessageCircle } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import RatingStars from '@/app/RatingStars';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { services } from '@/app/content';
import {
    bookingLink,
    formatThb,
    getHolidayPackage,
    golfCourses,
    holidayTiers
} from '@/app/golf-data';
import { beigeSection, patternedLight } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

/** Hero video (from the Birdiez site). MP4 first for Safari/iPhone, WebM as fallback. */
const heroVideo = { mp4: '/images/golf/hero.mp4', webm: '/images/golf/hero.webm' };
const heroPoster = '/images/golf/hero-poster.webp';

/** Marquee strip: course photos (approved by the clubs). */
const courseMarquee = [
    '/images/golf/alpine/cover.webp',
    '/images/golf/hang-dong/cover.webp',
    '/images/golf/summit-green-valley/palm-lined-fairway.webp',
    '/images/golf/lanna/cover.webp',
    '/images/golf/highlands/mountain-fairway.webp',
    '/images/golf/pimantip/cover.webp',
    '/images/golf/alpine/mountain-panorama.webp',
    '/images/golf/sand-creek/cover.webp',
    '/images/golf/summit-green-valley/water-hole.webp',
    '/images/golf/highlands/bunker-green.webp'
]

const shortSteps = [
    { title: 'Tell us your plan', text: 'Dates, golfers, hotel and courses.', icon: MessageCircle },
    { title: 'We arrange it', text: 'Tee times, transfers, carts, caddies or clubs.', icon: CalendarCheck },
    { title: 'We pick you up', text: 'Hotel to course, and back again.', icon: CarFront }
]

const HomePage = () => {

    return (
        <main id='top' className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader overlay />

            {/* 1. Hero */}
            <section className='relative isolate -mt-[73px] min-h-[100svh] overflow-hidden bg-[#0f2a1f] sm:-mt-[81px]'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='metadata'
                    poster={heroPoster}>
                    <source src={heroVideo.mp4} type='video/mp4' />
                    <source src={heroVideo.webm} type='video/webm' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,20,0.45)_0%,rgba(10,28,20,0.1)_40%,rgba(10,28,20,0.7)_100%)]' />

                <div className='relative mx-auto flex min-h-[100svh] max-w-6xl items-end px-5 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8'>
                    <div className='text-white'>
                        <h1 className='travel-display text-[clamp(2.1rem,9.2vw,5.75rem)] leading-[0.95] whitespace-nowrap'>
                            Play golf in <span className='text-[#e2c886] italic'>Chiang Mai</span>
                        </h1>
                        <p className='mt-5 text-base text-white/80 sm:text-lg'>
                            Golf holidays with tee times, transfers and sightseeing — arranged for you.
                        </p>
                        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                            <Link href='/golf-holidays' className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                                Explore Golf Holidays
                                <ArrowRight className='size-3.5' />
                            </Link>
                            <Link
                                href={bookingLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-lux-ghost-light inline-flex items-center justify-center gap-2'>
                                Book on WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Golf holiday packages (main product) */}
            <section className='relative py-20 sm:py-28' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
                        <div className='max-w-2xl'>
                            <h2 className='travel-display text-[2.6rem] leading-tight text-[#14382a] sm:text-[3.6rem]'>
                                Golf holidays <span className='italic'>in Northern Thailand</span>
                            </h2>
                            <p className='mt-4 text-base text-slate-600'>
                                A week of golf with sightseeing days in between. Choose 2, 3 or 4 rounds.
                            </p>
                        </div>
                        <Link href='/golf-holidays#packages' className='btn-lux-ghost inline-flex w-fit items-center gap-2'>
                            All packages
                            <ArrowRight className='size-3.5' />
                        </Link>
                    </div>

                    <div className='mt-12 grid gap-5 md:grid-cols-3'>
                        {holidayTiers.map((tier, index) => {
                            const pkg = getHolidayPackage(tier.id, 3);
                            const cover = pkg.courses[0]?.image;

                            return (
                                <Link
                                    key={tier.id}
                                    href='/golf-holidays#packages'
                                    data-reveal='card'
                                    style={{ transitionDelay: `${index * 90}ms` }}
                                    className='group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-md p-7 text-white'>
                                    <CourseImage
                                        src={cover}
                                        alt={tier.name}
                                        className='absolute inset-0 -z-10'
                                        imgClassName='transition duration-700 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.05)_25%,rgba(10,28,20,0.9)_100%)]' />
                                    <h3 className='travel-display text-4xl'>{tier.name}</h3>
                                    <p className='mt-2 text-sm text-white/75'>{pkg.courses.map((c) => c.shortName).join(' · ')}</p>
                                    <div className='mt-5 flex items-end justify-between border-t border-white/25 pt-4'>
                                        <p className='text-sm text-white/80'>
                                            3 rounds from
                                            <span className='travel-display block text-3xl text-white'>
                                                {formatThb(pkg.golfFromPerGolfer4)}
                                            </span>
                                        </p>
                                        <span className='flex size-10 items-center justify-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-[#14382a]'>
                                            <ArrowUpRight className='size-4' />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className='mt-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left'>
                        <p className='text-xs text-slate-500'>Golf price per golfer, group of 4. Also 2× or 4× golf per week.</p>
                        <Link
                            href='/golf-holidays#plan-your-week'
                            className='inline-flex items-center gap-2 border-b border-[#c9a85a]/70 pb-1 text-[0.7rem] font-semibold tracking-[0.2em] text-[#14382a] uppercase'>
                            Or plan your own week
                            <ArrowRight className='size-3.5' />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. Course photo strip */}
            <section aria-label='Golf course photos' className='overflow-hidden bg-[#0f2a1f]'>
                <div className='chiang-mai-marquee flex w-max'>
                    {[...courseMarquee, ...courseMarquee].map((image, index) => (
                        <img
                            key={`${image}-${index}`}
                            alt=''
                            aria-hidden='true'
                            className='chiang-mai-marquee-image block h-[190px] w-[280px] flex-none object-cover sm:h-[240px] sm:w-[360px]'
                            src={image}
                        />
                    ))}
                </div>
            </section>

            {/* 3. How it works */}
            <section className='relative border-t border-[#14382a]/8 py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_2.2fr] lg:items-center lg:px-8'>
                    <h2 className='travel-display text-[2.2rem] leading-tight text-[#14382a] sm:text-[2.6rem]'>
                        Three steps <span className='italic'>to the first tee</span>
                    </h2>
                    <ol className='grid gap-8 sm:grid-cols-3 sm:gap-6'>
                        {shortSteps.map(({ title, text, icon: Icon }, index) => (
                            <li
                                key={title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 100}ms` }}
                                className='flex items-start gap-4'>
                                <span className='lux-icon flex-none'>
                                    <Icon className='size-[1.1rem]' strokeWidth={1.5} />
                                </span>
                                <div>
                                    <h3 className='travel-display text-xl leading-tight text-[#14382a]'>
                                        {title}
                                    </h3>
                                    <p className='mt-1 text-sm text-slate-600'>{text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 4. Why choose us: photo split */}
            <section className='relative grid bg-[#10291f] text-white lg:grid-cols-2'>
                <div className='relative min-h-[360px] sm:min-h-[460px] lg:min-h-[640px]'>
                    <img
                        src='/images/golf/alpine/lakeside-green.webp'
                        alt='Alpine Golf Resort, Chiang Mai'
                        className='absolute inset-0 h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(16,41,31,0)_60%,rgba(16,41,31,0.35)_100%)]' />
                </div>
                <div className='flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-20'>
                    <div data-reveal='text-right' className='max-w-lg'>
                        <h2 className='travel-display text-[2.6rem] leading-[1.05] sm:text-[3.4rem]'>
                            We handle the booking. <span className='text-[#e2c886] italic'>You play the round.</span>
                        </h2>
                        <p className='mt-5 text-base text-white/70'>
                            Five years of private tours in Northern Thailand — now for golfers.
                        </p>
                        <ul className='mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2'>
                            {services.map(({ title, icon: Icon }) => (
                                <li key={title} className='flex items-center gap-4'>
                                    <span className='flex size-11 flex-none items-center justify-center rounded-full border border-[#c9a85a]/60 text-[#e2c886]'>
                                        <Icon className='size-[1.1rem]' strokeWidth={1.5} />
                                    </span>
                                    <span className='travel-display text-xl leading-snug'>{title}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href='/why-choose-us'
                            className='mt-10 inline-flex items-center gap-2 border-b border-[#e2c886]/60 pb-1 text-[0.7rem] font-semibold tracking-[0.2em] text-white/85 uppercase transition hover:border-white hover:text-white'>
                            About us
                            <ArrowRight className='size-3.5' />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. The courses (secondary) */}
            <section className='relative border-t border-[#14382a]/8 py-20 sm:py-24' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
                        <div>
                            <h2 className='travel-display text-[2.4rem] leading-tight text-[#14382a] sm:text-5xl'>
                                The courses <span className='italic'>in your packages</span>
                            </h2>
                            <p className='mt-3 text-base text-slate-600'>Only here for one round? Book a single golf day.</p>
                        </div>
                        <Link href='/golf-tours' className='btn-lux-ghost inline-flex w-fit items-center gap-2'>
                            Golf days
                            <ArrowRight className='size-3.5' />
                        </Link>
                    </div>
                    <div className='-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:grid lg:grid-cols-7 lg:gap-3 lg:overflow-visible'>
                        {golfCourses.map((course) => (
                            <Link
                                key={course.slug}
                                href={`/golf-tours#${course.slug}`}
                                className='group relative isolate flex aspect-[3/4] w-40 flex-none snap-start flex-col justify-end overflow-hidden rounded-md p-3 text-white lg:w-auto'>
                                <CourseImage
                                    src={course.image}
                                    alt={course.name}
                                    className='absolute inset-0 -z-10'
                                    imgClassName='transition duration-700 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0)_40%,rgba(10,28,20,0.85)_100%)]' />
                                <RatingStars rating={course.rating} className='text-[#e2c886] [&_svg]:size-3' />
                                <p className='travel-display mt-1 text-lg leading-tight'>{course.shortName}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section
                className='relative isolate overflow-hidden py-24 sm:py-32'
                style={{ backgroundImage: "url('/images/golf/alpine/cover.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 -z-10 bg-[#0f2a1f]/78' />
                <div className='mx-auto max-w-3xl px-5 sm:px-6 lg:px-8'>
                    <div data-reveal='soft-scale' className='text-center text-white'>
                        <h2 className='travel-display text-[2.8rem] leading-tight sm:text-7xl'>
                            Ready to <span className='text-[#e2c886] italic'>tee off?</span>
                        </h2>
                        <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row'>
                            <Button asChild size='lg' className='btn-lux-gold'>
                                <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                    Book on WhatsApp
                                    <ArrowRight className='size-3.5' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='btn-lux-ghost-light'>
                                <Link href='/golf-holidays'>Explore Golf Holidays</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default HomePage;
