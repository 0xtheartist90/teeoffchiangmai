import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight, Check, Minus } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { bookingLink, golfCourses, priceExcludes, priceIncludes } from '@/app/golf-data';
import CourseCard from '@/app/golf-tours/CourseCard';
import { patternedLight, beigeSection } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

export const metadata: Metadata = {
    title: 'Golf Tours | Tee Off Chiang Mai',
    description:
        'Golf day tours in Chiang Mai: seven courses from Hang Dong to Alpine, with green fee and private hotel transfers included. Prices for 1–4 golfers.'
};

const GolfToursPage = () => {
    return (
        <main className='bg-[#f8f3ea] text-slate-900'>
            <SiteHeader />

            <PageHero
                title='Golf Tours'
                subtitle='Seven Chiang Mai courses, one easy booking. Green fee and private hotel transfers included in every golf day.'
            />

            <section className='border-b border-[#e5d6c0] py-8' style={beigeSection}>
                <div className='mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-[1.3fr_0.7fr] lg:px-8'>
                    <div>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Every golf day includes</p>
                        <ul className='mt-3 grid gap-2'>
                            {priceIncludes.map((item) => (
                                <li key={item} className='flex gap-2 text-sm leading-6 text-slate-700'>
                                    <Check className='mt-0.5 size-4 flex-none text-[#2f7a4b]' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Paid separately</p>
                        <ul className='mt-3 grid gap-2'>
                            {priceExcludes.map((item) => (
                                <li key={item} className='flex gap-2 text-sm leading-6 text-slate-700'>
                                    <Minus className='mt-0.5 size-4 flex-none text-slate-400' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className='mt-3 text-xs leading-5 text-slate-500'>
                            Need rental clubs or a caddie? Tell us when you book and we&apos;ll confirm the charges first.
                        </p>
                    </div>
                </div>
            </section>

            <section className='relative py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='mb-8 max-w-2xl'>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Golf day tours</p>
                        <h2 className='travel-display mt-2 text-4xl text-[#14382a] sm:text-5xl'>Choose your course</h2>
                        <p className='mt-3 text-base leading-7 text-slate-700'>
                            From a relaxed nine-hole loop close to town to a championship round in the mountains. Prices are
                            per golfer and drop as your group grows. Open “View prices” for rates for 1–4 golfers.
                        </p>
                    </div>

                    <div className='grid items-start gap-5 lg:grid-cols-2'>
                        {golfCourses.map((course) => (
                            <CourseCard key={course.slug} course={course} />
                        ))}
                    </div>

                    <Link
                        href='/golf-holidays'
                        className='group mt-8 flex flex-col gap-1 rounded-lg border border-dashed border-[#c9a85a] bg-white/60 px-5 py-4 text-[#14382a] transition hover:bg-white sm:flex-row sm:items-center sm:justify-between'>
                        <span className='text-sm'>
                            <span className='font-semibold'>Staying longer?</span> We also plan one- and two-week golf holidays
                            in Northern Thailand.
                        </span>
                        <span className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#2f7a4b]'>
                            See golf holidays
                            <ArrowRight className='size-4 transition group-hover:translate-x-1' />
                        </span>
                    </Link>
                </div>
            </section>

            <section className='py-12 text-[#14382a]' style={beigeSection}>
                <div className='mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
                    <div>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Not sure which course?</p>
                        <h2 className='travel-display mt-2 text-3xl sm:text-4xl'>
                            Tell us your date and group, and we&apos;ll help you choose.
                        </h2>
                    </div>
                    <Button asChild size='lg' className='w-fit rounded-full bg-[#2f7a4b] px-6 text-white hover:bg-[#276640]'>
                        <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                            Book on WhatsApp
                            <ArrowRight className='size-4' />
                        </Link>
                    </Button>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default GolfToursPage;
