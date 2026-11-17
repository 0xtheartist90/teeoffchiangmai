import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { services, whyIntro } from '@/app/content';
import { bookingLink } from '@/app/golf-data';
import { beigeSection, patternedLight } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

export const metadata: Metadata = {
    title: 'Why Choose Us | Tee Off Chiang Mai',
    description:
        'Over five years arranging private tours in Northern Thailand. Tee Off Chiang Mai handles tee times, green fees, rental clubs and private transport for your golf day.'
};

const WhyChooseUsPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />
            <PageHero title='Why Tee Off Chiang Mai?' eyebrow='Why choose us' image='/images/golf/lanna/cover.webp' />

            <section className='relative py-14 sm:py-16' style={patternedLight}>
                <div className='mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8'>
                    <div data-reveal='text-left'>
                        <h2 className='travel-display mt-4 max-w-2xl text-4xl leading-tight text-[#14382a] sm:text-5xl'>
                            We handle the booking. You play the round.
                        </h2>
                        <p className='mt-6 text-base leading-8 text-slate-700'>{whyIntro}</p>
                        <Button asChild className='btn-lux mt-7'>
                            <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                Book on WhatsApp
                                <ArrowRight className='size-4' />
                            </Link>
                        </Button>
                    </div>
                    <div data-reveal='image-left' className='overflow-hidden rounded-2xl shadow-xl ring-1 ring-[#dfcfb4]'>
                        <img alt='Mountains of Northern Thailand' src='/images/how-it-works.webp' className='h-[380px] w-full object-cover sm:h-[440px]' />
                    </div>
                </div>
            </section>

            <section className='relative py-14 sm:py-16' style={beigeSection}>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                    <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                        {services.map(({ title, text, icon: Icon }, index) => (
                            <div
                                key={title}
                                data-reveal='card'
                                style={{ transitionDelay: `${index * 80}ms` }}
                                className='lux-card flex gap-4 p-6'>
                                <span className='lux-icon flex-none'>
                                    <Icon className='size-5' />
                                </span>
                                <div>
                                    <h3 className='text-lg font-semibold text-[#14382a]'>{title}</h3>
                                    <p className='mt-2 text-sm leading-7 text-slate-600'>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <SiteFooter />
        </main>
    );
};

export default WhyChooseUsPage;
