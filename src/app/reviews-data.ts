/**
 * Google reviews of Chiang Mai Driver by May (the same team operates Tee Off Chiang Mai).
 * Source: the Chiang Mai Driver by May Google Maps profile. Dates are ISO (YYYY-MM-DD); newest first.
 * `photos` takes customer-uploaded review photos (paths under /public) where available.
 */
export type GoogleReview = {
    name: string;
    date: string;
    rating: number;
    href: string;
    text: string;
    photos?: string[];
};

export const googleProfile = {
    name: 'Chiang Mai Driver by May',
    rating: 5.0,
    count: 141,
    url: 'https://www.google.com/maps?cid=10535154499033229546'
};

export const chiangMaiDriverUrl = 'https://chiang-mai-driver.com';

const reviews: GoogleReview[] = [
    {
        name: 'Ngam Kai Sien',
        date: '2026-06-02',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pCTVpUaE1VbTR4TVdSVlNteDBOMkpPUW5oSmNGRRAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'Great driver. Very friendly and professional. Love the trip to Doi Ithanon'
    },
    {
        name: 'Björn Wijbenga',
        date: '2026-06-02',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25GSFUweFFabTkwYW1ob05FZDJWMlZNWWsxUU1uYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'May has been the driver that you’d wish for. Quick response, great fun, and makes sure you’re taken good care off. Very mindful of travel wishes. We did a 8-day trip with her. Recommended for anyone who wants to visit Chiang Mai and area.'
    },
    {
        name: 'Josue Bolaños Alvarez',
        date: '2026-05-30',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT210V0xWOHlkbVE0YVRocWJWOWFZVUk1U21Vd1ZuYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'Great service if you\'re looking for something more private! They picked us up from our hotel and took us to Chiang Rai. They offer the option of a guided tour or just the driver, which is what we chose.'
    },
    {
        name: 'Daniëlla Snijders',
        date: '2026-05-29',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pGR2FEQlVTMlZWZVhsYVpEWnFiRzB0TFZSc1RsRRAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'We had a wonderful week with May. She drives safely and is punctual with appointments. She showed us the most beautiful places in Chiang Rai, Pai, and Chiang Mai. May speaks fluent English and is very easy to get along with. Friendly, helpful, and attentive.'
    },
    {
        name: 'Leanne Singh',
        date: '2026-05-14',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21kR1dFRkplRWhyVkRGa2RtRTFRalpxV2xWSFVsRRAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'Very trustworthy and professional. We loved our day trip'
    },
    {
        name: 'Rachel Goh',
        date: '2026-05-14',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21nMlJHdGpaWFppYVVoV00wOTVjbTQ1TjBaWFoyYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        text: 'It was a very good trip and transport well organized. I will definitely look for May again when I go to Chiang Mai. Highly recommended'
    }
];

/** Newest first. */
export const googleReviews = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

/** English date, e.g. "2 June 2026". */
export const formatReviewDate = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
