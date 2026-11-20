'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import RatingStars from '@/app/RatingStars';
import type { GolfCourse } from '@/app/golf-data';
import { formatThb, golfCourses, whatsappWithText } from '@/app/golf-data';
import { Price } from '@/app/currency';

type Sort = 'price' | 'rating';

const enquiry = (course: GolfCourse, golfers: number) =>
    whatsappWithText(
        `Hi, I would like to check tee times for ${course.name} for ${golfers} golfer${golfers > 1 ? 's' : ''}. Our date and hotel are: `
    );

const CourseRow = ({ course, flip }: { course: GolfCourse; flip: boolean }) => {
    const [golfers, setGolfers] = useState(2);
    const shots = [
        ...(course.image ? [{ caption: course.name, src: course.image }] : []),
        ...course.gallery.filter((g) => g.src && g.src !== course.image)
    ];
    const [active, setActive] = useState(0);
    const main = shots[active] ?? shots[0];

    return (
        <article
            id={course.slug}
            className='grid scroll-mt-40 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14'
            data-reveal='card'>
            {/* Photos */}
            <div className={`min-w-0 ${flip ? 'lg:order-2' : ''}`}>
                <div className='relative aspect-[4/3] overflow-hidden rounded-md bg-[#0f2a1f]'>
                    <CourseImage
                        key={main?.src}
                        src={main?.src}
                        alt={main?.caption ?? course.name}
                        caption={main ? undefined : 'Course photo coming soon'}
                        className='absolute inset-0'
                    />
                </div>
                {shots.length > 1 ? (
                    <div className='mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]'>
                        {shots.slice(0, 5).map((shot, i) => (
                            <button
                                key={shot.src}
                                type='button'
                                aria-label={`Show photo: ${shot.caption}`}
                                onClick={() => setActive(i)}
                                className={`relative h-14 w-20 flex-none overflow-hidden rounded-[3px] transition ${
                                    i === active ? 'ring-2 ring-[#c9a85a] ring-offset-2 ring-offset-[#f8f5ee]' : 'opacity-70 hover:opacity-100'
                                }`}>
                                <CourseImage src={shot.src} alt='' className='absolute inset-0' />
                            </button>
                        ))}
                    </div>
                ) : null}
            </div>

            {/* Details */}
            <div className={`min-w-0 ${flip ? 'lg:order-1' : ''}`}>
                <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                    <RatingStars rating={course.rating} />
                    <span className='text-[0.66rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>
                        {course.format} · {course.playOptions}
                        {course.drivingRange ? ' · Driving range' : ''}
                    </span>
                </div>
                <h3 className='travel-display mt-3 text-[2.4rem] leading-[1] text-[#14382a] sm:text-5xl'>{course.name}</h3>
                <p className='mt-4 max-w-lg text-base text-slate-600'>{course.description}</p>

                <div className='mt-7 flex items-center justify-between gap-4 rounded-md border border-[#14382a]/12 bg-white/70 px-4 py-2.5'>
                    <span className='text-[0.62rem] font-semibold tracking-[0.24em] text-slate-500 uppercase'>Number of golfers</span>
                    <div className='flex items-center gap-3'>
                        <button
                            type='button'
                            aria-label={`Fewer golfers for ${course.shortName}`}
                            disabled={golfers === 1}
                            onClick={() => setGolfers((n) => Math.max(1, n - 1))}
                            className='flex size-8 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                            <Minus className='size-3.5' />
                        </button>
                        <span aria-live='polite' className='travel-display w-5 text-center text-2xl text-[#14382a] tabular-nums'>
                            {golfers}
                        </span>
                        <button
                            type='button'
                            aria-label={`More golfers for ${course.shortName}`}
                            disabled={golfers === 4}
                            onClick={() => setGolfers((n) => Math.min(4, n + 1))}
                            className='flex size-8 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                            <Plus className='size-3.5' />
                        </button>
                    </div>
                </div>

                <div className='mt-4 grid gap-3'>
                    {course.packages.map((pkg) => (
                        <div
                            key={pkg.label}
                            className='flex items-end justify-between gap-4 border-b border-[#14382a]/12 pb-3'>
                            <div>
                                <p className='text-[0.62rem] font-semibold tracking-[0.24em] text-[#9a7b3c] uppercase'>{pkg.label}</p>
                                <p className='mt-1 flex items-baseline gap-2'>
                                    <span className='travel-display text-4xl leading-none text-[#14382a] tabular-nums'>
                                        <Price thb={pkg.perGolfer[golfers - 1]} />
                                    </span>
                                    <span className='text-sm text-slate-500'>per golfer</span>
                                </p>
                            </div>
                            <p className='pb-1 text-right text-sm text-slate-500'>
                                {golfers > 1 ? `Total for ${golfers} golfers` : 'Total'}
                                <br />
                                <span className='font-semibold text-[#14382a] tabular-nums'>
                                    <Price thb={pkg.total[golfers - 1]} />
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-4'>
                    <Link
                        href={enquiry(course, golfers)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-lux inline-flex items-center gap-2'>
                        Check tee times
                        <ArrowUpRight className='size-3.5' />
                    </Link>
                    <Link
                        href='/golf-holidays#plan-your-week'
                        className='inline-flex items-center gap-2 border-b border-[#c9a85a]/70 pb-1 text-[0.68rem] font-semibold tracking-[0.2em] text-[#14382a] uppercase'>
                        Add to a golf week
                        <ArrowRight className='size-3.5' />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const GolfDaysListing = () => {
    const [sort, setSort] = useState<Sort>('price');

    // sort on the price for a group of 2
    const lowest = (c: GolfCourse) => Math.min(...c.packages.map((p) => p.perGolfer[1]));
    // Top rated: highest rating first; on a tie the premium (pricier) course wins, so Alpine leads.
    const courses = [...golfCourses].sort((a, b) =>
        sort === 'rating' ? b.rating - a.rating || lowest(b) - lowest(a) : lowest(a) - lowest(b)
    );

    return (
        <>
            {/* Toolbar */}
            <div className='sticky top-[65px] z-30 border-b border-[#14382a]/10 bg-[#f8f5ee]/95 backdrop-blur-xl sm:top-[81px]'>
                <div className='mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3 sm:px-6 lg:px-8'>
                    <div className='flex items-center gap-1 rounded-full border border-[#14382a]/15 bg-white p-1'>
                        {(['price', 'rating'] as const).map((key) => (
                            <button
                                key={key}
                                type='button'
                                onClick={() => setSort(key)}
                                className={`rounded-full px-4 py-1.5 text-[0.66rem] font-semibold tracking-[0.18em] uppercase transition ${
                                    sort === key ? 'bg-[#14382a] text-white' : 'text-[#14382a]/65 hover:text-[#14382a]'
                                }`}>
                                {key === 'price' ? 'Lowest price' : 'Top rated'}
                            </button>
                        ))}
                    </div>
                    <p className='hidden items-center gap-2 text-xs text-slate-500 sm:flex'>
                        <Check className='size-3.5 text-[#9a7b3c]' />
                        Green fee + private hotel transfers included
                    </p>
                </div>
            </div>

            <div className='leaf-overlay'>
            <div className='mx-auto grid max-w-[90rem] gap-20 px-5 py-16 sm:px-6 sm:py-20 lg:gap-28 lg:px-8'>
                {courses.map((course, index) => (
                    <CourseRow key={course.slug} course={course} flip={index % 2 === 1} />
                ))}
            </div>
            </div>
        </>
    );
};

export default GolfDaysListing;
