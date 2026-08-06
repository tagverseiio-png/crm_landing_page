"use client";

import { FolderKanban, ShieldCheck, MessageSquare, Zap, Activity, Filter, MousePointerClick, RefreshCw, BarChart3, Users, Lock, CreditCard, CheckCircle, TrendingUp, ArrowRight, Building2, MapPin, UserCog, FileText, Rocket } from 'lucide-react';

export default function ModulesSection() {
  return (
    <div className="bg-slate-50 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-40 right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-40 right-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none"></div>

        {/* PILLAR 2: Workspace Module */}
        <section id="workspace" className="py-16 sm:py-20 px-6 max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
                <div className="space-y-8">
                    <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                        <FolderKanban className="w-4 h-4 text-blue-600" /> Workspace Module
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                        Sales closes it. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Your team delivers it.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Stop switching to external project management apps once a deal closes. BridgeBreak transfers the scope directly to team tasks, client hubs, and budget trackers.
                    </p>

                    <div className="space-y-5 pt-4">
                        <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <MousePointerClick className="w-6 h-6" />
                            </div>
                            <div>
                                <strong className="block text-slate-900 font-bold text-lg mb-1">Project Tracking</strong>
                                <span className="text-slate-600 leading-relaxed">Track status, budget vs actual cost, and share client-visible updates in one unified place.</span>
                            </div>
                        </div>
                        <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 border border-transparent hover:border-emerald-100">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <strong className="block text-slate-900 font-bold text-lg mb-1">Granular Role Permissions</strong>
                                <span className="text-slate-600 leading-relaxed">5 role tiers (Owner, Admin, Manager, Employee, Viewer) keep confidential financials safe.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative group perspective-[2000px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-8 rounded-3xl sm:rounded-[3rem] border border-white shadow-2xl shadow-slate-200/50 space-y-6 relative transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            </div>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                                <Lock className="w-3 h-3" /> Scoped Access
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* To Do Column */}
                            <div className="bg-slate-100/50 p-4 rounded-2xl border border-slate-200 space-y-3 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-black text-slate-600 uppercase tracking-widest text-[11px]">To Do</span>
                                    <span className="bg-slate-300 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab group/card">
                                    <div className="flex gap-1.5 mb-2">
                                        <span className="w-8 h-2 rounded-full bg-rose-400"></span>
                                        <span className="w-12 h-2 rounded-full bg-amber-400"></span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-3">Setup Meta Pixels</h4>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                                            <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-md">Due Today</span>
                                    </div>
                                </div>
                            </div>

                            {/* In Progress Column */}
                            <div className="bg-amber-50/40 p-4 rounded-2xl border border-amber-200/60 space-y-3">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-black text-amber-700 uppercase tracking-widest text-[11px]">In Progress</span>
                                    <span className="bg-amber-200 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-grab transform -rotate-1 scale-[1.02] relative z-10 shadow-amber-900/10">
                                    <div className="flex gap-1.5 mb-2">
                                        <span className="w-10 h-2 rounded-full bg-amber-400"></span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-3">UI Design Mockups</h4>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500">Alex M.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Done Column */}
                            <div className="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100 space-y-3">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-black text-emerald-700 uppercase tracking-widest text-[11px]">Done</span>
                                    <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">4</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow cursor-grab opacity-70 hover:opacity-100">
                                    <h4 className="font-bold text-slate-800 text-sm mb-3 line-through decoration-emerald-500/50">Kickoff Meeting</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" /> Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center pt-16">
                <button 
                    onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                    className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                    <span>Set up your workspace</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>

        {/* PILLAR 3: Integration Hub */}
        <section className="py-16 sm:py-20 px-6 max-w-[1400px] mx-auto border-t border-slate-200/60 relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
                <div className="order-2 lg:order-1 relative group">
                    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="bg-[#f0f2f5] p-2 rounded-[3rem] border border-white shadow-2xl shadow-slate-200/50 relative overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
                        {/* WhatsApp Header Mockup */}
                        <div className="bg-emerald-600 px-6 py-4 rounded-t-[2.5rem] flex items-center gap-4 text-white shadow-md relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg backdrop-blur-md border border-white/30">
                                CE
                            </div>
                            <div>
                                <h4 className="font-bold text-lg leading-tight">Client Enterprise</h4>
                                <p className="text-emerald-100 text-xs font-medium flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span> Online
                                </p>
                            </div>
                            <div className="ml-auto flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Chat Body */}
                        <div className="bg-[#e5ddd5] p-6 sm:p-8 space-y-6 h-[400px] rounded-b-[2.5rem] relative">
                            {/* Chat Pattern Overlay */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23000000\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/>%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"/>%3C/g%3E%3C/svg%3E")' }}></div>
                            
                            <div className="flex items-start gap-3 relative z-10 animate-fade-in-up">
                                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm text-slate-800 space-y-2 max-w-[85%] relative border border-white">
                                    <span className="absolute -left-2 top-0 text-white">
                                        <svg viewBox="0 0 8 13" width="8" height="13"><path opacity="1" fill="currentColor" d="M1.533 3.118L8 12.118V0H2.814C1.042 0 .132 2.118 1.533 3.118z"></path></svg>
                                    </span>
                                    <div className="font-bold text-emerald-600 text-sm mb-1">Emily (Client)</div>
                                    <p className="text-sm font-medium">"Hi! Can you send over the updated proposal for the quarterly campaign? We are ready to sign."</p>
                                    <div className="text-[10px] text-slate-400 text-right font-medium">10:42 AM</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-end relative z-10 animate-fade-in-up delay-100">
                                <div className="bg-[#d9fdd3] p-4 rounded-2xl rounded-tr-sm shadow-sm text-slate-800 space-y-2 max-w-[85%] relative border border-[#d9fdd3]">
                                    <span className="absolute -right-2 top-0 text-[#d9fdd3]">
                                        <svg viewBox="0 0 8 13" width="8" height="13"><path opacity="1" fill="currentColor" d="M6.467 3.118L0 12.118V0h5.186c1.772 0 2.682 2.118 1.281 3.118z"></path></svg>
                                    </span>
                                    <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-emerald-100/50 mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                                            <CreditCard className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <strong className="text-sm block">Proposal_Q3_Final.pdf</strong>
                                            <span className="text-xs text-slate-500">2.4 MB • Auto-generated</span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium">Absolutely! Proposal #Q-8821 is attached above. Generated automatically via BridgeBreak CRM. Let me know if you need anything else!</p>
                                    <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-700 font-medium opacity-80">
                                        10:43 AM <CheckCircle className="w-3 h-3 text-blue-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                        <MessageSquare className="w-4 h-4 text-emerald-600" /> Integration Hub
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                        Talk to leads <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">without leaving the CRM.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        No separate tabs required. Send WhatsApp template messages, capture website webform entries, and monitor ad campaign returns right from your deal view.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                        {['WhatsApp Cloud API', 'Website Webhooks', 'Meta Ads Lead Gen', 'Google Analytics', 'Stripe Payments', 'Clearbit Data'].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-default hover:-translate-y-0.5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-6">
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2 w-fit"
                        >
                            <span>Explore integrations</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* PILLAR 4 & 5: Analytics & Automation (Bento Grid) */}
        <section className="py-16 sm:py-20 px-6 max-w-[1400px] mx-auto border-t border-slate-200/60 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-widest mb-4">
                    <BarChart3 className="w-4 h-4 text-purple-600" /> Scale & Automation
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-4">
                    The busywork happens <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">on its own.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                    Out-of-the-box revenue reports, pipeline velocity tracking, and trigger-based automation rules. All activity is logged live.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Analytics Card (Span 2) */}
                <div className="md:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 p-8 sm:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden group flex flex-col">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500"></div>
                    <div className="relative z-10 flex flex-col flex-1 justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center"><Activity className="w-5 h-5" /></div>
                                <h3 className="font-bold text-xl text-slate-900">Live Conversion Funnel</h3>
                            </div>
                            <p className="text-slate-600 font-medium">Pipeline drop-off analytics update the moment a deal moves.</p>
                        </div>
                        
                        <div className="space-y-4 mt-6">
                            <div className="group/bar">
                                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                                    <span>Inbound Leads</span> <span className="text-indigo-600">320 (100%)</span>
                                </div>
                                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden shadow-inner">
                                    <div className="bg-slate-800 h-full w-full rounded-full transform origin-left transition-transform duration-1000"></div>
                                </div>
                            </div>
                            <div className="group/bar">
                                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                                    <span>Qualified Deals</span> <span className="text-indigo-600">180 (56%)</span>
                                </div>
                                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden shadow-inner">
                                    <div className="bg-indigo-500 h-full w-[56%] rounded-full transform origin-left transition-transform duration-1000 delay-100"></div>
                                </div>
                            </div>
                            <div className="group/bar">
                                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                                    <span>Closed Won</span> <span className="text-indigo-600">112 (35%)</span>
                                </div>
                                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden shadow-inner">
                                    <div className="bg-emerald-500 h-full w-[35%] rounded-full transform origin-left transition-transform duration-1000 delay-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] border border-slate-700 p-8 sm:p-10 shadow-xl shadow-slate-900/20 relative overflow-hidden group flex flex-col">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col flex-1 justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
                                <h3 className="font-bold text-xl text-white">Monthly MRR</h3>
                            </div>
                            
                            <div className="mt-4">
                                <div className="text-5xl font-black text-white tracking-tighter mb-2">$84.2k</div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
                                    <TrendingUp className="w-4 h-4" /> +18.4% this month
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-20 w-full mt-auto flex items-end gap-2">
                            {/* Fake chart bars */}
                            {[40, 50, 45, 60, 55, 75, 65, 85, 95, 100].map((h, i) => (
                                <div key={i} className="flex-1 bg-emerald-500/80 rounded-t-sm transition-all duration-700 hover:bg-emerald-400 cursor-pointer" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Automation Builder Card (Span 3) */}
                <div className="md:col-span-2 lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-200 p-8 sm:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden group min-h-[300px] flex flex-col">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between flex-1">
                        <div className="max-w-md w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center"><RefreshCw className="w-5 h-5" /></div>
                                <h3 className="font-bold text-2xl text-slate-900">Visual Automation</h3>
                            </div>
                            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                                Trigger actions across your entire tech stack based on CRM events. No code required.
                            </p>
                            <button 
                                onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                                className="px-8 py-4 rounded-full bg-apple-accent hover:bg-apple-accentHover text-white font-medium text-base transition-all duration-200 shadow-lg shadow-apple-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2 w-fit md:mx-auto"
                            >
                                <span>Explore Workflows</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <div className="flex-1 w-full max-w-2xl bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-inner">
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group/step hover:border-amber-300 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold shadow-inner">IF</div>
                                        <div>
                                            <strong className="block text-slate-900 font-bold">Deal marked as "Won"</strong>
                                            <span className="text-xs font-medium text-slate-500">Trigger Event</span>
                                        </div>
                                    </div>
                                    <Filter className="w-5 h-5 text-slate-300 group-hover/step:text-amber-500 transition-colors" />
                                </div>
                                
                                <div className="w-1 h-6 bg-slate-200 mx-auto rounded-full"></div>
                                
                                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group/step hover:border-emerald-300 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shadow-inner">DO</div>
                                        <div>
                                            <strong className="block text-slate-900 font-bold">Generate Invoice & Send Stripe Link</strong>
                                            <span className="text-xs font-medium text-slate-500">Automated Action</span>
                                        </div>
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-slate-300 group-hover/step:text-emerald-500 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}
