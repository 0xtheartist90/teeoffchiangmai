'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { ArrowUpRight, Minus, Plus, RotateCcw, Sun } from 'lucide-react';

import CourseImage from '@/app/CourseImage';
import type { GolfCourse } from '@/app/golf-data';
import type { SightseeingTripId } from '@/app/golf-data';
import { formatThb, getTrip, golfCourses, sightseeingTrips, whatsappWithText } from '@/app/golf-data';
import { Price } from '@/app/currency';

type DayPlan =
    | { kind: 'free' }
    | { kind: 'sightseeing'; trip: SightseeingTripId }
    | { kind: 'golf'; slug: string; packageIndex: number };


const DAYS = 7;
const MAX_GROUP = 4;

const courseBySlug = (slug: string) => golfCourses.find((c) => c.slug === slug) as GolfCourse;

const cheapestIndex = (course: GolfCourse, size: number) =>
    course.packages.reduce((best, pkg, i) => (pkg.perGolfer[size - 1] < course.packages[best].perGolfer[size - 1] ? i : best), 0);

const addDays = (iso: string, n: number) => {
    const d = new Date(`${iso}T12:00:00`);
    d.setDate(d.getDate() + n);

    return d;
};

const WeekPlanner = () => {
    const [groupSize, setGroupSize] = useState(2);
    const [startDate, setStartDate] = useState('');
    const [days, setDays] = useState<DayPlan[]>(() => [
        { kind: 'golf', slug: 'lanna', packageIndex: 0 },
        { kind: 'sightseeing', trip: 'doi-inthanon' },
        { kind: 'golf', slug: 'highlands', packageIndex: 0 },
        { kind: 'free' },
        { kind: 'golf', slug: 'alpine', packageIndex: 0 },
        { kind: 'sightseeing', trip: 'sticky-waterfall' },
        { kind: 'free' }
    ]);

    const setDay = (index: number, plan: DayPlan) => setDays((current) => current.map((d, i) => (i === index ? plan : d)));

    const onSelect = (index: number, value: string) => {
        if (value === 'free') return setDay(index, { kind: 'free' });
        if (value === 'sightseeing') return setDay(index, { kind: 'sightseeing', trip: 'doi-inthanon' });
        const course = courseBySlug(value);
        setDay(index, { kind: 'golf', slug: value, packageIndex: cheapestIndex(course, groupSize) });
    };

    const dayLabel = (index: number) => {
        if (!startDate) return { top: `Day ${index + 1}`, bottom: '' };
        const d = addDays(startDate, index);

        return {
            top: d.toLocaleDateString('en-GB', { weekday: 'short' }),
            bottom: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
        };
    };

    const summary = useMemo(() => {
        const rows = days.map((day, index) => {
            if (day.kind === 'sightseeing') {
                const trip = getTrip(day.trip);

                return { index, day, course: null, pkg: null, perGolfer: Math.round(trip.price / groupSize), total: trip.price };
            }
            if (day.kind !== 'golf') return { index, day, course: null, pkg: null, perGolfer: 0, total: 0 };
            const course = courseBySlug(day.slug);
            const pkg = course.packages[day.packageIndex] ?? course.packages[0];

            return { index, day, course, pkg, perGolfer: pkg.perGolfer[groupSize - 1], total: pkg.total[groupSize - 1] };
        });
        const golfRows = rows.filter((r) => r.course);
        const tripRows = rows.filter((r) => r.day.kind === 'sightseeing');
        const golfTotal = golfRows.reduce((s, r) => s + r.total, 0);
        const tripsTotal = tripRows.reduce((s, r) => s + r.total, 0);

        return {
            rows,
            rounds: golfRows.length,
            trips: tripRows.length,
            golfTotal,
            tripsTotal,
            total: golfTotal + tripsTotal,
            perGolfer: Math.round((golfTotal + tripsTotal) / groupSize),
            hasProposed: golfRows.some((r) => r.course?.priceStatus === 'proposed')
        };
    }, [days, groupSize]);

    const enquiryText = (() => {
        const lines = summary.rows.map((r) => {
            const { top, bottom } = dayLabel(r.index);
            const label = `${top}${bottom ? ` ${bottom}` : ''}`;
            if (r.day.kind === 'golf' && r.course && r.pkg)
                return `${label}: ${r.course.name} (${r.pkg.label})`;
            if (r.day.kind === 'sightseeing') return `${label}: ${getTrip(r.day.trip).name}`;

            return `${label}: Free day`;
        });

        return [
            `Hi, I'd like to book this custom golf week for ${groupSize} golfer${groupSize > 1 ? 's' : ''}:`,
            ...lines,
            `Estimate: ${formatThb(summary.total)} for the group (${formatThb(summary.perGolfer)} per person) — golf ${formatThb(summary.golfTotal)}, day trips ${formatThb(summary.tripsTotal)}.`,
            'Our hotel is: '
        ].join('\n');
    })();

    const reset = () => setDays(Array.from({ length: DAYS }, () => ({ kind: 'free' }) as DayPlan));

    return (
        <div>
            {/* Controls */}
            <div className='flex flex-col gap-5 rounded-md border border-[#14382a]/10 bg-white p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6'>
                <div className='flex flex-wrap items-end gap-6'>
                    <div>
                        <p className='text-[0.62rem] font-semibold tracking-[0.24em] text-slate-500 uppercase'>Golfers</p>
                        <div className='mt-2 flex items-center gap-3'>
                            <button
                                type='button'
                                aria-label='Fewer golfers'
                                onClick={() => setGroupSize((n) => Math.max(1, n - 1))}
                                disabled={groupSize === 1}
                                className='flex size-9 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                                <Minus className='size-3.5' />
                            </button>
                            <span className='travel-display w-6 text-center text-3xl text-[#14382a] tabular-nums'>{groupSize}</span>
                            <button
                                type='button'
                                aria-label='More golfers'
                                onClick={() => setGroupSize((n) => Math.min(MAX_GROUP, n + 1))}
                                disabled={groupSize === MAX_GROUP}
                                className='flex size-9 items-center justify-center rounded-full border border-[#14382a]/20 text-[#14382a] transition hover:bg-[#14382a] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#14382a]'>
                                <Plus className='size-3.5' />
                            </button>
                        </div>
                    </div>
                    <label className='block'>
                        <span className='text-[0.62rem] font-semibold tracking-[0.24em] text-slate-500 uppercase'>
                            First day (optional)
                        </span>
                        <input
                            type='date'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className='mt-2 block h-9 rounded-md border border-[#14382a]/20 bg-white px-3 text-sm text-[#14382a] outline-none focus:border-[#c9a85a]'
                        />
                    </label>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-xs text-slate-500'>More than 4 golfers? Ask us for a group quote.</p>
                    <button
                        type='button'
                        onClick={reset}
                        className='inline-flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.18em] whitespace-nowrap text-[#14382a]/70 uppercase hover:text-[#14382a]'>
                        <RotateCcw className='size-3.5' />
                        Clear
                    </button>
                </div>
            </div>

            {/* Week grid */}
            <div className='mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-7'>
                {days.map((day, index) => {
                    const { top, bottom } = dayLabel(index);
                    const course = day.kind === 'golf' ? courseBySlug(day.slug) : null;
                    const pkg = course && day.kind === 'golf' ? course.packages[day.packageIndex] : null;
                    const selectValue = day.kind === 'golf' ? day.slug : day.kind;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col overflow-hidden rounded-md border transition ${
                                course ? 'border-[#c9a85a]/70 bg-white' : 'border-white/20 bg-[#f8f5ee]'
                            }`}>
                            <div className='relative h-16 sm:h-24 lg:h-20'>
                                {course ? (
                                    <>
                                        <CourseImage src={course.image} alt={course.name} className='absolute inset-0' />
                                        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,20,0.55),rgba(10,28,20,0.2))]' />
                                    </>
                                ) : (
                                    <div className='absolute inset-0 flex items-center justify-center bg-[#efe9dc] text-[#c9a85a]'>
                                        <Sun className='size-6' strokeWidth={1.3} />
                                    </div>
                                )}
                                <div className={`absolute top-2.5 left-3 ${course ? 'text-white' : 'text-[#14382a]'}`}>
                                    <p className='text-[0.66rem] font-semibold tracking-[0.2em] uppercase'>{top}</p>
                                    {bottom ? <p className='text-xs opacity-80'>{bottom}</p> : null}
                                </div>
                            </div>

                            <div className='flex flex-1 flex-col gap-2 p-2.5 sm:p-3'>
                                <select
                                    aria-label={`Plan for ${top} ${bottom}`}
                                    value={selectValue}
                                    onChange={(e) => onSelect(index, e.target.value)}
                                    className='w-full rounded border border-[#14382a]/15 bg-white px-2 py-2 text-[0.8rem] text-[#14382a] outline-none focus:border-[#c9a85a]'>
                                    <option value='free'>Free day</option>
                                    <option value='sightseeing'>Sightseeing</option>
                                    <optgroup label='Golf'>
                                        {golfCourses.map((c) => (
                                            <option key={c.slug} value={c.slug}>
                                                {c.shortName}
                                            </option>
                                        ))}
                                    </optgroup>
                                </select>

                                {day.kind === 'golf' && course && course.packages.length > 1 ? (
                                    <div className='grid grid-cols-2 gap-1'>
                                        {course.packages.map((p, i) => (
                                            <button
                                                key={p.label}
                                                type='button'
                                                onClick={() => setDay(index, { ...day, packageIndex: i })}
                                                className={`rounded px-1.5 py-1 text-[0.66rem] font-semibold transition ${
                                                    day.packageIndex === i
                                                        ? 'bg-[#14382a] text-white'
                                                        : 'bg-[#efe9dc] text-[#14382a]/70 hover:text-[#14382a]'
                                                }`}>
                                                {p.label}
                                            </button>
                                        ))}
                                    </div>
                                ) : null}

                                {day.kind === 'sightseeing' ? (
                                    <img
                                        src={getTrip(day.trip).image}
                                        alt={getTrip(day.trip).name}
                                        className='aspect-[16/10] w-full rounded object-cover'
                                    />
                                ) : null}

                                {day.kind === 'sightseeing' ? (
                                    <select
                                        aria-label='Sightseeing idea'
                                        value={day.trip}
                                        onChange={(e) =>
                                            setDay(index, { kind: 'sightseeing', trip: e.target.value as SightseeingTripId })
                                        }
                                        className='w-full rounded border border-[#14382a]/10 bg-[#f8f5ee] px-2 py-1.5 text-[0.75rem] text-slate-600 outline-none'>
                                        {sightseeingTrips.map((trip) => (
                                            <option key={trip.id} value={trip.id}>
                                                {trip.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : null}

                                <p className='mt-auto pt-1 text-[0.78rem] text-slate-500'>
                                    {pkg ? (
                                        <>
                                            <span className='font-semibold text-[#14382a] tabular-nums'>
                                                <Price thb={pkg.perGolfer[groupSize - 1]} />
                                            </span>{' '}
                                            p.p.
                                        </>
                                    ) : day.kind === 'sightseeing' ? (
                                        <>
                                            <span className='font-semibold text-[#14382a] tabular-nums'>
                                                <Price thb={getTrip(day.trip).price} />
                                            </span>{' '}
                                            per car
                                        </>
                                    ) : (
                                        'Relax'
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className='mt-6 grid overflow-hidden rounded-md border border-white/15 bg-[#10291f]/90 text-white backdrop-blur-md lg:grid-cols-[1.3fr_0.7fr]'>
                <div className='p-6 sm:p-8'>
                    <h3 className='travel-display text-3xl'>Your week</h3>
                    <ul className='mt-4 divide-y divide-white/10 text-sm'>
                        {summary.rows.map((r) => {
                            const { top, bottom } = dayLabel(r.index);

                            return (
                                <li key={r.index} className='flex items-baseline justify-between gap-4 py-2'>
                                    <span className='w-24 flex-none text-[0.7rem] font-semibold tracking-[0.18em] text-white/50 uppercase'>
                                        {top} {bottom}
                                    </span>
                                    <span className='flex-1 text-white/85'>
                                        {r.course && r.pkg
                                            ? `${r.course.name}${r.course.packages.length > 1 ? ` · ${r.pkg.label}` : ''}`
                                            : r.day.kind === 'sightseeing'
                                              ? getTrip(r.day.trip).name
                                              : 'Free day'}
                                    </span>
                                    <span className='text-right text-white/70 tabular-nums'>
                                        {r.total ? <Price thb={r.total} /> : '—'}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='flex flex-col justify-between gap-6 border-t border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:border-t-0 lg:border-l'>
                    <div>
                        <p className='text-sm text-white/70'>
                            {summary.rounds} {summary.rounds === 1 ? 'round' : 'rounds'} · {summary.trips}{' '}
                            {summary.trips === 1 ? 'day trip' : 'day trips'} · {groupSize} {groupSize === 1 ? 'golfer' : 'golfers'}
                        </p>
                        <p className='travel-display mt-3 text-5xl leading-none text-[#e2c886]'><Price thb={summary.total} /></p>
                        <p className='mt-2 text-sm text-white/70'>group total</p>
                        <p className='mt-4 text-lg text-white tabular-nums'>
                            <Price thb={summary.perGolfer} /> <span className='text-sm text-white/60'>per person</span>
                        </p>
                        <dl className='mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 text-sm'>
                            <dt className='text-white/60'>Golf</dt>
                            <dd className='text-right tabular-nums'><Price thb={summary.golfTotal} /></dd>
                            <dt className='text-white/60'>Day trips</dt>
                            <dd className='text-right tabular-nums'><Price thb={summary.tripsTotal} /></dd>
                        </dl>
                        <p className='mt-4 text-xs leading-5 text-white/50'>
                            Golf includes green fees and hotel transfers (carts where included). Day trips are a private car and
                            driver for your group; entrance fees, food and hotels are not included.
                            {summary.hasProposed ? ' Some prices are still being confirmed.' : ''}
                        </p>
                    </div>
                    <Link
                        href={whatsappWithText(enquiryText)}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-disabled={summary.rounds === 0}
                        className={`btn-lux-gold inline-flex items-center justify-center gap-2 ${
                            summary.rounds === 0 ? 'pointer-events-none opacity-40' : ''
                        }`}>
                        Send my week on WhatsApp
                        <ArrowUpRight className='size-3.5' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WeekPlanner;
