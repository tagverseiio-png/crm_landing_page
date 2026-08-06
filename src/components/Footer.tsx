"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 text-xs text-apple-textMuted mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-apple-accent text-white flex items-center justify-center font-bold text-xs">B</div>
                    <span className="font-bold text-sm text-apple-text">BridgeBreak CRM</span>
                </div>
                <p className="max-w-sm text-gray-500 leading-relaxed">
                    The all-in-one workspace for agency leads, deals, quotes, invoices, projects, and automated cash conversion.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-apple-text mb-3 uppercase tracking-wider">Product</h4>
                <ul className="space-y-2">
                    <li><a href="#pipeline" className="hover:text-apple-text">Pipeline</a></li>
                    <li><a href="#pillars" className="hover:text-apple-text">Modules</a></li>
                    <li><a href="#pricing" className="hover:text-apple-text">Pricing</a></li>
                    <li><a href="#security" className="hover:text-apple-text">Security</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-apple-text mb-3 uppercase tracking-wider">Resources</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-apple-text">Help Center</a></li>
                    <li><a href="#" className="hover:text-apple-text">API Docs</a></li>
                    <li><a href="#faq" className="hover:text-apple-text">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-apple-text mb-3 uppercase tracking-wider">Company</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-apple-text">About</a></li>
                    <li><a href="#" className="hover:text-apple-text">Contact</a></li>
                    <li><a href="#" className="hover:text-apple-text">Legal & Privacy</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} BridgeBreak CRM. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-apple-text">Twitter</a>
                <a href="#" className="hover:text-apple-text">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
}
