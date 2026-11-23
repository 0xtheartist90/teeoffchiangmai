import { Star, StarHalf } from 'lucide-react';

type Props = {
    rating: number;
    className?: string;
    /** Star size in Tailwind units, e.g. 'size-4' or 'size-5'. */
    size?: string;
    /** Shows "Northbound package rating" beside the stars. */
    showLabel?: boolean;
};

const RatingStars = ({ rating, className = 'text-[#c9a85a]', size = 'size-4', showLabel = false }: Props) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;

    return (
        <span className='inline-flex flex-wrap items-center gap-x-3 gap-y-1'>
            <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Northbound package rating ${rating} out of 5`}>
                {Array.from({ length: full }).map((_, i) => (
                    <Star key={i} className={`${size} fill-current`} />
                ))}
                {half ? <StarHalf className={`${size} fill-current`} /> : null}
                {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
                    <Star key={`e${i}`} className={`${size} opacity-30`} />
                ))}
            </span>
            {showLabel ? (
                <span className='text-[0.62rem] font-semibold tracking-[0.2em] text-slate-500 uppercase'>Northbound package rating</span>
            ) : null}
        </span>
    );
};

export default RatingStars;
