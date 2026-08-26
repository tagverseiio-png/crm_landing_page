"use client";

import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PricingSection() {
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

  return (
    <section id="pricing" className="py-12 sm:py-36 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-wide uppercase text-apple-accent">Simple, Transparent Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text mt-3 mb-6">
                Pick the plan that matches how far you want to take it.
            </h2>
            <p className="text-lg text-apple-textMuted">
                Start free today. Scale as your agency team and revenue pipeline grow.
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
                    Annual <span className="text-emerald-600 font-bold">(Save 20%)</span>
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-apple-card flex flex-col justify-between hover:shadow-apple-hover transition-all">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-apple-text">Starter</h3>
                        <p className="text-xs text-apple-textMuted mt-1">Solo founders & small teams</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-apple-text tracking-tight price-val font-sans">
                            {formatCurrency(billing === 'monthly' ? 29 : 23)}
                        </span>
                        <span className="text-sm text-apple-textMuted">/ month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-700 pt-4 border-t border-gray-100">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Leads, Contacts & Deals</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Quotes & Invoicing</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basic KPI Dashboard</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Up to 3 Team Members</li>
                    </ul>
                </div>
                <button 
                    onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                    className="w-full mt-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-apple-text font-semibold text-sm transition-all"
                >
                    Start Starter Pack
                </button>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-apple-accent shadow-2xl relative flex flex-col justify-between transform md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-apple-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-apple-text">Growth</h3>
                        <p className="text-xs text-apple-textMuted mt-1">Agencies actively selling</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-apple-text tracking-tight price-val font-sans">
                            {formatCurrency(billing === 'monthly' ? 79 : 63)}
                        </span>
                        <span className="text-sm text-apple-textMuted">/ month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-700 pt-4 border-t border-gray-100">
                        <li className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-apple-accent" /> Everything in Starter</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Pipeline Automation</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> WhatsApp Cloud API</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Full Workspace & Tasks</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Up to 10 Team Members</li>
                    </ul>
                </div>
                <button 
                    onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                    className="w-full mt-8 py-3 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-semibold text-sm transition-all shadow-md"
                >
                    Start your growth journey
                </button>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-apple-card flex flex-col justify-between hover:shadow-apple-hover transition-all">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-apple-text">Scale</h3>
                        <p className="text-xs text-apple-textMuted mt-1">Multi-team operations</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-apple-text tracking-tight price-val font-sans">
                            {formatCurrency(billing === 'monthly' ? 199 : 159)}
                        </span>
                        <span className="text-sm text-apple-textMuted">/ month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-700 pt-4 border-t border-gray-100">
                        <li className="flex items-center gap-2 font-semibold"><Check className="w-4 h-4 text-apple-accent" /> Everything in Growth</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Ads Connectors (Meta & Google)</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Advanced Event Automations</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> AI Lead Scoring Assistant</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unlimited Team Seats</li>
                    </ul>
                </div>
                <button 
                    onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                    className="w-full mt-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-apple-text font-semibold text-sm transition-all"
                >
                    Contact Enterprise
                </button>
            </div>
        </div>
    </section>
  );
}
