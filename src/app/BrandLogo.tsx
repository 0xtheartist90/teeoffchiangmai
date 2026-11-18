type BrandLogoProps = {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'md' | 'lg';
};

const heights = { sm: 'h-9', md: 'h-11', lg: 'h-14' } as const;

/** Tee Off Chiang Mai logo. `light` = white text (on dark/photo backgrounds), `dark` = green text (on ivory). */
const BrandLogo = ({ variant = 'dark', size = 'md' }: BrandLogoProps) => (
    <img
        src={variant === 'light' ? '/images/brand/logo-long-light.webp' : '/images/brand/logo-long-dark.webp'}
        alt='Tee Off Chiang Mai'
        width={874}
        height={180}
        className={`${heights[size]} w-auto`}
    />
);

export default BrandLogo;
