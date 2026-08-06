"use client";

import { Database, KeyRound, ShieldAlert, Clock, ArrowRight } from 'lucide-react';

export default function SecuritySection() {
    return (
        <section id="security" className="py-24 sm:py-36 bg-apple-darkbg text-white relative overflow-hidden">
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sm font-semibold tracking-wide uppercase text-blue-400">Spec Sheet — Security & Privacy</span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
                        Your data, scoped and protected by default.
                    </h2>
                    <p className="text-lg text-gray-400">
                        Enterprise-grade isolation architecture designed for client service organizations holding strict NDAs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass-dark p-8 rounded-3xl border border-apple-darkBorder space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                            <Database className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Tenant Isolation</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Every workspace data model is strictly scoped. No cross-tenant data leakage by design.
                        </p>
                    </div>

                    <div className="glass-dark p-8 rounded-3xl border border-apple-darkBorder space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                            <KeyRound className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Role-Based Access</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            5 hierarchical roles ensure employees and external contractors see only their assigned projects.
                        </p>
                    </div>

                    <div className="glass-dark p-8 rounded-3xl border border-apple-darkBorder space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <ShieldAlert className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Security Headers</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Strict CSP, clickjacking prevention, and MIME-sniffing protection enforced on every endpoint.
                        </p>
                    </div>

                    <div className="glass-dark p-8 rounded-3xl border border-apple-darkBorder space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Session Expiry</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Automatic session revocation and encrypted token rotation keep unauthorized devices out.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-xl shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>Read security specs</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
