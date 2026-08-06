"use client";

import { Flame, ArrowRight } from 'lucide-react';

export default function CRM360Section() {
    return (
        <section id="view360" className="py-12 sm:py-24 bg-white border-y border-gray-200/80 px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold tracking-wide uppercase text-apple-accent">Module 8 — 360° Client Profile</span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text mt-3 mb-6">
                        Every customer, one complete picture.
                    </h2>
                    <p className="text-lg text-apple-textMuted">
                        Open any contact to inspect every connected deal, quote, invoice, communication log, and AI lead score in a single view.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-gray-200 max-w-5xl mx-auto shadow-apple-card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-apple-accent text-white font-bold text-xl flex items-center justify-center shadow-md">
                                AC
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Acme Corporation</h3>
                                <p className="text-sm text-apple-textMuted">Contact: Sarah Jenkins (VP Growth) · Tech Industry</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1">
                                <Flame className="w-3.5 h-3.5" /> Lead Score: HOT (92/100)
                            </span>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
                                Active Client
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                            <div className="text-xs font-bold text-slate-400 uppercase">Linked Deals</div>
                            <div className="font-bold text-slate-800 text-base">Annual Retainer 2026</div>
                            <div className="text-xs text-emerald-600 font-semibold">$48,000 / year · Probability: 95%</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                            <div className="text-xs font-bold text-slate-400 uppercase">Latest Invoices</div>
                            <div className="font-bold text-slate-800 text-base">#INV-9902 ($4,000)</div>
                            <div className="text-xs text-blue-600 font-semibold">Status: Paid via Stripe</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                            <div className="text-xs font-bold text-slate-400 uppercase">Activity History</div>
                            <div className="text-xs text-slate-700"><strong>Today:</strong> Quote #Q-8821 accepted</div>
                            <div className="text-xs text-slate-500"><strong>Yesterday:</strong> WhatsApp chat reply sent</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-xl shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>Explore 360° profiles</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
