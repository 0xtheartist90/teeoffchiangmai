import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import RevealEffects from '@/app/RevealEffects';
import SmoothScroll from '@/app/SmoothScroll';
import { CurrencyProvider } from '@/app/currency';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const display = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Tee Off Chiang Mai | Golf Tours in Chiang Mai & Northern Thailand',
    description:
        'Play golf in Chiang Mai and Northern Thailand. Tee Off Chiang Mai arranges your tee time, green fee, and private hotel pickup and drop-off.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${display.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class'>
                    <SmoothScroll />
                    <RevealEffects />
                    <CurrencyProvider>{children}</CurrencyProvider>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
