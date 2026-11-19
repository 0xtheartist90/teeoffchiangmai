import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { services } from '@/app/content';
import { bookingLink } from '@/app/golf-data';
import { patternedLight } from '@/app/section-backgrounds';

export const metadata: Metadata = {
    title: 'Why Choose Us | Tee Off Chiang Mai',
    description:
        'Over five years arranging private tours in Northern Thailand. Tee Off Chiang Mai handles tee times, green fees, rental clubs and private transport for your golf holiday or golf day.'
};

const shortServices: Record<string, string> = {
    'Tee times and green fees': 'We check availability and book your round.',
    'Golf equipment rental': 'No clubs with you? We arrange a rental set.',
    'Private transport both ways': 'Hotel pickup, course, and back again.',
    'Groups and custom trips': 'Friends, families or bigger golf groups.'
};

const WhyChooseUsPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />

            <PageHero
                title={
                    <>
                        We handle the booking. <span className='text-[#e2c886] italic'>You play the round.</span>
                    </>
                }
                subtitle='Five years of private tours in Northern Thailand. We love golf ourselves — so we made booking a round easy.'
                image='/images/golf/alpine/lakeside-green.webp'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <Link href='#about' className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                        About us
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
            </PageHero>

            {/* About us */}
            <section id='about' className='leaf-overlay relative py-20 sm:py-28' style={patternedLight}>
                <div className='mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8'>
                    <div data-reveal='text-left'>
                        <h2 className='travel-display text-[2.6rem] leading-tight text-[#14382a] sm:text-[3.4rem]'>
                            About us. <span className='italic'>Golfers, first.</span>
                        </h2>
                        <div className='mt-6 grid gap-5 text-base leading-8 text-slate-600'>
                            <p>
                                We’re the team behind Chiang Mai Driver. For more than five years we’ve arranged private and custom
                                tours across Chiang Mai and Northern Thailand.
                            </p>
                            <p>
                                We love golf ourselves. And we kept hearing the same question from guests: “Can we play a round while
                                we’re here?” So we started Tee Off Chiang Mai — to make booking golf here as easy as booking a day
                                trip.
                            </p>
                            <p>
                                We know these courses, the drive there, and the best time to tee off. You get one point of contact,
                                our own drivers, and a day planned the way golfers like it.
                            </p>
                        </div>
                        <dl className='mt-10 grid grid-cols-3 gap-4 border-t border-[#14382a]/12 pt-6'>
                            <div>
                                <dt className='text-[0.62rem] font-semibold tracking-[0.22em] text-slate-500 uppercase'>Years of tours</dt>
                                <dd className='travel-display mt-1 text-4xl text-[#14382a]'>5+</dd>
                            </div>
                            <div>
                                <dt className='text-[0.62rem] font-semibold tracking-[0.22em] text-slate-500 uppercase'>Golf courses</dt>
                                <dd className='travel-display mt-1 text-4xl text-[#14382a]'>7</dd>
                            </div>
                            <div>
                                <dt className='text-[0.62rem] font-semibold tracking-[0.22em] text-slate-500 uppercase'>Contact</dt>
                                <dd className='travel-display mt-1 text-4xl text-[#14382a]'>1</dd>
                            </div>
                        </dl>
                    </div>
                    <div data-reveal='image-left' className='relative'>
                        {/* Swap for a photo of the owners on the course when available */}
                        <img
                            src='/images/golf/lanna/fairway.webp'
                            alt='Fairway at Lanna Golf Course, Chiang Mai'
                            className='aspect-[4/5] w-full rounded-md object-cover shadow-xl'
                        />
                        <img
                            src='/images/golf/sand-creek/sunset-green.webp'
                            alt=''
                            aria-hidden='true'
                            className='absolute -bottom-8 -left-8 hidden aspect-square w-44 rounded-md border-4 border-[#f8f5ee] object-cover shadow-xl sm:block'
                        />
                    </div>
                </div>
            </section>

            {/* What we handle: photo + services */}
            <section className='relative grid bg-[#10291f] text-white lg:grid-cols-2'>
                <div className='relative min-h-[340px] sm:min-h-[440px] lg:order-2 lg:min-h-[560px]'>
                    <img
                        src='/images/golf/summit-green-valley/sunset-flag.webp'
                        alt='Sunset over the green at Summit Green Valley'
                        className='absolute inset-0 h-full w-full object-cover'
                    />
                </div>
                <div className='flex items-center px-5 py-16 sm:px-10 lg:px-16'>
                    <div className='w-full max-w-lg'>
                        <h2 data-reveal='text-left' className='travel-display text-[2.6rem] leading-tight sm:text-5xl'>
                            What we <span className='text-[#e2c886] italic'>take care of</span>
                        </h2>
                        <ul className='mt-10 grid gap-7'>
                            {services.map(({ title, icon: Icon }, index) => (
                                <li
                                    key={title}
                                    data-reveal='step'
                                    style={{ transitionDelay: `${100 + index * 90}ms` }}
                                    className='flex items-start gap-4'>
                                    <span className='flex size-11 flex-none items-center justify-center rounded-full border border-[#c9a85a]/60 text-[#e2c886]'>
                                        <Icon className='size-[1.1rem]' strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <p className='travel-display text-2xl leading-tight'>{title}</p>
                                        <p className='mt-1 text-sm text-white/65'>{shortServices[title]}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section
                className='relative isolate overflow-hidden py-24 sm:py-28'
                style={{ backgroundImage: "url('/images/golf/highlands/sunrise.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 -z-10 bg-[#0f2a1f]/70' />
                <div data-reveal='soft-scale' className='mx-auto max-w-3xl px-5 text-center text-white sm:px-6'>
                    <h2 className='travel-display text-[2.6rem] leading-tight sm:text-6xl'>
                        Let’s plan <span className='text-[#e2c886] italic'>your round.</span>
                    </h2>
                    <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row'>
                        <Link
                            href={bookingLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                            Book on WhatsApp
                            <ArrowUpRight className='size-3.5' />
                        </Link>
                        <Link href='/golf-holidays' className='btn-lux-ghost-light inline-flex items-center justify-center gap-2'>
                            Golf holidays
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default WhyChooseUsPage;
