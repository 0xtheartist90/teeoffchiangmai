import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating, className = 'text-[#c9a85a]' }: { rating: number; className?: string }) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;

    return (
        <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Package rating ${rating} out of 5`}>
            {Array.from({ length: full }).map((_, i) => (
                <Star key={i} className='size-4 fill-current' />
            ))}
            {half ? <StarHalf className='size-4 fill-current' /> : null}
            {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
                <Star key={`e${i}`} className='size-4 opacity-30' />
            ))}
        </span>
    );
};

export default RatingStars;
