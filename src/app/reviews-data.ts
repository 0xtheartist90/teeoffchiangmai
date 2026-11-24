/**
 * Google reviews of Chiang Mai Driver by May (the same team operates Tee Off Chiang Mai).
 * Source: the Chiang Mai Driver by May Google Maps profile. Dates are ISO (YYYY-MM-DD); Google only shows relative dates ("a week ago"), so newer ones are approximate and shown as month + year. Newest first.
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
    count: 212,
    url: 'https://www.google.com/maps?cid=10535154499033229546'
};

export const chiangMaiDriverUrl = 'https://chiang-mai-driver.com';

const reviews: GoogleReview[] = [
    {
        name: "Steve Nelson",
        date: '2026-11-17',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2toNU5HazBXWGxmWldKdFZuazJVRmRKZEVadkxWRRAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB',
        text: "Very professional and punctual. Knowledgeable about the various sites in Chiang Mai and suggested the perfect time to start to catch the sunrise at Doi Suthep! Would definitely recommend!",
        photos: ['/images/reviews/steve-1.webp', '/images/reviews/steve-2.webp', '/images/reviews/steve-3.webp']
    },
    {
        name: "James Watson",
        date: '2026-10-27',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tSRk1rNVhSelJtZUc1VWEyaGFXaTFwWDFWb1JXYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB',
        text: "Incredible day trip from Chiang Mai to Chiang Rai with May. Very responsive in coordinating the trip and accommodating to assure we saw the things important to us and to add on alternative drop site at an elephant sanctuary instead of original hotel of pick up even though added considerably to her drive time. It allowed us to make the most of our short time in the area. Day of the trip she was engaging, knowledgeable and flexible. She gave us the right amount of guidance at sites and room/ time to explore our own. Never felt rushed. 10+/10 experience.",
        photos: ['/images/reviews/james-1.webp', '/images/reviews/james-2.webp', '/images/reviews/james-3.webp']
    },
    {
        name: "Desmond Tan",
        date: '2026-10-15',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21kVU0ybDVXak52TkVoSGRVWktaa3RHYWxoMVlrRRAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB',
        text: "We had a wonderful experience with Jira, who drove our family of three from Chiang Mai to Chiang Rai. Along the way, we visited the hot springs, the beautiful White Temple and the stunning Blue Temple. Jira is an excellent driver who speaks English well. She is friendly, patient, helpful, and always made sure we were comfortable throughout the journey. Highly recommended!",
        photos: ['/images/reviews/desmond-1.webp', '/images/reviews/desmond-2.webp', '/images/reviews/desmond-3.webp']
    },
    {
        name: "Sharon McKenna",
        date: '2026-09-24',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21GM05sTkJkM1YxYzBaRldraHBjbkZOZFZwbVJuYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB',
        text: "We had a fantastic day on our private hire trip and really enjoyed the whole experience. Our driver was punctual, friendly and great company throughout the day. The highlight was definitely getting to feed the elephants. Overall, we had a brilliant day and would definitely recommend the trip. A great mix of adventure, wildlife, good food and lots of laughs. Thank you for a lovely day!",
        photos: ['/images/reviews/sharon-1.webp', '/images/reviews/sharon-2.webp', '/images/reviews/sharon-3.webp']
    },
    {
        name: "Ly Sengmany",
        date: '2026-07-24',
        rating: 5,
        href: 'https://www.google.com/maps/reviews/@18.6949273,98.7904762,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tjMFJtVkhOM1Y1UTJJd2NHRjBNa3RFZG1rdGJXYxAB!2m1!1s0x0:0x9234633300bbe8ea?hl=en-GB',
        text: "We spent 3 wonderful days with our family, including elderly parent and kids. From the very beginning to the end, the service was outstanding. Communication was excellent, everything was well organized, and May was always flexible, punctual, and incredibly kind. Would I recommend this agency? Absolutely. And if we return to Chiang Mai, we’ll definitely book with May again.",
        photos: ['/images/reviews/ly-1.webp', '/images/reviews/ly-2.webp', '/images/reviews/ly-3.webp']
    },
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

/** English month and year, e.g. "June 2026" (Google only gives relative dates, so no exact day). */
export const formatReviewDate = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
