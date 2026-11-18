import Link from 'next/link';

import CourseImage from '@/app/CourseImage';
import { formatThb, getHolidayPackage, holidayTiers } from '@/app/golf-data';
import { Price } from '@/app/currency';

import { ArrowUpRight } from 'lucide-react';

/** The three golf holiday packages (Essential, Classic, Premium) as photo cards, priced for 3 rounds. */
const PackageCards = ({ className = '' }: { className?: string }) => (
    <div className={`grid gap-5 md:grid-cols-3 ${className}`}>
        {holidayTiers.map((tier, index) => {
            const pkg = getHolidayPackage(tier.id, 3);
            const cover = tier.image;

            return (
                <Link
                    key={tier.id}
                    href='/golf-holidays#packages'
                    data-reveal='card'
                    style={{ transitionDelay: `${index * 90}ms` }}
                    className='group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-md p-7 text-white'>
                    <CourseImage
                        src={cover}
                        alt={tier.name}
                        className='absolute inset-0 -z-10'
                        imgClassName='transition duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.05)_25%,rgba(10,28,20,0.9)_100%)]' />
                    <h3 className='travel-display text-4xl'>{tier.name}</h3>
                    <p className='mt-2 text-sm text-white/75'>{pkg.courses.map((c) => c.shortName).join(' · ')}</p>
                    <div className='mt-5 flex items-end justify-between border-t border-white/25 pt-4'>
                        <p className='text-sm text-white/80'>
                            3 rounds from
                            <span className='travel-display block text-3xl text-white'>
                                <Price thb={pkg.golfFromPerGolfer4} />
                            </span>
                        </p>
                        <span className='flex size-10 items-center justify-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-[#14382a]'>
                            <ArrowUpRight className='size-4' />
                        </span>
                    </div>
                </Link>
            );
        })}
    </div>
);

export default PackageCards;
