"use client";

import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

export default function PricingSection() {
  const { data: pricingData, loading } = useFirebaseData<any>('landing/pricing');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
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

  const getPrice = (plan: any, type: 'monthly' | 'yearly', defaultPrice: number) => {
      if (!plan) return defaultPrice;
      const pricesObj = type === 'monthly' ? (plan.monthlyPrices || plan.MonthlyPrices || {}) : (plan.yearlyPrices || plan.YearlyPrices || {});
      const basePrice = type === 'monthly' ? (plan.monthlyPrice || plan.MonthlyPrice) : (plan.yearlyPrice || plan.YearlyPrice);
      
      const currencyCode = (currencyOptions.currency as string).toUpperCase();
      const exactPrice = Object.entries(pricesObj).find(([k]) => k.toUpperCase() === currencyCode)?.[1];
      
      return (exactPrice as number) ?? basePrice ?? defaultPrice;
  };

  if (loading) return <SectionSkeleton />;

  const plans: any[] = pricingData?.plans || [];

  return (
    <section id="pricing" className="py-12 sm:py-36 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-wide uppercase text-apple-accent">{pricingData?.header?.eyebrow || 'Pricing'}</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text mt-3 mb-6">
                {pricingData?.header?.title || 'Plans that grow with your business.'}
            </h2>
            <p className="text-lg text-apple-textMuted">
                {pricingData?.header?.subtitle || "Start lean, scale when you're ready."}
            </p>

            <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-100 border border-gray-200 mt-6">
                <button 
                    onClick={() => setBilling('monthly')} 
                    className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${billing === 'monthly' ? 'bg-white text-apple-text shadow-sm' : 'text-apple-textMuted hover:text-apple-text'}`}
                >
                    Monthly
                </button>
                <button 
                    onClick={() => setBilling('yearly')} 
                    className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${billing === 'yearly' ? 'bg-white text-apple-text shadow-sm' : 'text-apple-textMuted hover:text-apple-text'}`}
                >
                    Annual <span className="text-emerald-600 font-bold">(Save ~20%)</span>
                </button>
            </div>
        </div>

        <div className={`grid gap-6 items-stretch max-w-7xl mx-auto ${
          plans.length <= 3 ? 'md:grid-cols-3 max-w-6xl' : 'md:grid-cols-2 lg:grid-cols-4'
        }`}>
            {plans.map((plan: any, idx: number) => {
                const isPopular = plan.popular === true;
                const isAnnualOnly = plan.annualOnly === true;
                const isPerUser = plan.perUser === true;
                const showMonthlyFlat = billing === 'monthly' && isAnnualOnly;

                // For annual-only plans, force yearly display
                const effectiveBilling = isAnnualOnly ? 'yearly' : billing;
                const price = getPrice(plan, effectiveBilling, 0);

                return (
                    <div
                        key={idx}
                        className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                            isPopular
                                ? 'bg-white border-2 border-apple-accent shadow-2xl relative transform lg:-translate-y-2'
                                : 'bg-white border border-gray-200 shadow-apple-card hover:shadow-apple-hover'
                        }`}
                    >
                        {/* Popular badge */}
                        {isPopular && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-apple-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                {plan.badge || 'Most Popular'}
                            </div>
                        )}

                        <div className="space-y-5">
                            {/* Plan name & subtitle */}
                            <div>
                                <h3 className="text-xl font-bold text-apple-text">{plan.name || 'Plan'}</h3>
                                <p className="text-xs text-apple-textMuted mt-1">{plan.subtitle || plan.description || ''}</p>
                            </div>

                            {/* Price */}
                            <div>
                                {isAnnualOnly && billing === 'monthly' ? (
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-extrabold text-apple-text tracking-tight font-sans">
                                                {formatCurrency(getPrice(plan, 'monthly', 0))}
                                            </span>
                                            <span className="text-sm text-apple-textMuted">/ month</span>
                                        </div>
                                        <p className="text-[11px] text-amber-600 font-semibold mt-1.5 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1 inline-block">
                                            Annual commitment only
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-extrabold text-apple-text tracking-tight price-val font-sans">
                                            {formatCurrency(price)}
                                        </span>
                                        <span className="text-sm text-apple-textMuted">
                                            {isPerUser ? '/ user / month' : '/ month'}
                                        </span>
                                    </div>
                                )}

                                {/* Flat note */}
                                {plan.flatNote && (
                                    <p className="text-[11px] text-slate-500 mt-2 leading-snug">
                                        {plan.flatNote}
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-2.5 text-sm text-slate-700 pt-4 border-t border-gray-100">
                                {(plan.features || []).map((feature: string, fIdx: number) => (
                                    <li key={fIdx} className={`flex items-start gap-2 ${fIdx === 0 && idx > 0 ? 'font-semibold' : ''}`}>
                                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${fIdx === 0 && idx > 0 ? 'text-apple-accent' : 'text-emerald-500'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className={`w-full mt-7 py-3 rounded-full font-semibold text-sm transition-all ${
                                isPopular
                                    ? 'bg-apple-accent hover:bg-apple-accentHover text-white shadow-md'
                                    : 'bg-slate-100 hover:bg-slate-200 text-apple-text'
                            }`}
                        >
                            {plan.ctaText || 'Get Started'}
                        </button>
                    </div>
                );
            })}
        </div>
    </section>
  );
}
