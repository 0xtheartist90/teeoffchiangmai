type PageHeroProps = {
    title: string;
    subtitle?: string;
    image?: string;
};

const PageHero = ({ title, subtitle, image = '/images/how-it-works.webp' }: PageHeroProps) => {
    const heroBackground = {
        backgroundImage: `linear-gradient(90deg, rgba(8,30,20,0.9) 0%, rgba(8,30,20,0.62) 43%, rgba(8,30,20,0.12) 100%), radial-gradient(circle at 20% 20%, rgba(201,168,90,0.22), transparent 30%), linear-gradient(180deg, rgba(8,30,20,0.06) 0%, rgba(8,30,20,0.72) 100%), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } as const;

    return (
        <section className='relative flex min-h-[340px] items-center overflow-hidden text-white sm:min-h-[380px] lg:min-h-[420px]' style={heroBackground}>
            <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div data-reveal='page-hero' className='mx-auto max-w-4xl text-center'>
                    <h1 className='travel-display text-5xl leading-[0.92] text-white sm:text-7xl'>{title}</h1>
                    {subtitle ? <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/84'>{subtitle}</p> : null}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
