// Source: Northbound_Golf_Master.xlsx — "Website prices" and "Course cards and photos" tabs.
// Internal costs / margins are intentionally NOT stored here.

export const whatsappNumber = '66931246329';
export const whatsappLink = `https://wa.me/${whatsappNumber}`;

export const whatsappWithText = (text: string) => `${whatsappLink}?text=${encodeURIComponent(text)}`;

export const bookingLink = whatsappWithText('Hi, I would like to book a round of golf in Chiang Mai.');
export const holidayLink = whatsappWithText('Hi, I would like to plan a golf holiday in Northern Thailand.');

export type PriceStatus = 'draft' | 'proposed';

export type GolfPackage = {
    /** e.g. "Walking only", "Shared cart", "Cart included" */
    label: string;
    basis: 'walking' | 'cart';
    /** Price per golfer for groups of 1, 2, 3, 4 golfers (THB) */
    perGolfer: [number, number, number, number];
    /** Group total for groups of 1, 2, 3, 4 golfers (THB) */
    total: [number, number, number, number];
};

export type GalleryShot = {
    caption: string;
    /** Add an approved photo path, e.g. /images/golf/alpine/1.webp */
    src?: string;
};

export type GolfCourse = {
    slug: string;
    name: string;
    shortName: string;
    rating: number;
    format: string;
    playOptions: string;
    drivingRange: boolean;
    description: string;
    /** Hero photo for the card. Leave empty until an approved photo is available. */
    image?: string;
    gallery: GalleryShot[];
    /** "proposed" prices still need to be confirmed before going live. */
    priceStatus: PriceStatus;
    packages: GolfPackage[];
};

export const golfCourses: GolfCourse[] = [
    {
        slug: 'hang-dong',
        name: 'Hang Dong Golf Club',
        shortName: 'Hang Dong',
        rating: 3.5,
        format: '2 × 9 holes',
        playOptions: 'Walking only',
        drivingRange: false,
        description: 'A relaxed budget round on a compact nine-hole layout. Walk the course twice for a full 18 holes.',
        image: '/images/golf/hang-dong/cover.webp',
        gallery: [
            { caption: 'Lake and palms', src: '/images/golf/hang-dong/cover.webp' },
            { caption: 'Approach to a green' },
            { caption: 'Walking path' }
        ],
        priceStatus: 'draft',
        packages: [
            {
                label: 'Walking only',
                basis: 'walking',
                perGolfer: [2600, 1700, 1300, 1200],
                total: [2600, 3400, 3900, 4800]
            }
        ]
    },
    {
        slug: 'sand-creek',
        name: 'Sand Creek Golf Course',
        shortName: 'Sand Creek',
        rating: 3.5,
        format: '2 × 9 holes',
        playOptions: 'Walking or shared cart',
        drivingRange: false,
        description:
            'A compact nine-hole course with enough challenge to make the second loop interesting. Walk or share a cart.',
        image: '/images/golf/sand-creek/cover.webp',
        gallery: [
            { caption: 'Green and approach', src: '/images/golf/sand-creek/cover.webp' },
            { caption: 'Fairway' },
            { caption: 'Golf cart' }
        ],
        priceStatus: 'draft',
        packages: [
            {
                label: 'Walking',
                basis: 'walking',
                perGolfer: [2500, 1600, 1300, 1100],
                total: [2500, 3200, 3900, 4400]
            },
            {
                label: 'Shared cart',
                basis: 'cart',
                perGolfer: [2900, 1800, 1600, 1300],
                total: [2900, 3600, 4800, 5200]
            }
        ]
    },
    {
        slug: 'pimantip',
        name: 'Pimantip Golf Club',
        shortName: 'Pimantip',
        rating: 4,
        format: '2 × 9 holes',
        playOptions: 'Cart included',
        drivingRange: true,
        description: 'A convenient city course. Warm up at the driving range before playing two loops of nine.',
        image: '/images/golf/pimantip/cover.webp',
        gallery: [
            { caption: 'Lake and mountain view', src: '/images/golf/pimantip/cover.webp' },
            { caption: 'Green' },
            { caption: 'Driving range' }
        ],
        priceStatus: 'draft',
        packages: [
            {
                label: 'Cart included',
                basis: 'cart',
                perGolfer: [4800, 3700, 3300, 3100],
                total: [4800, 7400, 9900, 12400]
            }
        ]
    },
    {
        slug: 'lanna',
        name: 'Lanna Golf Course',
        shortName: 'Lanna',
        rating: 4,
        format: '18 holes',
        playOptions: 'Cart included',
        drivingRange: true,
        description:
            'A long-established Chiang Mai club popular with local golfers. Play a classic round close to town.',
        image: '/images/golf/lanna/cover.webp',
        gallery: [
            { caption: 'Tree-lined fairway', src: '/images/golf/lanna/cover.webp' },
            { caption: 'Tee-box view' },
            { caption: 'Driving range' }
        ],
        priceStatus: 'draft',
        packages: [
            {
                label: 'Cart included',
                basis: 'cart',
                perGolfer: [4900, 3700, 3300, 3100],
                total: [4900, 7400, 9900, 12400]
            }
        ]
    },
    {
        slug: 'highlands',
        name: 'Chiang Mai Highlands Golf & Spa Resort',
        shortName: 'Chiang Mai Highlands',
        rating: 4.5,
        format: '18 holes',
        playOptions: 'Cart included',
        drivingRange: true,
        description: 'A scenic Mae On resort course with mountain views and well-placed bunkers that reward accuracy.',
        image: '/images/golf/highlands/cover.webp',
        gallery: [
            { caption: 'Mountain-backed fairway', src: '/images/golf/highlands/mountain-fairway.webp' },
            { caption: 'Bunker-framed green', src: '/images/golf/highlands/bunker-green.webp' },
            { caption: 'Sunrise over the course', src: '/images/golf/highlands/sunrise.webp' }
        ],
        // TODO: confirm before publishing
        priceStatus: 'proposed',
        packages: [
            {
                label: 'Cart included',
                basis: 'cart',
                perGolfer: [6700, 5400, 4800, 4600],
                total: [6700, 10800, 14400, 18400]
            }
        ]
    },
    {
        slug: 'summit-green-valley',
        name: 'Summit Green Valley Chiang Mai',
        shortName: 'Summit Green Valley',
        rating: 5,
        format: '18 holes',
        playOptions: 'Cart included',
        drivingRange: true,
        description: 'A premium par-72 course in Mae Rim with palm-lined fairways, mountain views and water hazards.',
        image: '/images/golf/summit-green-valley/cover.webp',
        gallery: [
            { caption: 'Palm-lined fairway', src: '/images/golf/summit-green-valley/palm-lined-fairway.webp' },
            { caption: 'Water hole', src: '/images/golf/summit-green-valley/water-hole.webp' },
            { caption: 'Clubhouse', src: '/images/golf/summit-green-valley/clubhouse.webp' }
        ],
        // TODO: confirm before publishing
        priceStatus: 'proposed',
        packages: [
            {
                label: 'Cart included',
                basis: 'cart',
                perGolfer: [8000, 6600, 6100, 5800],
                total: [8000, 13200, 18300, 23200]
            }
        ]
    },
    {
        slug: 'alpine',
        name: 'Alpine Golf Resort Chiang Mai',
        shortName: 'Alpine',
        rating: 5,
        format: '18 holes',
        playOptions: 'Cart included',
        drivingRange: true,
        description:
            'Our flagship championship golf day. Set among mountains, Alpine hosted the Chiangmai Golf Classic.',
        image: '/images/golf/alpine/cover.webp',
        gallery: [
            { caption: 'Lakeside green and hotel', src: '/images/golf/alpine/lakeside-green.webp' },
            { caption: 'Lake and bunkers', src: '/images/golf/alpine/lake-bunkers.webp' },
            { caption: 'Mountain panorama', src: '/images/golf/alpine/mountain-panorama.webp' },
            { caption: 'Driving range', src: '/images/golf/alpine/driving-range.webp' },
            { caption: 'Clubhouse', src: '/images/golf/alpine/clubhouse.webp' }
        ],
        priceStatus: 'draft',
        packages: [
            {
                label: 'Cart included',
                basis: 'cart',
                perGolfer: [9800, 7900, 7200, 6900],
                total: [9800, 15800, 21600, 27600]
            }
        ]
    }
];

export const groupSizes = [1, 2, 3, 4] as const;

export const priceIncludes = [
    '18-hole green fee',
    'Private round-trip hotel transfers (within 20 km of Chiang Mai city centre)',
    'Golf cart where the package says “cart included”',
    'Hotel pickup between 6:00 and 11:00 AM, depending on your tee time',
    'Optional convenience-store or lunch stop on the way'
];

export const priceExcludes = ['Caddie charges', 'Club rental', 'Food and drinks'];

export const formatThb = (value: number) => `${value.toLocaleString('en-US')} THB`;

/** Lowest per-golfer price for the course (always the 4-golfer rate of the cheapest package). */
export const getLeadPrice = (course: GolfCourse) => {
    const cheapest = course.packages.reduce((best, pkg) => (pkg.perGolfer[3] < best.perGolfer[3] ? pkg : best));

    return {
        amount: cheapest.perGolfer[3],
        groupSize: 4,
        basis: cheapest.basis,
        label: cheapest.label
    };
};

export const formatLeadPrice = (course: GolfCourse) => {
    const lead = getLeadPrice(course);
    const basis = lead.basis === 'walking' ? 'walking' : 'cart';

    return `From ${formatThb(lead.amount)} per golfer · group of ${lead.groupSize} · ${basis}`;
};

export const getCourseEnquiryLink = (course: GolfCourse) =>
    whatsappWithText(`Hi, I would like to check tee times for ${course.name}.`);

// ---- Golf holiday packages (per week) ----

export type HolidayTier = 'essential' | 'classic' | 'premium';
export const roundsPerWeekOptions = [2, 3, 4] as const;
export type RoundsPerWeek = (typeof roundsPerWeekOptions)[number];

export const holidayTiers: {
    id: HolidayTier;
    name: string;
    tagline: string;
    /** Course slugs in order of preference; the first N are used for N rounds. */
    courses: string[];
}[] = [
    {
        id: 'essential',
        name: 'Essential',
        tagline: 'Relaxed, great-value rounds close to town.',
        courses: ['sand-creek', 'hang-dong', 'pimantip', 'lanna']
    },
    {
        id: 'classic',
        name: 'Classic',
        tagline: 'Classic Chiang Mai clubs plus a mountain resort course.',
        courses: ['lanna', 'highlands', 'pimantip', 'summit-green-valley']
    },
    {
        id: 'premium',
        name: 'Premium',
        tagline: 'The region’s championship and resort courses.',
        courses: ['alpine', 'summit-green-valley', 'highlands', 'lanna']
    }
];

const findCourse = (slug: string) => golfCourses.find((course) => course.slug === slug)!;

/** Cheapest package rate per golfer for a given group size (1–4). */
const roundPrice = (course: GolfCourse, groupSize: 1 | 2 | 3 | 4) =>
    Math.min(...course.packages.map((pkg) => pkg.perGolfer[groupSize - 1]));

export const getHolidayPackage = (tierId: HolidayTier, rounds: RoundsPerWeek) => {
    const tier = holidayTiers.find((t) => t.id === tierId)!;
    const courses = tier.courses.slice(0, rounds).map(findCourse);
    const perGolfer = (groupSize: 1 | 2 | 3 | 4) => courses.reduce((sum, c) => sum + roundPrice(c, groupSize), 0);

    return {
        tier,
        rounds,
        courses,
        golfFromPerGolfer4: perGolfer(4),
        golfFromPerGolfer2: perGolfer(2),
        includesProposedPrices: courses.some((c) => c.priceStatus === 'proposed')
    };
};

// ---- Sightseeing day trips (prices from Chiang Mai Driver tours: private car + driver for the group) ----

export const sightseeingTrips = [
    { id: 'doi-inthanon', name: 'Doi Inthanon', price: 3200 },
    { id: 'sticky-waterfall', name: 'Doi Suthep & Sticky Waterfall', price: 2400 },
    { id: 'chiang-rai', name: 'Chiang Rai & White Temple', price: 3400 },
    { id: 'temples', name: 'Temple & Culture Tour', price: 1900 },
    { id: 'half-day', name: 'Half-day mountain temples', price: 1200 },
    { id: 'grand-canyon', name: 'Chiang Mai Grand Canyon', price: 1500 },
    { id: 'own-route', name: 'Your own route (8 hours)', price: 2700 }
] as const;

export type SightseeingTripId = (typeof sightseeingTrips)[number]['id'];
export const getTrip = (id: string) => sightseeingTrips.find((t) => t.id === id) ?? sightseeingTrips[0];
