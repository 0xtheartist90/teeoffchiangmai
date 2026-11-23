import Link from 'next/link';

import { ArrowUpRight, Star } from 'lucide-react';

import { formatReviewDate, googleProfile, googleReviews } from '@/app/reviews-data';

export const GoogleLogo = ({ className = 'size-5' }: { className?: string }) => (
    <svg aria-hidden='true' className={className} viewBox='0 0 24 24'>
        <path
            fill='#4285F4'
            d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z'
        />
        <path
            fill='#34A853'
            d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.55 7.7 23 12 23Z'
        />
        <path
            fill='#FBBC05'
            d='M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z'
        />
        <path
            fill='#EA4335'
            d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 4 3.45 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z'
        />
    </svg>
);

/** Google reviews of Chiang Mai Driver by May, clearly labelled with their source. */
const GoogleReviewsBanner = ({ limit = 3 }: { limit?: number }) => (
    <div className='grid gap-5 lg:grid-cols-[0.8fr_2.2fr]'>
        <div data-reveal='text-left' className='flex flex-col justify-between gap-6 rounded-md bg-[#10291f] p-6 text-white sm:p-7'>
            <div>
                <div className='flex items-center gap-3'>
                    <span className='flex size-10 items-center justify-center rounded-full bg-white'>
                        <GoogleLogo />
                    </span>
                    <p className='text-[0.62rem] font-semibold tracking-[0.24em] text-white/70 uppercase'>Google reviews</p>
                </div>
                <p className='travel-display mt-5 text-5xl leading-none'>{googleProfile.rating.toFixed(1)}</p>
                <div className='mt-2 flex gap-1 text-[#e2c886]'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className='size-4 fill-current' />
                    ))}
                </div>
                <p className='mt-3 text-sm text-white/70'>
                    {googleProfile.count} reviews of <span className='text-white'>{googleProfile.name}</span>, our private tour
                    service — the same team arranges your golf.
                </p>
            </div>
            <Link
                href={googleProfile.url}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-lux-gold inline-flex items-center justify-center gap-2'>
                Read all reviews on Google
                <ArrowUpRight className='size-3.5' />
            </Link>
        </div>

        <div className='grid gap-5 md:grid-cols-3'>
            {googleReviews.slice(0, limit).map((review, index) => (
                <Link
                    key={review.href}
                    href={review.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    data-reveal='card'
                    style={{ transitionDelay: `${index * 90}ms` }}
                    className='lux-card group flex flex-col p-6'>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex gap-0.5 text-[#c9a85a]'>
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className='size-3.5 fill-current' />
                            ))}
                        </div>
                        <GoogleLogo className='size-4' />
                    </div>
                    <p className='mt-4 line-clamp-6 flex-1 text-sm leading-6 text-slate-600'>“{review.text}”</p>
                    {review.photos?.length ? (
                        <div className='mt-4 flex gap-2'>
                            {review.photos.slice(0, 3).map((src) => (
                                <img key={src} src={src} alt='' className='size-14 rounded-[3px] object-cover' />
                            ))}
                        </div>
                    ) : null}
                    <div className='mt-5 border-t border-[#14382a]/10 pt-4'>
                        <p className='travel-display text-lg leading-tight text-[#14382a]'>{review.name}</p>
                        <p className='mt-0.5 text-xs text-slate-500'>
                            {formatReviewDate(review.date)} · Chiang Mai Driver by May
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

export default GoogleReviewsBanner;
