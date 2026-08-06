"use client";

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I connect the tools I already use?",
      a: "Yes — WhatsApp, Meta Ads, and Google Ads are ready today, with Slack, Zapier, and Stripe on the roadmap."
    },
    {
      q: "Do I need a developer to set this up?",
      a: "No — the 5-step setup wizard gets a new company live without any technical setup."
    },
    {
      q: "What happens when a quote is accepted?",
      a: "The invoice is generated automatically and your deal's win probability updates — no manual step needed."
    },
    {
      q: "Can different team members see different things?",
      a: "Yes — five role levels (Owner, Admin, Manager, Employee, Viewer) control exactly what each person can access."
    },
    {
      q: "Is my company's data separated from other companies using the platform?",
      a: "Yes — every workspace is fully isolated by design; there's no shared or cross-visible data between tenants."
    },
    {
      q: "Does it handle GST/tax details for Indian businesses?",
      a: "Yes — GST, PAN, CGST/SGST/IGST are built into company and invoice settings, alongside VAT and general sales tax for other regions."
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-36 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-apple-accent">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text mt-3">
                Everything you need to know.
            </h2>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <button 
                        onClick={() => toggleFaq(idx)} 
                        className="w-full p-6 text-left font-bold text-lg text-slate-900 flex justify-between items-center gap-4 hover:text-apple-accent transition-colors"
                    >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                        <div className="px-6 pb-6 text-apple-textMuted text-base leading-relaxed border-t border-gray-100 pt-4">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
}
