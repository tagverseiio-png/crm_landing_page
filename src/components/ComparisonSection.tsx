import { CheckCircle2 } from 'lucide-react';

const comparisonData = [
    {
        feature: 'CRM & Pipeline Management',
        replaces: ['HubSpot', 'Pipedrive'],
        cost: '$99/mo'
    },
    {
        feature: 'Project Kanban & Delivery',
        replaces: ['Asana', 'Monday.com'],
        cost: '$49/mo'
    },
    {
        feature: 'Automated Quoting & Proposals',
        replaces: ['PandaDoc', 'DocuSign'],
        cost: '$49/mo'
    },
    {
        feature: 'Invoicing & Payments',
        replaces: ['QuickBooks', 'FreshBooks'],
        cost: '$39/mo'
    },
    {
        feature: 'WhatsApp Shared Inbox',
        replaces: ['Intercom', 'Front'],
        cost: '$99/mo'
    },
    {
        feature: 'Web Lead Capture Forms',
        replaces: ['Typeform', 'Jotform'],
        cost: '$39/mo'
    },
    {
        feature: 'Workflow Automations',
        replaces: ['Zapier', 'Make'],
        cost: '$49/mo'
    },
    {
        feature: 'Real-time Analytics',
        replaces: ['AgencyAnalytics', 'Databox'],
        cost: '$49/mo'
    }
];

export default function ComparisonSection() {
    const totalCost = comparisonData.reduce((acc, curr) => {
        return acc + parseInt(curr.cost.replace('$', '').replace('/mo', ''));
    }, 0);

    return (
        <section className="py-24 sm:py-36 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
                    Replace your fragmented tech stack.
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                    Stop paying for 8 different tools that don't even talk to each other.
                </p>
            </div>

            <div className="bg-slate-50/50 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 p-6 bg-slate-100 border-b border-slate-200 font-bold text-slate-700 text-sm sm:text-base uppercase tracking-wider">
                    <div className="col-span-12 sm:col-span-5">Features</div>
                    <div className="col-span-12 sm:col-span-4 hidden sm:block text-center">Replaces</div>
                    <div className="col-span-6 sm:col-span-1 text-center">Other tools</div>
                    <div className="col-span-6 sm:col-span-2 text-center text-blue-600">BridgeBreak</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-100">
                    {comparisonData.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 p-4 sm:p-6 items-center hover:bg-white transition-colors duration-200">
                            <div className="col-span-12 sm:col-span-5 font-bold text-slate-800 text-sm sm:text-base">
                                {item.feature}
                            </div>
                            <div className="col-span-12 sm:col-span-4 hidden sm:flex justify-center gap-2 flex-wrap">
                                {item.replaces.map((tool, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <div className="col-span-6 sm:col-span-1 text-center font-bold text-slate-500">
                                {item.cost}
                            </div>
                            <div className="col-span-6 sm:col-span-2 flex justify-center">
                                <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20">
                                    <CheckCircle2 className="w-4 h-4" /> Included
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800">
                    <div className="text-center sm:text-left">
                        <div className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-1">Overall Price of other tools</div>
                        <div className="text-3xl font-black text-slate-300 line-through decoration-rose-500/70">${totalCost}/mo</div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-12 bg-slate-700"></div>

                    <div className="text-center sm:text-right flex items-center gap-6">
                        <div>
                            <div className="text-blue-300 font-bold uppercase tracking-wider text-sm mb-1">BridgeBreak Price</div>
                            <div className="text-4xl font-black text-white">$97<span className="text-lg text-blue-200 font-bold">/mo</span></div>
                        </div>
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
