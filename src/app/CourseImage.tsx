import { Flag } from 'lucide-react';

type CourseImageProps = {
    src?: string;
    alt: string;
    caption?: string;
    className?: string;
    imgClassName?: string;
};

/** Shows the approved photo, or a branded placeholder until one is added to golf-data.ts. */
const CourseImage = ({ src, alt, caption, className = '', imgClassName = '' }: CourseImageProps) => {
    const position = /\babsolute\b/.test(className) ? '' : 'relative';

    if (src) {
        return (
            <div className={`${position} overflow-hidden ${className}`}>
                <img alt={alt} src={src} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
            </div>
        );
    }

    return (
        <div
            role='img'
            aria-label={`${alt} (photo coming soon)`}
            className={`${position} overflow-hidden bg-[radial-gradient(circle_at_70%_80%,#4f9a68_0%,#2f7a4b_30%,#1d5236_62%,#14382a_100%)] ${className}`}>
            <svg aria-hidden='true' className='absolute inset-0 h-full w-full opacity-25' preserveAspectRatio='none' viewBox='0 0 400 300'>
                {Array.from({ length: 9 }).map((_, i) => (
                    <ellipse key={i} cx='290' cy='240' rx={40 + i * 38} ry={22 + i * 22} fill='none' stroke='#e4c98a' strokeWidth='1' />
                ))}
            </svg>
            <div className='absolute inset-x-0 top-[22%] flex flex-col items-center gap-2 text-white/80'>
                <Flag className='size-7 text-[#e4c98a]' />
                {caption ? <span className='px-3 text-center text-xs font-semibold tracking-[0.14em] uppercase'>{caption}</span> : null}
            </div>
        </div>
    );
};

export default CourseImage;
