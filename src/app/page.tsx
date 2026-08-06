"use client";

import { ArrowRight, PlayCircle, Lock, TrendingUp, Zap, CheckCircle2, Users, Check, MessageSquare, Receipt, UserCheck, Kanban } from 'lucide-react';
import { useEffect, useState } from 'react';
import PipelineSection from '@/components/PipelineSection';
import ModulesSection from '@/components/ModulesSection';
import OnboardingPreview from '@/components/OnboardingPreview';
import CRM360Section from '@/components/CRM360Section';
import SecuritySection from '@/components/SecuritySection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ComparisonSection from '@/components/ComparisonSection';
import IntegrationsMarquee from '@/components/IntegrationsMarquee';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCardClick = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768) {
            if (activeMobileCard === id) {
                setActiveMobileCard(null);
                e.currentTarget.blur();
            } else {
                setActiveMobileCard(id);
            }
        }
    };

    return (
        <div className="w-full">
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-12 pb-24 text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] orb-glow rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                </div>

                <div className={`reveal-element ${mounted ? 'active' : ''} inline-flex items-center gap-2 text-apple-accent text-xs sm:text-sm font-bold tracking-widest uppercase mb-8`}>
                    <span className="w-2 h-2 rounded-full bg-apple-accent animate-ping"></span>
                    Built for Agencies & Service Businesses
                </div>

                <h1 className={`reveal-element ${mounted ? 'active' : ''} max-w-5xl text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-apple-text leading-[1.08] mb-8`}>
                    Run your entire client business — <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-accent via-indigo-600 to-purple-600">leads to cash</span> — from one workspace.
                </h1>

                <p className={`reveal-element ${mounted ? 'active' : ''} max-w-2xl text-lg sm:text-xl text-apple-textMuted font-normal leading-relaxed mb-10`}>
                    BridgeBreak brings your leads, deals, quotes, invoices, projects, and marketing into a single real-time workspace. No spreadsheets. No disconnected tools.
                </p>

                <div className={`reveal-element ${mounted ? 'active' : ''} flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto`}>
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>Get a demo</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>


            <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200/80 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Live Feature Showcase</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">Built for speed, clarity, and rapid deal closing</h3>
                    </div>
                </div>



                <div className={`animate-marquee-slow flex gap-6 px-4 py-8 ${activeMobileCard ? 'animation-paused' : ''}`}>
                    {[1, 2].map((track) => (
                        <div key={track} className="flex gap-6 shrink-0">
                            {/* Card 1: Lead Capture */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-emerald-100 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-1-${track}`, e)}
                                data-active={activeMobileCard === `card-1-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-emerald-700 font-bold uppercase tracking-wider text-xs pb-3">01 · Lead Capture</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white group-data-[active=true]:text-emerald-950 md:group-hover:text-emerald-950 transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        Instant web contacts
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-emerald-900/90 font-semibold leading-relaxed mb-6">Automated webforms and WhatsApp router assign reps in real-time.</p>
                                                <button className="px-8 py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    Explore Forms
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border-[6px] md:group-hover:border-white/60 md:group-hover:shadow-2xl md:group-hover:shadow-emerald-900/20 md:group-hover:-rotate-3">

                                        <img src="/feature_lead.png" alt="Lead Capture" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: WhatsApp */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-slate-900 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-2-${track}`, e)}
                                data-active={activeMobileCard === `card-2-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-indigo-400 font-bold uppercase tracking-wider text-xs pb-3">02 · WhatsApp App</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        Quote & close in chat
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-slate-300 font-semibold leading-relaxed mb-6">Official Cloud API syncs conversations directly to client timelines.</p>
                                                <button className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    Connect Chat
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border md:group-hover:border-slate-700 md:group-hover:shadow-2xl md:group-hover:shadow-black/50 md:group-hover:rotate-2">

                                        <img src="/feature_whatsapp.png" alt="WhatsApp" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Quote to Cash */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-blue-100 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-3-${track}`, e)}
                                data-active={activeMobileCard === `card-3-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-blue-600 font-bold uppercase tracking-wider text-xs pb-3">03 · Quote-to-Cash</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white group-data-[active=true]:text-blue-950 md:group-hover:text-blue-950 transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        One-click payments
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-blue-900/90 font-semibold leading-relaxed mb-6">Tax rates, items, and payment links get dispatched instantly.</p>
                                                <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    View Billing
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border-[6px] md:group-hover:border-white/80 md:group-hover:shadow-2xl md:group-hover:shadow-blue-900/10 md:group-hover:-rotate-2">

                                        <img src="/feature_invoice.png" alt="Invoice" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Dossier */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-orange-100 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-4-${track}`, e)}
                                data-active={activeMobileCard === `card-4-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-orange-700 font-bold uppercase tracking-wider text-xs pb-3">04 · 360° Dossier</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white group-data-[active=true]:text-orange-950 md:group-hover:text-orange-950 transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        Client history unified
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-orange-900/90 font-semibold leading-relaxed mb-6">View deal status, archives, invoices, and tasks on one screen.</p>
                                                <button className="px-8 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    See Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border-[6px] md:group-hover:border-white/60 md:group-hover:shadow-2xl md:group-hover:shadow-orange-900/20 md:group-hover:rotate-3">

                                        <img src="/feature_dossier.png" alt="Dossier" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 5: Kanban */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-slate-900 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-5-${track}`, e)}
                                data-active={activeMobileCard === `card-5-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-cyan-400 font-bold uppercase tracking-wider text-xs pb-3">05 · Visual Drag-Drop</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        Custom pipeline flow
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-slate-300 font-semibold leading-relaxed mb-6">Drag deal cards to instantly update automated stage probabilities.</p>
                                                <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    View Pipeline
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border md:group-hover:border-slate-700 md:group-hover:shadow-2xl md:group-hover:shadow-black/50 md:group-hover:-rotate-2">

                                        <img src="/feature_kanban.png" alt="Kanban" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 6: Analytics */}
                            <div 
                                className="w-[85vw] sm:w-[450px] md:w-[600px] h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-xl shrink-0 relative bg-rose-100 group cursor-pointer"
                                onClick={(e) => handleCardClick(`card-6-${track}`, e)}
                                data-active={activeMobileCard === `card-6-${track}`}
                                tabIndex={0}
                            >
                                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end w-full md:w-[85%] md:group-hover:w-[60%] transition-all duration-700 ease-out pointer-events-none">
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <span className="block text-rose-600 font-bold uppercase tracking-wider text-xs pb-3">06 · Live Analytics</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-white group-data-[active=true]:text-rose-950 md:group-hover:text-rose-950 transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-data-[active=true]:drop-shadow-none md:group-hover:drop-shadow-none pointer-events-auto">
                                        Revenue forecasting
                                    </h4>
                                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] group-data-[active=true]:grid-rows-[1fr] md:group-hover:grid-rows-[1fr] opacity-0 group-data-[active=true]:opacity-100 md:group-hover:opacity-100 delay-100 pointer-events-auto">
                                        <div className="overflow-hidden">
                                            <div className="pt-5">
                                                <p className="text-rose-900/90 font-semibold leading-relaxed mb-6">Track conversion rates and predict Q3 revenue based on active deals.</p>
                                                <button className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
                                                    Open Reports
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] top-0 right-0 bottom-0 left-0 md:group-hover:top-[40px] md:group-hover:right-[-20px] md:group-hover:bottom-[40px] md:group-hover:left-[45%] group-data-[active=true]:opacity-10 md:group-hover:opacity-100">
                                    <div className="w-full h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none md:group-hover:rounded-2xl md:group-hover:border-[6px] md:group-hover:border-white/80 md:group-hover:shadow-2xl md:group-hover:shadow-rose-900/10 md:group-hover:rotate-2">

                                        <img src="/feature_analytics.png" alt="Analytics" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pb-8 pt-4">
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>Explore all features</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* Scrollable Sections */}
            <PipelineSection />
            <ModulesSection />
            <CRM360Section />
            <SecuritySection />
            <ComparisonSection />
            <PricingSection />
            <FAQSection />
            <IntegrationsMarquee />

            <section className="py-12 sm:py-36 px-6 max-w-7xl mx-auto">
                <div className="reveal-element bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                        <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-tight">
                            Ready to run your client business from one workspace?
                        </h2>
                        <p className="text-lg text-gray-400">
                            Join hundreds of agency owners who stopped wrestling disconnected tools.
                        </p>
                        <div className="flex justify-center items-center pt-4">
                            <button 
                                onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg hover:scale-105"
                            >
                                Book Live Walkthrough
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
