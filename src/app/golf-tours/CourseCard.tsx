'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ArrowRight, Check, Flag, Footprints, Target, X } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import PriceTable from '@/app/PriceTable';
import RatingStars from '@/app/RatingStars';
import type { GolfCourse } from '@/app/golf-data';
import { formatThb, getCourseEnquiryLink, getLeadPrice } from '@/app/golf-data';

type Panel = 'details' | 'prices' | null;

const CourseCard = ({ course, className = '' }: { course: GolfCourse; className?: string }) => {
    const [panel, setPanel] = useState<Panel>(null);
    const lead = getLeadPrice(course);
    const toggle = (next: Exclude<Panel, null>) => setPanel((current) => (current === next ? null : next));

    return (
        <article
            id={course.slug}
            className={`scroll-mt-28 overflow-hidden rounded-lg border border-[#dfcfb4] bg-white shadow-sm transition duration-300 hover:shadow-xl ${className}`}>
            <div className='relative'>
                <CourseImage
                    src={course.image}
                    alt={course.name}
                    caption={course.image ? undefined : 'Course photo coming soon'}
                    className='h-60 sm:h-64'
                />
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,20,0)_35%,rgba(8,30,20,0.78)_100%)]' />
                <div className='absolute left-4 top-4 rounded-2xl border border-white/30 bg-[#f6efe0]/92 px-4 py-2 text-[#14382a] shadow-sm backdrop-blur-md'>
                    <p className='text-[0.65rem] font-semibold tracking-[0.14em] text-[#8a6a2a] uppercase'>From</p>
                    <p className='text-lg leading-tight font-semibold'>
                        {formatThb(lead.amount)}
                        <span className='text-xs font-medium text-slate-600'> / golfer</span>
                    </p>
                    <p className='text-[0.7rem] text-slate-600'>
                        Group of {lead.groupSize} · {lead.basis === 'walking' ? 'walking' : 'cart included'}
                    </p>
                </div>
                <div className='absolute inset-x-4 bottom-4 text-white'>
                    <RatingStars rating={course.rating} />
                    <h3 className='travel-display mt-1 text-3xl leading-[0.95] drop-shadow-sm sm:text-4xl'>{course.name}</h3>
                </div>
            </div>

            <div className='p-5 sm:p-6'>
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
                        {course.drivingRange ? (
                            <Target className='size-3.5 text-[#2f7a4b]' />
                        ) : (
                            <X className='size-3.5 text-slate-400' />
                        )}
                        {course.drivingRange ? 'Driving range' : 'No driving range'}
                    </span>
                </div>

                <p className='mt-4 text-sm leading-7 text-slate-700'>{course.description}</p>

                <div className='mt-5 grid grid-cols-2 gap-2'>
                    <button
                        type='button'
                        aria-expanded={panel === 'details'}
                        onClick={() => toggle('details')}
                        className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                            panel === 'details'
                                ? 'border-[#14382a] bg-[#14382a] text-white'
                                : 'border-[#d8c3a3] bg-white text-[#14382a] hover:bg-[#f6efe2]'
                        }`}>
                        Course details
                    </button>
                    <button
                        type='button'
                        aria-expanded={panel === 'prices'}
                        onClick={() => toggle('prices')}
                        className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                            panel === 'prices'
                                ? 'border-[#14382a] bg-[#14382a] text-white'
                                : 'border-[#d8c3a3] bg-white text-[#14382a] hover:bg-[#f6efe2]'
                        }`}>
                        View prices
                    </button>
                </div>

                {panel === 'details' ? (
                    <div className='mt-5 rounded-lg border border-[#eadcc8] bg-[#fbf7ef] p-4'>
                        <p className='text-xs font-semibold tracking-[0.18em] text-[#8a6a2a] uppercase'>Course details</p>
                        <dl className='mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm'>
                            <dt className='text-slate-500'>Package rating</dt>
                            <dd className='font-semibold text-[#14382a]'>{course.rating} / 5</dd>
                            <dt className='text-slate-500'>Format</dt>
                            <dd className='font-semibold text-[#14382a]'>{course.format}</dd>
                            <dt className='text-slate-500'>Walking or cart</dt>
                            <dd className='font-semibold text-[#14382a]'>{course.playOptions}</dd>
                            <dt className='text-slate-500'>Driving range</dt>
                            <dd className='font-semibold text-[#14382a]'>{course.drivingRange ? 'Yes' : 'No'}</dd>
                        </dl>
                        <p className='mt-4 text-xs font-semibold tracking-[0.18em] text-[#8a6a2a] uppercase'>Gallery</p>
                        <div className='mt-3 grid grid-cols-3 gap-2'>
                            {course.gallery.map((shot) => (
                                <figure key={shot.caption}>
                                    <CourseImage src={shot.src} alt={`${course.name}: ${shot.caption}`} className='aspect-[4/3] rounded-md' />
                                    <figcaption className='mt-1 text-[0.7rem] leading-4 text-slate-500'>{shot.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                ) : null}

                {panel === 'prices' ? (
                    <div className='mt-5'>
                        <PriceTable course={course} />
                    </div>
                ) : null}

                <div className='mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#efe5d3] pt-4'>
                    <p className='flex items-center gap-1.5 text-xs text-slate-500'>
                        <Check className='size-3.5 text-[#2f7a4b]' />
                        Green fee + private hotel transfers included
                    </p>
                    <Link
                        href={getCourseEnquiryLink(course)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-full bg-[#2f7a4b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#276640]'>
                        Check tee times
                        <ArrowRight className='size-4' />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;
