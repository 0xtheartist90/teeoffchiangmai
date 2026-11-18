import { CarFront, Flag, Users, Wrench } from 'lucide-react';

export const steps = [
    {
        title: 'Tell us what you have in mind',
        text: 'Send us your preferred date, number of golfers, hotel, and the course you’d like to play. If you haven’t picked a course, we can help you choose.'
    },
    {
        title: 'We put the day together',
        text: 'We check tee-time availability, confirm your price, and arrange your transfers, golf cart, caddie, or rental clubs as needed.'
    },
    {
        title: 'We pick you up',
        text: 'Your driver takes you from your hotel to the course and brings you back after your round. Multi-day trips can be arranged the same way.'
    }
];

export const whyIntro =
    'We’ve spent over five years arranging private and custom tours in Chiang Mai and across Northern Thailand. We love golf ourselves, and after hearing from so many guests who wanted to play while visiting, we started Tee Off Chiang Mai to make booking a round easier.';

export const services = [
    {
        title: 'Tee times and green fees',
        text: 'Tell us where you’d like to play and we’ll check availability, coordinate the booking, and explain what’s included in your price.',
        icon: Flag
    },
    {
        title: 'Golf equipment rental',
        text: 'Travelling without clubs? Let us know what you need and we’ll check rental availability and pricing with the course.',
        icon: Wrench
    },
    {
        title: 'Private transport both ways',
        text: 'We pick you up at your hotel, take you to the course, and bring you back after your round.',
        icon: CarFront
    },
    {
        title: 'Groups and custom trips',
        text: 'From a round with friends to a larger golf group, we coordinate tee times, vehicles, and space for golf bags. Ask us for a group quote.',
        icon: Users
    }
];

export const faqs = [
    {
        question: 'What’s included in the golf day price?',
        answer: 'The listed golf day prices include the 18-hole green fee and private round-trip hotel transfers within 20 km of Chiang Mai city centre. Golf carts are included where shown. Caddie charges, club rental, food, and drinks are paid separately.'
    },
    {
        question: 'Can we stop at a convenience store or have dinner after golf?',
        answer: 'Yes. A quick convenience-store stop on the way to the course or a dinner stop after your round is included when it fits the route. Meals and drinks are paid separately.'
    },
    {
        question: 'Can you arrange rental clubs and caddies?',
        answer: 'Yes. Tell us what you need when you enquire and we’ll check availability and let you know the charges before you book.'
    },
    {
        question: 'Can you arrange a booking for a larger group?',
        answer: 'Yes. Send us the number of golfers, your preferred date, and any transport or equipment needs, and we’ll put together a group quote.'
    },
    {
        question: 'Do I need to pay a deposit?',
        answer: 'Yes. A deposit is required to secure your booking. The deposit is non-refundable if you cancel within 24 hours of your scheduled pickup.'
    },
    {
        question: 'Do you offer rain checks?',
        answer: 'No rain checks are offered.'
    }
];

export const sightseeing = [
    {
        title: 'Doi Inthanon',
        text: 'Thailand’s highest mountain, with waterfalls, viewpoints and the twin royal pagodas.',
        price: 3200,
        image: '/images/holidays/doi-inthanon.webp'
    },
    {
        title: 'Sticky Waterfall',
        text: 'Climb the limestone cascades of Bua Tong, combined with Doi Suthep temple.',
        price: 2400,
        image: '/images/holidays/sticky-waterfall.webp'
    },
    {
        title: 'White Temple, Chiang Rai',
        text: 'Wat Rong Khun and the Big Buddha on a full day trip to Chiang Rai.',
        price: 3400,
        image: '/images/holidays/white-temple.webp'
    }
];

const faqByQuestion = (q: string) => faqs.find((f) => f.question === q)!;

/** FAQ page, grouped. New answers are based on the price sheet and the site's own packages. */
export const faqGroups = [
    {
        title: 'Golf days',
        items: [
            faqByQuestion('What’s included in the golf day price?'),
            {
                question: 'What time is hotel pickup?',
                answer: 'Pickup is between 6:00 and 11:00 AM, depending on your tee time. We confirm the exact time when we book your round.'
            },
            {
                question: 'Do you pick up outside the city centre?',
                answer: 'The listed prices include round-trip transfers within 20 km of Chiang Mai city centre. Staying further out? Tell us where and we’ll confirm the transfer.'
            },
            {
                question: 'Which course should I choose?',
                answer: 'Hang Dong and Sand Creek are relaxed nine-hole layouts close to town. Pimantip and Lanna are classic city courses. Chiang Mai Highlands, Summit Green Valley and Alpine are scenic championship-style rounds. Tell us your level and we’ll suggest one.'
            },
            faqByQuestion('Can you arrange rental clubs and caddies?'),
            faqByQuestion('Can we stop at a convenience store or have dinner after golf?')
        ]
    },
    {
        title: 'Golf holidays',
        items: [
            {
                question: 'How do the golf holiday packages work?',
                answer: 'Choose 2, 3 or 4 rounds per week, then Essential, Classic or Premium courses. The package price covers green fees and hotel transfers on golf days. Hotels and sightseeing days are quoted for your group.'
            },
            {
                question: 'Can I plan my own week?',
                answer: 'Yes. Use the week planner on the Golf Holidays page to pick a course or a day trip for each day. It shows an estimate, and you can send the plan to us on WhatsApp.'
            },
            faqByQuestion('Can you arrange a booking for a larger group?')
        ]
    },
    {
        title: 'Booking & payment',
        items: [
            faqByQuestion('Do I need to pay a deposit?'),
            faqByQuestion('Do you offer rain checks?'),
            {
                question: 'Are prices in euros or dollars?',
                answer: 'Our prices are in Thai baht. The euro and dollar amounts on the site are approximate, based on the latest exchange rate.'
            }
        ]
    }
];
