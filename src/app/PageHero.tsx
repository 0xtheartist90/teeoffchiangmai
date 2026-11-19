import type { ReactNode } from 'react';

type PageHeroProps = {
    title: ReactNode;
    subtitle?: string;
    eyebrow?: string;
    image?: string;
    children?: ReactNode;
};

const PageHero = ({ title, subtitle, image = '/images/golf/alpine/cover.webp', children }: PageHeroProps) => (
    <section
        className='relative isolate flex min-h-[78svh] items-end overflow-hidden text-white lg:h-[640px] lg:min-h-0'
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,28,20,0.45)_0%,rgba(10,28,20,0.25)_40%,rgba(10,28,20,0.85)_100%)]' />
        <div className='mx-auto w-full max-w-[90rem] px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8'>
            <div data-reveal='page-hero' className='max-w-3xl'>
                <h1 className='travel-display text-[3rem] leading-[0.95] text-white sm:text-7xl'>{title}</h1>
                {subtitle ? <p className='mt-5 max-w-2xl text-base text-white/82 sm:text-lg'>{subtitle}</p> : null}
                {children ? <div className='mt-8'>{children}</div> : null}
            </div>
        </div>
    </section>
);

export default PageHero;
