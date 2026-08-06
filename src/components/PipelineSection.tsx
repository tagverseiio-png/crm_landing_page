"use client";

import { useState, useEffect } from 'react';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 0,
            label: 'Lead Capture',
            title: '1. Web Lead Capture',
            desc: 'Enquiry comes directly from your website or WhatsApp into the lead inbox. No retyping name, phone, or budget details.',
            bullets: ['Auto-assigned based on service type', 'Automatic lead scoring assigned'],
            image: '/feature_lead.png'
        },
        {
            id: 1,
            label: 'Contact Enrichment',
            title: '2. Contact Enrichment',
            desc: 'BridgeBreak automatically enriches the contact with company data, social profiles, and historical interactions if they are a returning client.',
            bullets: ['Clearbit data integration', 'Deduplication engine active'],
            image: '/feature_dossier.png'
        },
        {
            id: 2,
            label: 'Deal Creation',
            title: '3. Deal Creation',
            desc: 'A deal card is automatically placed on the Kanban board with estimated value calculated from the initial inquiry.',
            bullets: ['Value estimation logic', 'Task list generation'],
            image: '/feature_kanban.png'
        },
        {
            id: 3,
            label: 'Automated Quoting',
            title: '4. Automated Quoting',
            desc: 'Generate professional proposals with line items and taxes pre-filled based on the deal stage.',
            bullets: ['Custom branding', 'E-signature ready'],
            image: '/feature_whatsapp.png'
        },
        {
            id: 4,
            label: 'Instant Invoicing',
            title: '5. Instant Invoicing',
            desc: 'Convert accepted quotes directly into payable invoices with a single click.',
            bullets: ['Payment links included', 'Multi-currency support'],
            image: '/feature_invoice.png'
        },
        {
            id: 5,
            label: 'Cash Collection',
            title: '6. Cash Collection',
            desc: 'Receive payments via Stripe or bank transfer, and the deal automatically moves to "Won".',
            bullets: ['Stripe integration', 'Automated receipts'],
            image: '/feature_analytics.png'
        }
    ];

    // Robust Scroll spy logic: track the element closest to the center of the viewport
    useEffect(() => {
        const handleScroll = () => {
            const stepElements = document.querySelectorAll('.step-item');
            if (stepElements.length === 0) return;

            let currentActive = activeStep;
            let minDistance = Infinity;

            // Find the step closest to the vertical center of the screen (or top third)
            const targetLine = window.innerHeight * 0.4; // 40% from the top

            stepElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                // Compare the top of the element to our target line
                const distance = Math.abs(rect.top - targetLine);

                if (distance < minDistance) {
                    minDistance = distance;
                    currentActive = parseInt(el.getAttribute('data-step') || '0', 10);
                }
            });

            setActiveStep(currentActive);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeStep]);

    return (
        <section id="pipeline" className="py-12 sm:py-36 px-6 max-w-[1400px] mx-auto overflow-visible relative">
            <div className="text-center max-w-3xl mx-auto mb-20 relative z-30 bg-white/80 backdrop-blur-md rounded-3xl p-6">
                <span className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest mb-6">
                    <Zap className="w-4 h-4 text-amber-500" /> Conversion Pipeline
                </span>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Stop copy-pasting between tools. <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Let the pipeline do it.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                    Most CRMs stop at "deal won." BridgeBreak keeps going straight into quoting, invoicing, cash collection, and team delivery.
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="px-8 py-3.5 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-xl shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>See how it works</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-20 items-start relative">

                {/* Right Side: Giant Interactive Image Viewer (Sticky - Background on mobile) */}
                <div className="col-start-1 row-start-1 lg:col-start-2 sticky top-24 lg:top-32 h-[70vh] min-h-[500px] lg:h-[calc(100vh-10rem)] lg:max-h-[750px] w-full bg-transparent lg:bg-slate-100 lg:rounded-[3rem] border-transparent lg:border-slate-200/60 shadow-none lg:shadow-2xl lg:shadow-slate-200/50 flex items-center justify-center p-4 sm:p-8 md:p-16 overflow-hidden z-0 mt-8 lg:mt-0">
                    {/* Decorative background blur blobs */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px]"></div>

                    {steps.map(step => (
                        <div
                            key={step.id}
                            className={`absolute inset-0 sm:inset-16 sm:bottom-24 lg:inset-8 lg:bottom-24 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center ${activeStep === step.id
                                    ? 'opacity-100 translate-y-0 scale-100 blur-0 z-10'
                                    : 'opacity-0 translate-y-12 scale-95 blur-md pointer-events-none z-0'
                                }`}
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/50 bg-white"
                            />
                        </div>
                    ))}

                    <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center z-30">
                        <button
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className="px-8 py-3.5 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-xl shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <span>Build your pipeline</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Left Side: Scrollable Steps (Foreground on mobile) */}
                <div className="col-start-1 row-start-1 lg:col-start-1 flex flex-col relative z-20 pb-[50vh] pt-[15vh] lg:pt-0 px-4 lg:px-0 gap-24 lg:gap-0 pointer-events-none lg:pointer-events-auto">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            data-step={step.id}
                            className={`step-item transition-all duration-700 ease-out py-8 px-6 lg:py-24 sm:py-32 lg:border-l-4 lg:pl-8 sm:pl-12 rounded-3xl lg:rounded-none bg-white/85 backdrop-blur-md lg:bg-transparent shadow-2xl shadow-slate-900/10 lg:shadow-none border border-white/60 lg:border-transparent pointer-events-auto ${activeStep === step.id
                                    ? 'opacity-100 lg:border-l-blue-600 scale-100'
                                    : 'opacity-40 lg:border-l-slate-200 hover:opacity-70 scale-95 lg:scale-100'
                                }`}
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-colors duration-500 ${activeStep === step.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'bg-slate-200 text-slate-500'
                                    }`}>
                                    {step.id + 1}
                                </div>
                                <h3 className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-500 ${activeStep === step.id ? 'text-slate-900' : 'text-slate-600'
                                    }`}>
                                    {step.label}
                                </h3>
                            </div>

                            <div className="lg:pl-[80px]">
                                <p className={`leading-relaxed text-lg mb-8 transition-colors duration-500 ${activeStep === step.id ? 'text-slate-700' : 'text-slate-500'
                                    }`}>
                                    {step.desc}
                                </p>
                                <ul className="space-y-4">
                                    {step.bullets.map((b, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base font-semibold text-slate-800">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
