'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ArrowUpRight, Minus, Plus } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import type { RoundsPerWeek } from '@/app/golf-data';
import { getHolidayPackage, holidayTiers, roundsPerWeekOptions, whatsappWithText } from '@/app/golf-data';
import { Price } from '@/app/currency';


const HolidayPackages = () => {
    const [rounds, setRounds] = useState<RoundsPerWeek>(3);
    const [golfers, setGolfers] = useState<1 | 2 | 3 | 4>(2);
    const changeGolfers = (delta: number) => setGolfers((n) => Math.min(4, Math.max(1, n + delta)) as 1 | 2 | 3 | 4);

    return (
        <div>
            {/* Selection bar: golfers + rounds per week */}
            <div className='mx-auto flex max-w-3xl flex-col items-stretch gap-4 rounded-md border border-[#14382a]/12 bg-white/80 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6'>
                <div className='flex items-center justify-between gap-4 sm:justify-start'>
                    <span className='text-[0.62rem] font-semibold tracking-[0.24em] text-slate-500 uppercase'>Golfers</span>
                    <div className='flex items-center gap-3'>
                        <button
                            type='button'
                            aria-label='Fewer golfers'
                            disabled={golfers === 1}
                            onClick={() => changeGolfers(-1)}
                            className='flex size-9 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                            <Minus className='size-3.5' />
                        </button>
                        <span aria-live='polite' className='travel-display w-5 text-center text-2xl text-[#14382a] tabular-nums'>
                            {golfers}
                        </span>
                        <button
                            type='button'
                            aria-label='More golfers'
                            disabled={golfers === 4}
                            onClick={() => changeGolfers(1)}
                            className='flex size-9 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                            <Plus className='size-3.5' />
                        </button>
                    </div>
                </div>

                <div className='hidden h-8 w-px bg-[#14382a]/12 sm:block' />

                <div className='flex items-center justify-between gap-4 sm:justify-start'>
                    <span className='text-[0.62rem] font-semibold tracking-[0.24em] text-slate-500 uppercase'>Rounds per week</span>
                    <div role='tablist' aria-label='Rounds per week' className='inline-flex rounded-full border border-[#14382a]/15 bg-white p-1'>
                        {roundsPerWeekOptions.map((option) => (
                            <button
                                key={option}
                                type='button'
                                role='tab'
                                aria-selected={rounds === option}
                                onClick={() => setRounds(option)}
                                className={`rounded-full px-4 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition sm:px-5 ${
                                    rounds === option ? 'bg-[#14382a] text-[#f6efe0]' : 'text-[#14382a]/70 hover:text-[#14382a]'
                                }`}>
                                {option}×
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <p className='mt-3 text-center text-sm text-slate-500'>
                {rounds} rounds of golf · {7 - rounds} days to explore
            </p>

            <div className='mt-10 grid gap-5 lg:grid-cols-3'>
                {holidayTiers.map((tier, index) => {
                    const pkg = getHolidayPackage(tier.id, rounds);
                    const featured = tier.id === 'classic';
                    const enquiry = whatsappWithText(
                        `Hi, I'm interested in the ${tier.name} golf holiday with ${rounds} rounds per week (${pkg.courses
                            .map((c) => c.shortName)
                            .join(', ')}) for ${golfers} golfer${golfers > 1 ? 's' : ''}. Our dates are: `
                    );

                    return (
                        <article
                            key={tier.id}
                            data-reveal='card'
                            style={{ transitionDelay: `${index * 110}ms` }}
                            className={`lux-card relative flex flex-col overflow-hidden ${featured ? 'lg:-mt-4 lg:mb-4 ring-1 ring-[#c9a85a]/70' : ''}`}>
                            <div className='relative h-44'>
                                <CourseImage src={tier.image} alt={tier.name} className='absolute inset-0' />
                                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,20,0.1)_0%,rgba(10,28,20,0.75)_100%)]' />
                                {featured ? (
                                    <span className='absolute top-4 right-4 rounded-full bg-[#c9a85a] px-3 py-1 text-[0.6rem] font-semibold tracking-[0.22em] text-[#10291f] uppercase'>
                                        Most popular
                                    </span>
                                ) : null}
                                <div className='absolute inset-x-6 bottom-5 text-white'>
                                    <p className='text-[0.6rem] font-semibold tracking-[0.3em] text-[#e2c886] uppercase'>
                                        {rounds} rounds · 1 week
                                    </p>
                                    <h3 className='travel-display mt-1 text-4xl leading-none'>{tier.name}</h3>
                                </div>
                            </div>

                            <div className='flex flex-1 flex-col p-6 sm:p-7'>
                                <p className='text-[0.92rem] leading-6 text-slate-600 italic'>{tier.tagline}</p>

                                <div className='mt-5 border-y border-[#14382a]/10 py-4'>
                                    <p className='text-[0.6rem] font-semibold tracking-[0.28em] text-[#9a7b3c] uppercase'>Golf</p>
                                    <p className='mt-1 flex flex-wrap items-baseline gap-x-2'>
                                        <span className='travel-display text-[2.2rem] leading-none whitespace-nowrap text-[#14382a] tabular-nums'>
                                            <Price thb={pkg.golfPerGolfer(golfers)} />
                                        </span>
                                        <span className='text-sm text-slate-500'>per golfer</span>
                                    </p>
                                    <p className='mt-3 flex items-baseline justify-between gap-4 text-sm text-slate-500'>
                                        Total
                                        <span className='font-semibold text-[#14382a] tabular-nums'>
                                            <Price thb={pkg.golfPerGolfer(golfers) * golfers} />
                                        </span>
                                    </p>
                                </div>

                                <p className='mt-5 text-[0.6rem] font-semibold tracking-[0.28em] text-slate-500 uppercase'>
                                    Your courses
                                </p>
                                <ol className='mt-3 grid gap-2.5'>
                                    {pkg.courses.map((course, index) => (
                                        <li key={course.slug} className='flex items-baseline gap-3'>
                                            <span className='travel-display w-5 flex-none text-lg text-[#c9a85a] italic'>{index + 1}</span>
                                            <span className='flex-1 text-[0.92rem] text-[#14382a]'>{course.name}</span>
                                        </li>
                                    ))}
                                </ol>


                                <Link
                                    href={enquiry}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`${featured ? 'btn-lux-gold' : 'btn-lux'} mt-7 inline-flex items-center justify-center gap-2`}>
                                    Plan this holiday
                                    <ArrowUpRight className='size-3.5' />
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </div>

            <p className='mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-slate-500'>
                Golf price per golfer: green fees and hotel transfers on golf days. Hotels and sightseeing are quoted for your
                group.
            </p>
        </div>
    );
};

export default HolidayPackages;
