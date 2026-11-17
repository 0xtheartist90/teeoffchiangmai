import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { faqs } from '@/app/content';
import { bookingLink } from '@/app/golf-data';
import { patternedLight } from '@/app/section-backgrounds';
import { Button } from '@/registry/new-york-v4/ui/button';

export const metadata: Metadata = {
    title: 'FAQ | Tee Off Chiang Mai',
    description:
        'Frequently asked questions about golf days in Chiang Mai: what’s included, rental clubs and caddies, group bookings, deposits and rain checks.'
};

const FaqPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />
            <PageHero title='Frequently Asked Questions' eyebrow='FAQ' image='/images/golf/summit-green-valley/aerial-wide.webp' />

            <section className='relative py-12 sm:py-14' style={patternedLight}>
                <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                    <h2 className='travel-display mt-2 text-3xl text-[#14382a]'>Good to know before you tee off</h2>
                    <div className='mt-7 grid gap-4'>
                        {faqs.map((faq, index) => (
                            <article
                                data-reveal='faq-item'
                                style={{ transitionDelay: `${index * 65}ms` }}
                                key={faq.question}
                                className='rounded-lg border border-[#dfcfb4] bg-white/80 p-6 shadow-sm backdrop-blur-sm'>
                                <div className='flex flex-col gap-3 sm:flex-row sm:gap-5'>
                                    <span className='flex size-10 flex-none items-center justify-center rounded-full bg-[#e6efe2] text-sm font-semibold text-[#2f7a4b]'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className='text-xl font-semibold text-[#14382a]'>{faq.question}</h3>
                                        <p className='mt-3 leading-7 text-slate-700'>{faq.answer}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className='mt-10 flex flex-col items-start gap-3 rounded-lg border border-[#dcc6a5] bg-[#f6efe2] p-6 sm:flex-row sm:items-center sm:justify-between'>
                        <p className='text-base font-semibold text-[#14382a]'>Still have a question? Ask us on WhatsApp.</p>
                        <Button asChild className='btn-lux'>
                            <Link href={bookingLink} target='_blank' rel='noopener noreferrer'>
                                Book on WhatsApp
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

export default FaqPage;
