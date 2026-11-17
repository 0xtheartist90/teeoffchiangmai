import type { GolfCourse } from '@/app/golf-data';
import { formatThb, groupSizes } from '@/app/golf-data';

const PriceTable = ({ course }: { course: GolfCourse }) => (
    <div className='grid gap-4'>
        {course.packages.map((pkg) => (
            <div key={pkg.label} className='overflow-hidden rounded-lg border border-[#e3d6bf] bg-white'>
                <div className='flex items-center justify-between gap-3 border-b border-[#eadfcb] bg-[#f6efe2] px-2.5 py-2 sm:px-4.5'>
                    <p className='text-sm font-semibold text-[#14382a]'>{pkg.label}</p>
                    <span
                        className={`rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${
                            pkg.basis === 'walking' ? 'bg-[#efe4cf] text-[#8a6a2a]' : 'bg-[#dcebdf] text-[#1f5a3d]'
                        }`}>
                        {pkg.basis === 'walking' ? 'Walking' : 'Cart'}
                    </span>
                </div>
                <table className='w-full text-[0.8rem] whitespace-nowrap sm:text-sm'>
                    <thead>
                        <tr className='text-left text-xs tracking-[0.08em] text-slate-500 uppercase'>
                            <th className='px-2.5 py-2 sm:px-4 font-medium'>Golfers</th>
                            <th className='px-2.5 py-2 sm:px-4 text-right font-medium'>Per golfer</th>
                            <th className='px-2.5 py-2 sm:px-4 text-right font-medium'>Group total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupSizes.map((size, i) => (
                            <tr key={size} className='border-t border-[#f0e7d8]'>
                                <td className='px-2.5 py-2 sm:px-4 font-medium text-[#14382a]'>
                                    {size} {size === 1 ? 'golfer' : 'golfers'}
                                </td>
                                <td className='px-2.5 py-2 sm:px-4 text-right font-semibold text-[#14382a] tabular-nums'>
                                    {formatThb(pkg.perGolfer[i])}
                                </td>
                                <td className='px-2.5 py-2 sm:px-4 text-right text-slate-600 tabular-nums'>{formatThb(pkg.total[i])}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
        <p className='text-xs leading-5 text-slate-500'>
            Includes 18-hole green fee and private round-trip hotel transfers within 20 km of Chiang Mai city centre
            {course.packages.some((p) => p.basis === 'cart') ? ', plus golf cart where shown' : ''}. Caddie, club rental, food and
            drinks are paid separately. Larger group? Ask us for a quote.
        </p>
    </div>
);

export default PriceTable;
