'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { ArrowRight, ArrowUpRight, Clock, X } from 'lucide-react';

import { Price } from '@/app/currency';
import { sightseeingTrips, whatsappWithText } from '@/app/golf-data';

type Trip = (typeof sightseeingTrips)[number];

const ViewPlan = ({ small = false }: { small?: boolean }) => (
    <span
        className={`inline-flex w-fit items-center gap-1.5 font-semibold tracking-[0.2em] text-white/85 uppercase transition group-hover:text-white ${
            small ? 'text-[0.58rem]' : 'text-[0.62rem]'
        }`}>
        View day plan
        <ArrowRight className='size-3 transition group-hover:translate-x-0.5' />
    </span>
);

/** "Between rounds" day-trip cards; clicking a card opens its day plan in a modal. */
const SightseeingTrips = () => {
    const [open, setOpen] = useState<Trip | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    const big = sightseeingTrips.slice(0, 3);
    const small = sightseeingTrips.slice(3);

    return (
        <>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
                {big.map((item, index) => (
                    <button
                        key={item.id}
                        type='button'
                        onClick={() => setOpen(item)}
                        aria-haspopup='dialog'
                        data-reveal='card'
                        style={{ transitionDelay: `${index * 90}ms` }}
                        className='group relative isolate flex aspect-[4/5] cursor-pointer flex-col justify-end overflow-hidden rounded-md p-6 text-left text-white focus-visible:ring-2 focus-visible:ring-[#c9a85a] focus-visible:ring-offset-2 focus-visible:outline-none'>
                        <img
                            alt={item.name}
                            src={item.image}
                            className='absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0)_40%,rgba(10,28,20,0.85)_100%)]' />
                        <h3 className='travel-display text-3xl'>{item.name}</h3>
                        <p className='mt-2 text-sm text-white/75'>{item.text}</p>
                        <div className='mt-4 grid gap-2 border-t border-white/25 pt-3'>
                            <p className='text-sm text-white/80'>
                                From{' '}
                                <span className='travel-display text-2xl text-[#e2c886]'>
                                    <Price thb={item.price} />
                                </span>{' '}
                                per car
                            </p>
                            <ViewPlan />
                        </div>
                    </button>
                ))}
            </div>
            <div className='mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                {small.map((item, index) => (
                    <button
                        key={item.id}
                        type='button'
                        onClick={() => setOpen(item)}
                        aria-haspopup='dialog'
                        data-reveal='card'
                        style={{ transitionDelay: `${index * 90}ms` }}
                        className='group relative isolate flex aspect-[4/3] cursor-pointer flex-col justify-end overflow-hidden rounded-md p-5 text-left text-white focus-visible:ring-2 focus-visible:ring-[#c9a85a] focus-visible:ring-offset-2 focus-visible:outline-none'>
                        <img
                            alt={item.name}
                            src={item.image}
                            className='absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.15)_0%,rgba(10,28,20,0.9)_75%)]' />
                        <h3 className='travel-display text-2xl leading-tight'>{item.name}</h3>
                        <p className='mt-1 text-xs text-white/75'>{item.text}</p>
                        <div className='mt-3 grid gap-1.5'>
                            <p className='text-xs text-white/80'>
                                From{' '}
                                <span className='travel-display text-xl text-[#e2c886]'>
                                    <Price thb={item.price} />
                                </span>{' '}
                                per car
                            </p>
                            <ViewPlan small />
                        </div>
                    </button>
                ))}
            </div>

            {/* Day plan modal */}
            <dialog
                ref={dialogRef}
                onClose={() => setOpen(null)}
                onClick={(e) => {
                    // click on the backdrop closes
                    if (e.target === e.currentTarget) setOpen(null);
                }}
                aria-labelledby='trip-dialog-title'
                className='m-auto max-h-[92svh] w-[min(42rem,calc(100vw-1.5rem))] overflow-hidden rounded-md bg-[#f8f5ee] p-0 text-slate-900 shadow-2xl backdrop:bg-[#0c241a]/70 backdrop:backdrop-blur-sm'>
                {open ? (
                    <div data-lenis-prevent className='max-h-[92svh] overflow-y-auto overscroll-contain'>
                        <div className='relative h-52 sm:h-64'>
                            <img src={open.image} alt={open.name} className='absolute inset-0 h-full w-full object-cover' />
                            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,20,0.2)_0%,rgba(10,28,20,0.85)_100%)]' />
                            <button
                                type='button'
                                onClick={() => setOpen(null)}
                                aria-label='Close'
                                className='absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#14382a] transition hover:bg-white'>
                                <X className='size-4' />
                            </button>
                            <div className='absolute inset-x-0 bottom-0 p-6 text-white sm:p-8'>
                                <h3 id='trip-dialog-title' className='travel-display text-4xl leading-none sm:text-5xl'>
                                    {open.name}
                                </h3>
                                <p className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80'>
                                    <span className='inline-flex items-center gap-1.5'>
                                        <Clock className='size-3.5' />
                                        {open.duration}
                                    </span>
                                    <span>
                                        From{' '}
                                        <span className='font-semibold text-[#e2c886]'>
                                            <Price thb={open.price} />
                                        </span>{' '}
                                        per car
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className='p-6 sm:p-8'>
                            <p className='text-base text-slate-600'>{open.text}</p>

                            <p className='mt-7 text-[0.62rem] font-semibold tracking-[0.24em] text-[#9a7b3c] uppercase'>
                                Your day
                            </p>
                            <ol className='mt-4 grid'>
                                {open.plan.map((stop, i) => (
                                    <li key={stop.title} className='relative grid grid-cols-[1.25rem_1fr] gap-4 pb-5 last:pb-0'>
                                        {i < open.plan.length - 1 ? (
                                            <span className='absolute top-5 bottom-0 left-[0.6rem] w-px bg-[#c9a85a]/40' />
                                        ) : null}
                                        <span className='relative mt-1.5 size-[0.7rem] justify-self-center rounded-full border-2 border-[#c9a85a] bg-[#f8f5ee]' />
                                        <div>
                                            {'time' in stop && stop.time ? (
                                                <p className='text-[0.66rem] font-semibold tracking-[0.18em] text-slate-500 uppercase'>
                                                    {stop.time}
                                                </p>
                                            ) : null}
                                            <p className='travel-display text-xl leading-snug text-[#14382a]'>{stop.title}</p>
                                            <p className='mt-0.5 text-sm text-slate-600'>{stop.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <p className='mt-7 rounded-md bg-[#efe9dc] px-4 py-3 text-xs leading-5 text-slate-600'>
                                Private car and driver for your group, with hotel pickup and drop-off. The route is flexible — tell us
                                what you’d like to see.
                            </p>

                            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                                <Link
                                    href={whatsappWithText(
                                        `Hi, I'd like to add the ${open.name} day trip to our golf holiday. Our dates and group size are: `
                                    )}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                                    Ask about this trip
                                    <ArrowUpRight className='size-3.5' />
                                </Link>
                                <a
                                    href='#plan-your-week'
                                    onClick={() => setOpen(null)}
                                    className='btn-lux-ghost inline-flex items-center justify-center gap-2'>
                                    Add to my week
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </dialog>
        </>
    );
};

export default SightseeingTrips;
