"use client";

import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Velora CRM used for?",
      a: "An all-in-one workspace for agencies to manage leads, deals, quotes, invoicing, and projects — in one real-time platform instead of scattered tools."
    },
    {
      q: "How does Velora turn a won deal into cash?",
      a: "Quotes convert to invoices in one click, payments process via Stripe or bank transfer, and the deal auto-marks \"Won\" with a receipt."
    },
    {
      q: "What is the 360° Client Profile?",
      a: "A single screen showing a contact's deals, invoices, communication history, and lead score, all in one view."
    },
    {
      q: "What integrations does Velora offer?",
      a: "Native connections to WhatsApp, website webhooks, Meta Ads, Google Analytics, Stripe, and Clearbit — all from the deal view."
    },
    {
      q: "How does Velora capture and assign leads?",
      a: "Leads come in via website forms and WhatsApp, then get auto-assigned to reps by service type with automatic lead scoring."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-36 px-6 max-w-4xl mx-auto">
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
      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
          className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-xl shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          <span>Get started now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
