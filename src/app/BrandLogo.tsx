type BrandLogoProps = {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'md' | 'lg';
};

const sizes = {
    sm: { mark: 'size-9', title: 'text-xl', sub: 'text-[0.6rem]' },
    md: { mark: 'size-11', title: 'text-2xl', sub: 'text-[0.65rem]' },
    lg: { mark: 'size-20 sm:size-24', title: 'text-5xl sm:text-6xl', sub: 'text-xs sm:text-sm' }
} as const;

/** Text wordmark until a designed logo file is available. */
const BrandLogo = ({ variant = 'dark', size = 'md' }: BrandLogoProps) => {
    const s = sizes[size];
    const textColor = variant === 'dark' ? 'text-[#14382a]' : 'text-white';
    const subColor = variant === 'dark' ? 'text-[#8a6a2a]' : 'text-[#e4c98a]';

    return (
        <span className='inline-flex items-center gap-2.5'>
            <svg aria-hidden='true' className={`${s.mark} flex-none`} viewBox='0 0 48 48' fill='none'>
                <circle cx='24' cy='24' r='23' fill={variant === 'dark' ? '#14382a' : 'rgba(255,255,255,0.12)'} />
                <circle cx='24' cy='24' r='23' stroke='#c9a85a' strokeWidth='1.5' />
                <path d='M20 12v24' stroke='#f6efe0' strokeWidth='2' strokeLinecap='round' />
                <path d='M20 12.5l11 4.5-11 4.5z' fill='#c9a85a' />
                <ellipse cx='24' cy='36.5' rx='9' ry='2.2' fill='#3f8a5a' />
                <circle cx='29' cy='34' r='2.2' fill='#f6efe0' />
            </svg>
            <span className='flex flex-col leading-none'>
                <span className={`travel-display ${s.title} ${textColor} tracking-tight`}>Tee Off</span>
                <span className={`${s.sub} ${subColor} mt-1 font-semibold tracking-[0.28em] uppercase`}>
                    Chiang Mai
                </span>
            </span>
        </span>
    );
};

export default BrandLogo;
