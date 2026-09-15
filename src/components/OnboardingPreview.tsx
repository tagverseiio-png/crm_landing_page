"use client";

import { Building2, MapPin, UserCog, FileText, Rocket, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

export default function OnboardingPreview() {
    const { data: onboardingData, loading } = useFirebaseData<any>('landing/onboarding');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const steps = [
        { title: onboardingData?.steps?.[0]?.title || 'Company Info', desc: onboardingData?.steps?.[0]?.desc || 'Company name, industry, website', active: true, icon: Building2 },
        { title: onboardingData?.steps?.[1]?.title || 'Location', desc: onboardingData?.steps?.[1]?.desc || 'Address & timezone', active: true, icon: MapPin },
        { title: onboardingData?.steps?.[2]?.title || 'Admin Profile', desc: onboardingData?.steps?.[2]?.desc || 'Full name, role', active: true, icon: UserCog },
        { title: onboardingData?.steps?.[3]?.title || 'Documents', desc: onboardingData?.steps?.[3]?.desc || 'Currency, GST / PAN', active: false, icon: FileText },
        { title: onboardingData?.steps?.[4]?.title || 'Finish', desc: onboardingData?.steps?.[4]?.desc || 'Ready to work', active: false, icon: Rocket }
    ];

    if (loading) return <SectionSkeleton />;

    return (
        <section className="py-10 sm:py-24 bg-slate-900 text-white px-6 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className={`reveal-element ${mounted ? 'active' : ''} text-center max-w-3xl mx-auto mb-16`}>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                        {onboardingData?.header?.title || 'Loading...'}
                    </h2>
                    <p className="text-xl text-slate-400 font-medium">
                        {onboardingData?.header?.subtitle || 'Loading...'}
                    </p>
                </div>

                <div className={`reveal-element ${mounted ? 'active' : ''} grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-4 relative pt-4`}>
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[27px] left-[10%] right-[10%] h-[2px] bg-slate-800 rounded-full"></div>
                    {/* Progress line */}
                    <div className="hidden md:block absolute top-[27px] left-[10%] w-[60%] h-[2px] bg-apple-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

                    {steps.map((step, i) => (
                        <div key={i} className={`relative flex flex-row md:flex-col items-center md:justify-center text-left md:text-center gap-5 group ${step.active ? 'opacity-100' : 'opacity-50 grayscale hover:grayscale-0'}`}>
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
                                step.active 
                                ? 'bg-slate-900 text-apple-accent shadow-[0_0_20px_rgba(59,130,246,0.3)] border-2 border-apple-accent group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' 
                                : 'bg-slate-900 text-slate-500 border-2 border-slate-700'
                            }`}>
                                <step.icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className={`font-bold text-base sm:text-lg mb-1 transition-colors ${step.active ? 'text-white' : 'text-slate-400'}`}>{step.title}</h4>
                                <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`reveal-element ${mounted ? 'active' : ''} flex justify-center pt-16`}>
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                        className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2"
                        aria-label="Start your setup"
                    >
                        <span>Start your setup</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
