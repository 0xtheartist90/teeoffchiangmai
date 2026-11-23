'use client';

import { useEffect, useRef } from 'react';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type LightboxShot = { src: string; caption: string };

type Props = {
    shots: LightboxShot[];
    /** Index of the open photo, or null when closed. */
    index: number | null;
    onChange: (index: number | null) => void;
    title?: string;
};

/** Full-screen photo viewer with previous/next, keyboard arrows and Escape. */
const Lightbox = ({ shots, index, onChange, title }: Props) => {
    const ref = useRef<HTMLDialogElement>(null);
    const open = index !== null;

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    const go = (delta: number) => {
        if (index === null) return;
        onChange((index + delta + shots.length) % shots.length);
    };

    const shot = index !== null ? shots[index] : null;

    return (
        <dialog
            ref={ref}
            onClose={() => onChange(null)}
            onKeyDown={(e) => {
                if (e.key === 'ArrowRight') go(1);
                if (e.key === 'ArrowLeft') go(-1);
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onChange(null);
            }}
            aria-label={title ? `${title} photos` : 'Photos'}
            className='m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[#07140e]/92'>
            {shot ? (
                <div
                    className='flex h-full w-full flex-col items-center justify-center gap-4 px-3 py-14 sm:px-16'
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onChange(null);
                    }}>
                    <img
                        key={shot.src}
                        src={shot.src}
                        alt={shot.caption}
                        className='max-h-[78dvh] w-auto max-w-full rounded-md object-contain shadow-2xl'
                    />
                    <p className='text-center text-sm text-white/80'>
                        {shot.caption}
                        {shots.length > 1 ? (
                            <span className='ml-2 text-white/50 tabular-nums'>
                                {index! + 1} / {shots.length}
                            </span>
                        ) : null}
                    </p>
                </div>
            ) : null}

            <button
                type='button'
                onClick={() => onChange(null)}
                aria-label='Close photos'
                className='fixed top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-[#14382a] transition hover:bg-white'>
                <X className='size-4' />
            </button>
            {shots.length > 1 ? (
                <>
                    <button
                        type='button'
                        onClick={() => go(-1)}
                        aria-label='Previous photo'
                        className='fixed top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:left-5'>
                        <ChevronLeft className='size-5' />
                    </button>
                    <button
                        type='button'
                        onClick={() => go(1)}
                        aria-label='Next photo'
                        className='fixed top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:right-5'>
                        <ChevronRight className='size-5' />
                    </button>
                </>
            ) : null}
        </dialog>
    );
};

export default Lightbox;
