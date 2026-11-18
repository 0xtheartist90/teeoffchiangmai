'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Currency = 'THB' | 'EUR' | 'USD';
export const currencies: Currency[] = ['THB', 'EUR', 'USD'];

/** Fallback rates (1 THB = x), ECB via Frankfurter on 2026-11-17. Live rates replace these on load. */
const FALLBACK_RATES: Record<Currency, number> = { THB: 1, EUR: 0.026891, USD: 0.029551 };
const STORAGE_KEY = 'teeoff-currency';

type CurrencyState = {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    rates: Record<Currency, number>;
};

const CurrencyContext = createContext<CurrencyState>({
    currency: 'THB',
    setCurrency: () => {},
    rates: FALLBACK_RATES
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrencyState] = useState<Currency>('THB');
    const [rates, setRates] = useState(FALLBACK_RATES);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
            if (saved && currencies.includes(saved)) setCurrencyState(saved);
        } catch {
            // storage unavailable: keep THB
        }

        fetch('https://api.frankfurter.dev/v1/latest?from=THB&to=EUR,USD')
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data?.rates?.EUR && data?.rates?.USD) {
                    setRates({ THB: 1, EUR: data.rates.EUR, USD: data.rates.USD });
                }
            })
            .catch(() => {
                // offline or blocked: fallback rates stay
            });
    }, []);

    const setCurrency = (c: Currency) => {
        setCurrencyState(c);
        try {
            window.localStorage.setItem(STORAGE_KEY, c);
        } catch {
            // ignore
        }
    };

    return <CurrencyContext.Provider value={{ currency, setCurrency, rates }}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => useContext(CurrencyContext);

const symbols: Record<Currency, string> = { THB: '', EUR: '€', USD: '$' };

export const formatMoney = (thb: number, currency: Currency, rates: Record<Currency, number>) => {
    if (currency === 'THB') return `${Math.round(thb).toLocaleString('en-US')} THB`;
    const value = Math.round(thb * rates[currency]);

    return `${symbols[currency]}${value.toLocaleString('en-US')}`;
};

/** Displays a THB amount in the visitor's chosen currency. */
export const Price = ({ thb }: { thb: number }) => {
    const { currency, rates } = useCurrency();

    return <>{formatMoney(thb, currency, rates)}</>;
};

/** THB / EUR / USD toggle. */
export const CurrencySelector = ({ light = false, className = '' }: { light?: boolean; className?: string }) => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div
            role='group'
            aria-label='Currency'
            className={`inline-flex items-center rounded-full border p-0.5 ${
                light ? 'border-white/35' : 'border-[#14382a]/20'
            } ${className}`}>
            {currencies.map((c) => (
                <button
                    key={c}
                    type='button'
                    aria-pressed={currency === c}
                    onClick={() => setCurrency(c)}
                    className={`rounded-full px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] transition ${
                        currency === c
                            ? light
                                ? 'bg-white text-[#14382a]'
                                : 'bg-[#14382a] text-white'
                            : light
                              ? 'text-white/75 hover:text-white'
                              : 'text-[#14382a]/65 hover:text-[#14382a]'
                    }`}>
                    {c}
                </button>
            ))}
        </div>
    );
};
