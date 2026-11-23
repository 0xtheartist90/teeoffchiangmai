'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight, Check, Expand, Info, Minus, Plus } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import Lightbox from '@/app/Lightbox';
import type { LightboxShot } from '@/app/Lightbox';
import RatingStars from '@/app/RatingStars';
import type { Facility, GolfCourse } from '@/app/golf-data';
import { golfCourses, whatsappWithText } from '@/app/golf-data';
import { Price } from '@/app/currency';

type Sort = 'price' | 'rating';

const enquiry = (course: GolfCourse, golfers: number) =>
    whatsappWithText(
        `Hi, I would like to check tee times for ${course.name} for ${golfers} golfer${golfers > 1 ? 's' : ''}. Our date and hotel are: `
    );

const facilityText = (value: Facility | undefined) => (value === true ? 'Yes' : value === false ? 'No' : 'To be confirmed');

const CourseRow = ({ course, flip, bestRated }: { course: GolfCourse; flip: boolean; bestRated: boolean }) => {
    const [golfers, setGolfers] = useState(2);
    const shots: LightboxShot[] = [
        ...(course.image ? [{ caption: course.name, src: course.image }] : []),
        ...course.gallery.filter((g): g is { caption: string; src: string } => Boolean(g.src) && g.src !== course.image)
    ];
    const [active, setActive] = useState(0);
    const [zoom, setZoom] = useState<number | null>(null);
    const main = shots[active] ?? shots[0];
    const pkg = course.packages[0];
    const details = course.details;

    return (
        <article
            id={course.slug}
            className='grid scroll-mt-40 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14'
            data-reveal='card'>
            {/* Photos */}
            <div className={`min-w-0 ${flip ? 'lg:order-2' : ''}`}>
                <button
                    type='button'
                    onClick={() => main && setZoom(active)}
                    aria-label={main ? `Enlarge photo: ${main.caption}` : undefined}
                    disabled={!main}
                    className='group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-md bg-[#0f2a1f] disabled:cursor-default'>
                    <CourseImage
                        key={main?.src}
                        src={main?.src}
                        alt={main?.caption ?? course.name}
                        caption={main ? undefined : 'Course photo coming soon'}
                        className='absolute inset-0'
                        imgClassName='transition duration-700 group-hover:scale-[1.03]'
                    />
                    {main ? (
                        <span className='absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#14382a] opacity-90 shadow transition group-hover:opacity-100'>
                            <Expand className='size-4' />
                        </span>
                    ) : null}
                    {bestRated ? (
                        <span className='absolute top-4 left-4 rounded-full bg-[#c9a85a] px-3 py-1 text-[0.6rem] font-semibold tracking-[0.22em] text-[#10291f] uppercase'>
                            Best rated
                        </span>
                    ) : null}
                </button>
                {shots.length > 1 ? (
                    <div className='mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]'>
                        {shots.map((shot, i) => (
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
                <Lightbox shots={shots} index={zoom} onChange={setZoom} title={course.name} />
            </div>

            {/* Details */}
            <div className={`min-w-0 ${flip ? 'lg:order-1' : ''}`}>
                <RatingStars rating={course.rating} size='size-6' showLabel />
                <h3 className='travel-display mt-4 text-[2.4rem] leading-[1] text-[#14382a] sm:text-5xl'>{course.name}</h3>
                <p className='mt-3 text-[0.66rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>
                    {course.format} · {course.playOptions}
                    {course.drivingRange ? ' · Driving range' : ''}
                </p>
                <p className='mt-4 max-w-lg text-base text-slate-600'>{course.description}</p>

                {/* Price, golfers and total together */}
                <div className='mt-7 rounded-md border border-[#14382a]/12 bg-white/75 p-4 sm:p-5'>
                    <p className='text-[0.62rem] font-semibold tracking-[0.24em] text-[#9a7b3c] uppercase'>{pkg.label}</p>
                    <div className='mt-2 grid grid-cols-[1fr_auto] items-end gap-x-4 gap-y-4 sm:grid-cols-[1fr_auto_auto]'>
                        <p className='flex flex-wrap items-baseline gap-x-2'>
                            <span className='travel-display text-4xl leading-none whitespace-nowrap text-[#14382a] tabular-nums'>
                                <Price thb={pkg.perGolfer[golfers - 1]} />
                            </span>
                            <span className='text-sm text-slate-500'>per golfer</span>
                        </p>
                        <div className='flex flex-col items-center gap-1'>
                            <span className='text-[0.58rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Golfers</span>
                            <div className='flex items-center gap-2'>
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
                        <p className='col-span-2 flex items-baseline justify-between gap-3 border-t border-[#14382a]/10 pt-3 text-sm text-slate-500 sm:col-span-1 sm:block sm:border-0 sm:pt-0 sm:text-right'>
                            Total
                            <span className='block font-semibold text-[#14382a] tabular-nums'>
                                <Price thb={pkg.total[golfers - 1]} />
                            </span>
                        </p>
                    </div>
                </div>

                {/* What's extra */}
                <ul className='mt-4 grid gap-1.5 text-sm text-slate-600'>
                    {course.note ? (
                        <li className='flex gap-2'>
                            <Info className='mt-0.5 size-4 flex-none text-[#9a7b3c]' />
                            {course.note}
                        </li>
                    ) : null}
                    <li className='flex gap-2'>
                        <Info className='mt-0.5 size-4 flex-none text-[#9a7b3c]' />
                        <span>
                            Caddie fee: paid separately at the course. <strong className='font-semibold text-[#14382a]'>Caddie tips are mandatory and paid separately.</strong>
                        </span>
                    </li>
                    <li className='flex gap-2'>
                        <Info className='mt-0.5 size-4 flex-none text-[#9a7b3c]' />
                        Food and drinks are not included.
                    </li>
                </ul>

                {/* Expandable course details */}
                <details className='group mt-5 border-y border-[#14382a]/12'>
                    <summary className='flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[0.68rem] font-semibold tracking-[0.2em] text-[#14382a] uppercase [&::-webkit-details-marker]:hidden'>
                        Course details
                        <Plus className='size-4 transition group-open:rotate-45' />
                    </summary>
                    <dl className='grid gap-x-6 gap-y-3 pb-5 text-sm sm:grid-cols-2'>
                        <div>
                            <dt className='text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Transfer from central Chiang Mai</dt>
                            <dd className='mt-0.5 text-[#14382a]'>{details?.transfer ?? 'To be confirmed'}</dd>
                        </div>
                        <div>
                            <dt className='text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Driving range</dt>
                            <dd className='mt-0.5 text-[#14382a]'>
                                {facilityText(details ? details.drivingRange : course.drivingRange ? true : null)}
                            </dd>
                        </div>
                        <div>
                            <dt className='text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Locker rooms</dt>
                            <dd className='mt-0.5 text-[#14382a]'>{facilityText(details?.lockerRooms)}</dd>
                        </div>
                        <div>
                            <dt className='text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Showers</dt>
                            <dd className='mt-0.5 text-[#14382a]'>{facilityText(details?.showers)}</dd>
                        </div>
                        <div className='sm:col-span-2'>
                            <dt className='text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Other facilities</dt>
                            <dd className='mt-0.5 text-[#14382a]'>{details?.other.length ? details.other.join(' · ') : 'To be confirmed'}</dd>
                        </div>
                    </dl>
                </details>

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
    const bestRatedSlug = [...golfCourses].sort((a, b) => b.rating - a.rating || lowest(b) - lowest(a))[0].slug;
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
                    <CourseRow key={course.slug} course={course} flip={index % 2 === 1} bestRated={course.slug === bestRatedSlug} />
                ))}
            </div>
            </div>
        </>
    );
};

export default GolfDaysListing;
