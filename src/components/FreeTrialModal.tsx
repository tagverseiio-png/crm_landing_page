"use client";

import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { database } from '@/lib/firebase';
import { ref, push } from 'firebase/database';

export default function FreeTrialModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [companyType, setCompanyType] = useState('Startup (< 5 Years)');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const submissionsRef = ref(database, 'submissions');
            await push(submissionsRef, {
                name,
                position,
                email,
                companyName,
                companyType,
                description,
                timestamp: new Date().toISOString()
            });
            setIsOpen(false);
            router.push('/thank-you');
        } catch (error) {
            console.error("Error saving submission:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            window.history.pushState({ modal: true }, '');
        };
        window.addEventListener('open-free-trial', handleOpen);
        return () => window.removeEventListener('open-free-trial', handleOpen);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        if (window.history.state?.modal) {
            window.history.back();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
                <div 
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                    onClick={handleClose}
                ></div>
                
                <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl transform transition-all my-8 text-left">
                    <div className="absolute top-4 right-4 z-10">
                        <button 
                            onClick={handleClose}
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's set up your workspace</h3>
                    <p className="text-slate-500 mb-8 text-sm">Tell us a bit about your business so we can tailor your workspace.</p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Job Position</label>
                                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900" placeholder="CEO" required />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900" placeholder="you@company.com" required />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Company Name</label>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900" placeholder="Acme Inc." required />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Company Type</label>
                            <div className="relative">
                                <select 
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 appearance-none bg-white"
                                    value={companyType}
                                    onChange={(e) => setCompanyType(e.target.value)}
                                >
                                    <option>Startup (&lt; 5 Years)</option>
                                    <option>Emerging Enterprise (5–10 Years)</option>
                                    <option>Established Enterprise (10+ Years)</option>
                                    <option>MNC</option>
                                    <option>Inc.</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>



                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 resize-none h-24" placeholder="Briefly describe what your business does..." required></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full py-3.5 mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
