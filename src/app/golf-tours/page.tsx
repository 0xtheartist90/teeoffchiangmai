import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { bookingLink } from '@/app/golf-data';
import GolfDaysListing from '@/app/golf-tours/GolfDaysListing';

export const metadata: Metadata = {
    title: 'Golf Days | Tee Off Chiang Mai',
    description:
        'Single golf days in Chiang Mai: seven courses from Hang Dong to Alpine, with green fee and private hotel transfers included. Prices for 1–4 golfers.'
};

const GolfDaysPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />

            <PageHero
                title={
                    <>
                        Golf days <span className='text-[#e2c886] italic'>in Chiang Mai</span>
                    </>
                }
                subtitle='One round, seven courses. Green fee and hotel transfers included.'
                image='/images/golf/alpine/lake-bunkers.webp'
            />

            <GolfDaysListing />

            {/* Upsell to holidays */}
            <section
                className='relative isolate overflow-hidden py-20 sm:py-28'
                style={{
                    backgroundImage: "url('/images/golf/highlands/mountain-fairway.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className='absolute inset-0 -z-10 bg-[#0f2a1f]/72' />
                <div className='mx-auto flex max-w-[90rem] flex-col gap-8 px-5 text-white sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8'>
                    <div className='max-w-xl'>
                        <h2 className='travel-display text-[2.6rem] leading-tight sm:text-6xl'>
                            Staying a week? <span className='text-[#e2c886] italic'>Make it a golf holiday.</span>
                        </h2>
                        <p className='mt-4 text-base text-white/75'>Golf holiday packages with 2, 3 or 4 rounds and days out in between.</p>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        <Link href='/golf-holidays' className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                            Golf holidays
                            <ArrowRight className='size-3.5' />
                        </Link>
                        <Link
                            href={bookingLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-lux-ghost-light inline-flex items-center justify-center gap-2'>
                            Ask on WhatsApp
                            <ArrowUpRight className='size-3.5' />
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default GolfDaysPage;
