import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowUpRight, Mail, Plus } from 'lucide-react';

import PageHero from '@/app/PageHero';
import SiteFooter from '@/app/SiteFooter';
import SiteHeader from '@/app/SiteHeader';
import { faqGroups } from '@/app/content';
import { bookingLink } from '@/app/golf-data';

export const metadata: Metadata = {
    title: 'FAQ | Tee Off Chiang Mai',
    description:
        'Questions about golf in Chiang Mai: what’s included, pickup times, rental clubs and caddies, golf holiday packages, deposits and rain checks.'
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const FaqPage = () => {
    return (
        <main className='bg-[#f8f5ee] text-slate-900'>
            <SiteHeader />
            <PageHero
                title={
                    <>
                        Good to know
                        <br />
                        <span className='text-[#e2c886] italic'>before you tee off</span>
                    </>
                }
                subtitle='Golf days, golf holidays and booking — the questions we hear most.'
                image='/images/golf/summit-green-valley/aerial-wide.webp'
            />

            <section className='py-16 sm:py-24'>
                <div className='mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8'>
                    {/* Sticky side panel */}
                    <aside className='order-2 lg:sticky lg:top-28 lg:order-1 lg:self-start'>
                        <nav className='hidden lg:block'>
                            <ul className='grid gap-1 border-l border-[#14382a]/12'>
                                {faqGroups.map((group) => (
                                    <li key={group.title}>
                                        <a
                                            href={`#${slug(group.title)}`}
                                            className='-ml-px block border-l border-transparent py-2 pl-5 text-[0.7rem] font-semibold tracking-[0.2em] text-[#14382a]/60 uppercase transition hover:border-[#c9a85a] hover:text-[#14382a]'>
                                            {group.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className='overflow-hidden rounded-md bg-[#10291f] text-white lg:mt-10'>
                            <img
                                src='/images/golf/sand-creek/sunset-green.webp'
                                alt=''
                                aria-hidden='true'
                                className='h-36 w-full object-cover'
                            />
                            <div className='p-6'>
                                <p className='travel-display text-3xl leading-tight'>
                                    Still have a <span className='text-[#e2c886] italic'>question?</span>
                                </p>
                                <p className='mt-2 text-sm text-white/70'>Message us — we’re happy to help you plan.</p>
                                <Link
                                    href={bookingLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn-lux-gold mt-6 inline-flex w-full items-center justify-center gap-2'>
                                    Ask on WhatsApp
                                    <ArrowUpRight className='size-3.5' />
                                </Link>
                                <a
                                    href='mailto:travel@chiang-mai-driver.com'
                                    className='mt-4 flex items-center justify-center gap-2 text-xs text-white/60 transition hover:text-white'>
                                    <Mail className='size-3.5' />
                                    travel@chiang-mai-driver.com
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Questions */}
                    <div className='order-1 grid gap-14 lg:order-2'>
                        {faqGroups.map((group, groupIndex) => (
                            <div key={group.title} id={slug(group.title)} className='scroll-mt-28'>
                                <h2 className='travel-display text-[2.2rem] leading-tight text-[#14382a] sm:text-[2.6rem]'>
                                    {group.title}
                                </h2>
                                <div className='mt-5 border-t border-[#14382a]/15'>
                                    {group.items.map((faq, index) => (
                                        <details
                                            key={faq.question}
                                            open={groupIndex === 0 && index === 0}
                                            className='group border-b border-[#14382a]/15'>
                                            <summary className='flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden'>
                                                <span className='travel-display text-xl leading-snug text-[#14382a] transition group-hover:text-[#1f4c39] sm:text-[1.45rem]'>
                                                    {faq.question}
                                                </span>
                                                <span className='flex size-8 flex-none items-center justify-center rounded-full border border-[#c9a85a]/70 text-[#14382a] transition duration-300 group-open:rotate-45 group-open:bg-[#14382a] group-open:text-white'>
                                                    <Plus className='size-3.5' />
                                                </span>
                                            </summary>
                                            <p className='max-w-2xl pb-6 text-[0.95rem] leading-7 text-slate-600'>{faq.answer}</p>
                                        </details>
                                    ))}
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

export default FaqPage;
