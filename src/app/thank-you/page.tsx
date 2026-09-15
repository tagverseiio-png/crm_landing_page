import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-4xl w-full z-10">
                <div className="bg-slate-900/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 sm:p-20 text-center shadow-2xl transform transition-all animate-in fade-in zoom-in duration-700 ease-out">
                    
                    {/* Icon Header */}
                    <div className="relative inline-block mb-10">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-emerald-500/30 mx-auto transition-transform hover:scale-105">
                            <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[3]" />
                        </div>
                    </div>
                    
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight mb-6 drop-shadow-sm">
                        You're on the list.
                    </h1>
                    
                    <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                        <p className="opacity-90">
                            We've received your registration! Our engineers are currently configuring your tailored workspace with all the tools you need to win.
                        </p>
                        <div className="bg-white/5 py-4 px-6 rounded-2xl border border-white/10 inline-block shadow-inner mt-4 transform hover:scale-[1.02] transition-transform">
                            <p className="text-white font-semibold leading-relaxed flex flex-col sm:flex-row items-center gap-3">
                                <span className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400 shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </span>
                                <span className="text-sm sm:text-base">We're absolutely thrilled to partner with you. Let's break barriers and scale your agency faster than ever before.</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                        <Link 
                            href="/"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg sm:text-xl transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-1" />
                            <span>Return to Mission Control</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
