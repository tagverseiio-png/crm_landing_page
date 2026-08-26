"use client";

import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

export default function ComparisonSection() {
    const { data: comparisonData, loading } = useFirebaseData<any[]>('landing/comparison');
    const safeData = comparisonData || [];

    const [currencyOptions, setCurrencyOptions] = useState<Intl.NumberFormatOptions>({
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    useEffect(() => {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
            let currencyCode = 'USD';
            
            if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India')) currencyCode = 'INR';
            else if (tz.includes('Europe') || tz.includes('Berlin') || tz.includes('Paris') || tz.includes('Madrid') || tz.includes('Rome')) currencyCode = 'EUR';
            else if (tz.includes('London')) currencyCode = 'GBP';
            else if (tz.includes('Australia')) currencyCode = 'AUD';
            else if (tz.includes('Toronto') || tz.includes('Vancouver')) currencyCode = 'CAD';
            else if (tz.includes('Dubai')) currencyCode = 'AED';
            else if (tz.includes('Singapore')) currencyCode = 'SGD';
            else if (tz.includes('Tokyo')) currencyCode = 'JPY';
            else if (tz.includes('Auckland')) currencyCode = 'NZD';
            else if (tz.includes('Johannesburg')) currencyCode = 'ZAR';
            else {
                const locale = navigator.language || 'en-US';
                const countryMatch = locale.match(/-([A-Z]{2})/i);
                const country = countryMatch ? countryMatch[1].toUpperCase() : '';
                const currencyMap: Record<string, string> = {
                    'US': 'USD', 'GB': 'GBP', 'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR',
                    'IN': 'INR', 'JP': 'JPY', 'AU': 'AUD', 'CA': 'CAD', 'BR': 'BRL', 'ZA': 'ZAR'
                };
                if (country && currencyMap[country]) currencyCode = currencyMap[country];
            }
            
            setCurrencyOptions({
                style: 'currency',
                currency: currencyCode,
                maximumFractionDigits: 0
            });
        } catch (e) {
            // fallback
        }
    }, []);

    const formatCurrency = (amount: number) => {
        try {
            return new Intl.NumberFormat(undefined, currencyOptions).format(amount);
        } catch (e) {
            return "$" + amount.toLocaleString();
        }
    };

    const totalCost = safeData.reduce((acc, curr) => acc + curr.cost, 0);

    if (loading) return <SectionSkeleton />;

    return (
        <section className="py-12 sm:py-36 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
                    Replace your fragmented tech stack.
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                    Stop paying for 8 different tools that don't even talk to each other.
                </p>
            </div>

            <div className="bg-slate-50/50 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 p-6 bg-slate-100 border-b border-slate-200 font-bold text-slate-700 text-sm sm:text-base uppercase tracking-wider">
                    <div className="col-span-12 sm:col-span-5">Features</div>
                    <div className="col-span-12 sm:col-span-4 hidden sm:block text-center">Replaces</div>
                    <div className="col-span-6 sm:col-span-1 text-center">Other tools</div>
                    <div className="col-span-6 sm:col-span-2 text-center text-blue-600">Velora</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-100">
                    {safeData.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 p-4 sm:p-6 items-center hover:bg-white transition-colors duration-200">
                            <div className="col-span-12 sm:col-span-5 font-bold text-slate-800 text-sm sm:text-base">
                                {item.feature}
                            </div>
                            <div className="col-span-12 sm:col-span-4 hidden sm:flex justify-center gap-2 flex-wrap">
                                {item.replaces.map((tool, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <div className="col-span-6 sm:col-span-1 text-center font-bold text-slate-500">
                                {formatCurrency(item.cost)}/mo
                            </div>
                            <div className="col-span-6 sm:col-span-2 flex justify-center">
                                <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20">
                                    <CheckCircle2 className="w-4 h-4" /> Included
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800">
                    <div className="text-center sm:text-left">
                        <div className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-1">Overall Price of other tools</div>
                        <div className="text-3xl font-black text-slate-300 line-through decoration-rose-500/70">{formatCurrency(totalCost)}/mo</div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-12 bg-slate-700"></div>

                    <div className="text-center sm:text-right flex items-center gap-6">
                        <div>
                            <div className="text-blue-300 font-bold uppercase tracking-wider text-sm mb-1">Velora Price</div>
                            <div className="text-4xl font-black text-white">{formatCurrency(97)}<span className="text-lg text-blue-200 font-bold">/mo</span></div>
                        </div>
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Start your journey
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
