'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ArrowRight, ChevronDown, Flag, Footprints, Target } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import PriceTable from '@/app/PriceTable';
import RatingStars from '@/app/RatingStars';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { faqs, services, sightseeing, steps, whyIntro } from '@/app/content';
import { bookingLink, formatLeadPrice, getCourseEnquiryLink, golfCourses, holidayLink } from '@/app/golf-data';
import { beigeSection, mountainSection, patternedLight } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

/**
 * Hero media. Drop the drone clip and still into /public/images/golf/ with these names.
 * Until then the poster falls back to the mountain photo.
 */
const heroVideo = { mp4: '/images/golf/hero-drone.mp4', webm: '/images/golf/hero-drone.webm' };
const heroStill = '/images/how-it-works.webp';

const holidayMarquee = [
    '/images/holidays/doi-inthanon.webp',
    '/images/marquee/pexels-quintingellar-8258340.webp',
    '/images/holidays/sticky-waterfall.webp',
    '/images/marquee/pexels-jean-papillon-28600264.webp',
    '/images/holidays/white-temple.webp',
    '/images/marquee/pexels-vishalcross-37250801.webp'
];

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(golfCourses.length - 1);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const course = golfCourses[activeIndex] ?? golfCourses[0];

    const move = (direction: -1 | 1) =>
        setActiveIndex((current) => (current + direction + golfCourses.length) % golfCourses.length);

    return (
        <main id='top' className='bg-[#f8f3ea] text-slate-900'>
            <SiteHeader />

            {/* 1. Hero */}
            <section className='relative isolate min-h-[88svh] overflow-hidden bg-[#14382a]'>
                <img
                    alt='Golf course with the mountains of Northern Thailand'
                    className='absolute inset-0 h-full w-full object-cover sm:hidden'
                    src={heroStill}
                />
                <video
                    className='absolute inset-0 hidden h-full w-full object-cover sm:block'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='metadata'
                    poster={heroStill}>
                    <source src={heroVideo.mp4} type='video/mp4' />
                    <source src={heroVideo.webm} type='video/webm' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,20,0.35)_0%,rgba(8,30,20,0.5)_45%,rgba(8,30,20,0.8)_100%)]' />

                <div className='relative mx-auto flex min-h-[88svh] max-w-6xl items-end justify-center px-4 pt-24 pb-14 text-center sm:items-center sm:px-6 sm:py-24 lg:px-8'>
                    <div className='mx-auto flex max-w-4xl flex-col items-center text-white'>
                        <p className='text-xs font-semibold tracking-[0.3em] text-[#e4c98a] uppercase sm:text-sm'>
                            Tee Off Chiang Mai
                        </p>
                        <h1 className='travel-display mt-4 text-[2.6rem] leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl'>
                            Play golf in Chiang Mai and Northern Thailand
                        </h1>
                        <p className='mt-6 max-w-2xl text-base leading-7 text-white/86 sm:text-lg sm:leading-8'>
                            Book your next round with Tee Off Chiang Mai. We’ll arrange your tee time, green fee, and private
                            hotel pickup and drop-off. Need rental clubs or help arranging a caddie? Tell us when you book. All
                            you need to focus on is your 18 holes.
                        </p>

                        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                            <Button
                                asChild
                                size='lg'
                                className='rounded-full border border-[#e4c98a] bg-[#2f7a4b] px-6 text-white hover:bg-[#276640]'>
                                <Link href='/golf-tours'>
                                    Explore Golf Tours
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='rounded-full border-white/30 bg-white/10 px-6 text-white hover:bg-white/18 hover:text-white'>
                                <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                    Book on WhatsApp
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. How it works */}
            <section className='relative overflow-hidden py-14 sm:py-16' style={mountainSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div data-reveal='fade-up' className='max-w-2xl'>
                        <p className='text-sm font-semibold tracking-[0.24em] text-[#8a6a2a] uppercase'>How it works</p>
                        <h2 className='travel-display mt-3 text-4xl text-[#14382a] sm:text-5xl'>Three steps to the first tee</h2>
                    </div>

                    <div className='mt-8 grid gap-4 md:grid-cols-3'>
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                data-reveal='step'
                                style={{ transitionDelay: `${index * 120}ms` }}
                                className='rounded-2xl border border-white/50 bg-[rgba(255,251,245,0.78)] p-6 shadow-[0_6px_18px_rgba(20,56,42,0.06)] backdrop-blur-sm'>
                                <span className='flex size-10 items-center justify-center rounded-full border border-[#c9a85a] bg-[#14382a] text-xs font-semibold tracking-[0.14em] text-[#e4c98a]'>
                                    0{index + 1}
                                </span>
                                <h3 className='mt-4 text-lg font-semibold text-[#14382a]'>{step.title}</h3>
                                <p className='mt-2 text-sm leading-7 text-slate-700'>{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-8 flex justify-center'>
                        <Button asChild size='lg' className='rounded-full bg-[#14382a] px-6 text-white hover:bg-[#0c2419]'>
                            <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                Book on WhatsApp
                                <ArrowRight className='size-4' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 3. Why choose us */}
            <section className='relative py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8'>
                    <div data-reveal='text-left'>
                        <p className='text-sm font-semibold tracking-[0.24em] text-[#8a6a2a] uppercase'>Why choose us</p>
                        <h2 className='travel-display mt-3 text-4xl text-[#14382a] sm:text-5xl'>
                            Why choose Tee Off Chiang Mai?
                        </h2>
                        <p className='mt-4 text-base leading-8 text-slate-700'>{whyIntro}</p>
                    </div>
                    <div className='grid gap-4 sm:grid-cols-2'>
                        {services.map(({ title, text, icon: Icon }, index) => (
                            <div
                                key={title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 80}ms` }}
                                className='rounded-lg border border-[#dfcfb4] bg-[#fffaf2]/86 p-5 shadow-sm'>
                                <span className='flex size-11 items-center justify-center rounded-md bg-[#e6efe2] text-[#2f7a4b]'>
                                    <Icon className='size-5' />
                                </span>
                                <h3 className='mt-3 text-base font-semibold text-[#14382a]'>{title}</h3>
                                <p className='mt-1.5 text-sm leading-6 text-slate-600'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Course showcase */}
            <section id='courses' className='relative border-y border-[#e5d6c0] py-14 sm:py-16' style={beigeSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div data-reveal='fade-up' className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
                        <div className='max-w-2xl'>
                            <p className='text-sm font-semibold tracking-[0.24em] text-[#8a6a2a] uppercase'>Golf day tours</p>
                            <h2 className='travel-display mt-3 text-4xl text-[#14382a] sm:text-5xl'>Seven courses, one easy booking</h2>
                        </div>
                        <Link href='/golf-tours' className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f7a4b]'>
                            See all golf tours
                            <ArrowRight className='size-4' />
                        </Link>
                    </div>

                    <div className='relative z-20 mt-6 rounded-lg border border-[#dcc6a5] bg-white/70 p-2 shadow-sm'>
                        <div className='relative md:hidden'>
                            <button
                                type='button'
                                aria-expanded={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen((open) => !open)}
                                className='flex w-full items-center justify-between rounded-md border border-[#dcc6a5] bg-white px-4 py-3 text-left text-sm font-medium text-[#14382a]'>
                                <span>{course.shortName}</span>
                                <ChevronDown className={`size-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileMenuOpen ? (
                                <div className='absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 grid gap-1 rounded-md border border-[#dcc6a5] bg-white p-2 shadow-xl'>
                                    {golfCourses.map((item, index) => (
                                        <button
                                            key={item.slug}
                                            type='button'
                                            onClick={() => {
                                                setActiveIndex(index);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`rounded-md px-3 py-3 text-left text-sm font-medium ${
                                                index === activeIndex ? 'bg-[#14382a] text-white' : 'text-slate-700 hover:bg-[#f6efe2]'
                                            }`}>
                                            {item.shortName}
                                        </button>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <div className='hidden gap-1.5 md:grid md:grid-cols-7'>
                            {golfCourses.map((item, index) => (
                                <button
                                    key={item.slug}
                                    type='button'
                                    onClick={() => setActiveIndex(index)}
                                    className={`rounded-md border px-2 py-2.5 text-xs font-medium leading-tight transition lg:text-sm ${
                                        index === activeIndex
                                            ? 'border-[#14382a] bg-[#14382a] text-white shadow-sm'
                                            : 'border-transparent bg-white/80 text-slate-700 hover:border-[#c9a85a] hover:bg-white'
                                    }`}>
                                    {item.shortName}
                                </button>
                            ))}
                        </div>
                    </div>

                    <article
                        key={course.slug}
                        className='mt-5 grid overflow-hidden rounded-lg border border-[#dfcfb4] bg-white shadow-sm lg:grid-cols-[1fr_1fr]'>
                        <div className='relative min-h-[320px]'>
                            <CourseImage
                                src={course.image}
                                alt={course.name}
                                caption={course.image ? undefined : 'Course photo coming soon'}
                                className='absolute inset-0'
                            />
                            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,20,0)_30%,rgba(8,30,20,0.82)_100%)]' />
                            <div className='absolute inset-x-5 bottom-5 text-white'>
                                <RatingStars rating={course.rating} />
                                <h3 className='travel-display mt-1 text-4xl leading-[0.95] sm:text-5xl'>{course.name}</h3>
                                <p className='mt-3 text-sm text-white/86'>{formatLeadPrice(course)}</p>
                            </div>
                        </div>

                        <div className='flex flex-col p-5 sm:p-7'>
                            <div className='flex flex-wrap gap-2 text-xs font-semibold text-[#14382a]'>
                                <span className='inline-flex items-center gap-1.5 rounded-full bg-[#f2ead9] px-3 py-1'>
                                    <Flag className='size-3.5 text-[#8a6a2a]' />
                                    {course.format}
                                </span>
                                <span className='inline-flex items-center gap-1.5 rounded-full bg-[#f2ead9] px-3 py-1'>
                                    <Footprints className='size-3.5 text-[#8a6a2a]' />
                                    {course.playOptions}
                                </span>
                                <span className='inline-flex items-center gap-1.5 rounded-full bg-[#f2ead9] px-3 py-1'>
                                    <Target className='size-3.5 text-[#8a6a2a]' />
                                    {course.drivingRange ? 'Driving range' : 'No driving range'}
                                </span>
                            </div>
                            <p className='mt-4 text-sm leading-7 text-slate-700'>{course.description}</p>
                            <div className='mt-5'>
                                <PriceTable course={course} />
                            </div>
                            <div className='mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <button
                                        type='button'
                                        onClick={() => move(-1)}
                                        className='rounded-full border border-[#d8c3a3] bg-white px-4 py-2.5 text-sm font-medium text-[#14382a] hover:bg-[#f6efe2]'>
                                        Previous
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => move(1)}
                                        className='rounded-full border border-[#d8c3a3] bg-white px-4 py-2.5 text-sm font-medium text-[#14382a] hover:bg-[#f6efe2]'>
                                        Next
                                    </button>
                                </div>
                                <Link
                                    href={getCourseEnquiryLink(course)}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center justify-center gap-2 rounded-full bg-[#2f7a4b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#276640]'>
                                    Check tee times
                                    <ArrowRight className='size-4' />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* 5. Golf holidays preview */}
            <section aria-label='Northern Thailand sightseeing' className='overflow-hidden bg-[#14382a]'>
                <div className='chiang-mai-marquee flex w-max'>
                    {[...holidayMarquee, ...holidayMarquee].map((image, index) => (
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

            <section className='relative py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8'>
                    <div data-reveal='text-left'>
                        <p className='text-sm font-semibold tracking-[0.24em] text-[#8a6a2a] uppercase'>Golf holidays</p>
                        <h2 className='travel-display mt-3 text-4xl text-[#14382a] sm:text-5xl'>
                            One- and two-week golf holidays in Northern Thailand
                        </h2>
                        <p className='mt-4 text-base leading-8 text-slate-700'>
                            Play your choice of courses around Chiang Mai and Chiang Rai, with time between rounds to explore
                            Northern Thailand. Spend a day at Doi Inthanon, visit Sticky Waterfall, or see the White Temple in
                            Chiang Rai. We can arrange overnight stays, private transport, tee times, and sightseeing around your
                            group’s travel dates.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <Button asChild size='lg' className='rounded-full bg-[#2f7a4b] px-6 text-white hover:bg-[#276640]'>
                                <Link href={holidayLink} target='_blank' rel='noopener noreferrer'>
                                    Plan My Golf Holiday
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='rounded-full border-[#d8c3a3] bg-white/70 px-6 text-[#14382a]'>
                                <Link href='/golf-holidays'>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3'>
                        {sightseeing.map((item, index) => (
                            <figure
                                key={item.title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 90}ms` }}
                                className={index === 1 ? 'mt-8' : ''}>
                                <img alt={item.title} src={item.image} className='h-48 w-full rounded-lg object-cover shadow-md sm:h-64' />
                                <figcaption className='mt-2 text-xs font-semibold text-[#14382a] sm:text-sm'>{item.title}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ preview */}
            <section className='relative border-t border-[#e5d6c0] py-14 sm:py-16' style={beigeSection}>
                <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                    <p className='text-sm font-semibold tracking-[0.24em] text-[#8a6a2a] uppercase'>FAQ</p>
                    <h2 className='travel-display mt-3 text-4xl text-[#14382a] sm:text-5xl'>Frequently asked questions</h2>
                    <div className='mt-7 grid gap-3'>
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className='group rounded-lg border border-[#dfcfb4] bg-white/82 px-5 py-4 shadow-sm open:bg-white'>
                                <summary className='flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#14382a]'>
                                    {faq.question}
                                    <ChevronDown className='size-4 flex-none transition-transform group-open:rotate-180' />
                                </summary>
                                <p className='mt-3 text-sm leading-7 text-slate-700'>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className='relative py-12 sm:py-14' style={patternedLight}>
                <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                    <div
                        data-reveal='soft-scale'
                        className='rounded-lg border border-[#c9a85a]/60 bg-[#14382a] px-6 py-9 text-center text-white shadow-lg sm:px-8'>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#e4c98a] uppercase'>Ready to tee off?</p>
                        <h2 className='travel-display mt-3 text-3xl sm:text-4xl'>
                            Send us your date, group size and hotel. We’ll take care of the rest.
                        </h2>
                        <div className='mt-6 flex flex-col justify-center gap-3 sm:flex-row'>
                            <Button asChild size='lg' className='rounded-full bg-[#2f7a4b] px-6 text-white hover:bg-[#3a8a59]'>
                                <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                    Book on WhatsApp
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='rounded-full border-white/30 bg-white/10 px-6 text-white hover:bg-white/18 hover:text-white'>
                                <Link href='/golf-tours'>Explore Golf Tours</Link>
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
