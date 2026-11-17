import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight, BedDouble, CalendarRange, CarFront, Flag, MapPinned } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { sightseeing } from '@/app/content';
import { holidayLink } from '@/app/golf-data';
import { beigeSection, patternedLight } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

export const metadata: Metadata = {
    title: 'Golf Holidays | Tee Off Chiang Mai',
    description:
        'One- and two-week golf holidays in Northern Thailand. Play courses around Chiang Mai and Chiang Rai with sightseeing, overnight stays and private transport arranged for your group.'
};


const arrangements = [
    { title: 'Tee times', text: 'Your choice of courses around Chiang Mai and Chiang Rai.', icon: Flag },
    { title: 'Private transport', text: 'One driver and vehicle for the group, with space for golf bags.', icon: CarFront },
    { title: 'Overnight stays', text: 'Hotels arranged where your route needs them.', icon: BedDouble },
    { title: 'Sightseeing', text: 'Days out between rounds, planned around your pace.', icon: MapPinned }
];

const GolfHolidaysPage = () => {
    return (
        <main className='bg-[#f8f3ea] text-slate-900'>
            <SiteHeader />

            <PageHero
                title='Golf Holidays'
                subtitle='One- and two-week golf holidays in Northern Thailand'
                image='/images/holidays/doi-inthanon.webp'
            />

            <section className='relative py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8'>
                    <div data-reveal='text-left'>
                        <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Golf + Northern Thailand</p>
                        <h2 className='travel-display mt-3 text-4xl leading-tight text-[#14382a] sm:text-5xl'>
                            Rounds in the mountains, days out in between.
                        </h2>
                        <div className='mt-5 grid gap-4 text-base leading-8 text-slate-700'>
                            <p>
                                Play your choice of courses around Chiang Mai and Chiang Rai, with time between rounds to explore
                                Northern Thailand. Spend a day at Doi Inthanon, visit Sticky Waterfall, or see the White Temple in
                                Chiang Rai. We can arrange overnight stays, private transport, tee times, and sightseeing around
                                your group’s travel dates.
                            </p>
                            <p>
                                Tell us how long you’re staying, how many rounds you’d like to play, and what else you’d like to
                                see. We’ll put together an itinerary and a quote for your group.
                            </p>
                        </div>
                        <Button asChild size='lg' className='mt-7 rounded-full bg-[#2f7a4b] px-6 text-white hover:bg-[#276640]'>
                            <Link href={holidayLink} target='_blank' rel='noopener noreferrer'>
                                Plan My Golf Holiday
                                <ArrowRight className='size-4' />
                            </Link>
                        </Button>
                    </div>

                    <div className='grid gap-3 sm:grid-cols-2'>
                        {arrangements.map(({ title, text, icon: Icon }, index) => (
                            <div
                                key={title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 80}ms` }}
                                className='rounded-lg border border-[#dfcfb4] bg-[#fffaf2]/86 p-5 shadow-sm'>
                                <span className='flex size-11 items-center justify-center rounded-md bg-[#e6efe2] text-[#2f7a4b]'>
                                    <Icon className='size-5' />
                                </span>
                                <h3 className='mt-3 text-base font-semibold text-[#14382a]'>{title}</h3>
                                <p className='mt-1 text-sm leading-6 text-slate-600'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative py-14 sm:py-16' style={beigeSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <p className='text-sm font-semibold tracking-[0.22em] text-[#8a6a2a] uppercase'>Between rounds</p>
                    <h2 className='travel-display mt-2 text-4xl text-[#14382a] sm:text-5xl'>Ideas for your days off the course</h2>
                    <div className='mt-8 grid gap-5 md:grid-cols-3'>
                        {sightseeing.map((item, index) => (
                            <article
                                key={item.title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 90}ms` }}
                                className='overflow-hidden rounded-lg border border-[#dfcfb4] bg-white shadow-sm'>
                                <img alt={item.title} src={item.image} className='h-52 w-full object-cover' />
                                <div className='p-5'>
                                    <h3 className='travel-display text-2xl text-[#14382a]'>{item.title}</h3>
                                    <p className='mt-2 text-sm leading-6 text-slate-600'>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative py-12 sm:py-14' style={patternedLight}>
                <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                    <div className='rounded-lg border border-[#dcc6a5] bg-white/76 px-6 py-8 text-center shadow-sm sm:px-8'>
                        <CalendarRange className='mx-auto size-8 text-[#c9a85a]' />
                        <h2 className='travel-display mt-3 text-3xl text-[#14382a] sm:text-4xl'>
                            How long are you staying, and how many rounds?
                        </h2>
                        <p className='mx-auto mt-3 max-w-xl text-base leading-7 text-slate-700'>
                            Send us your travel dates, group size, and the sights you’d like to see. We’ll reply with an itinerary
                            and a group quote.
                        </p>
                        <Button asChild size='lg' className='mt-6 rounded-full bg-[#2f7a4b] px-6 text-white hover:bg-[#276640]'>
                            <Link href={holidayLink} target='_blank' rel='noopener noreferrer'>
                                Plan My Golf Holiday
                                <ArrowRight className='size-4' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};

export default GolfHolidaysPage;
