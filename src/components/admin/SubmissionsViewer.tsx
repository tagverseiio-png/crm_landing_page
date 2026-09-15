'use client';

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase';
import { Mail, Building2, Briefcase, Clock, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface Submission {
  name: string;
  email: string;
  position: string;
  companyName: string;
  companyType: string;
  description: string;
  timestamp: string;
}

export default function SubmissionsViewer() {
  const [submissions, setSubmissions] = useState<(Submission & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const submissionsRef = ref(db, 'submissions');
    const unsubscribe = onValue(submissionsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items = Object.entries(data).map(([id, val]: [string, any]) => ({
          id,
          ...val,
        }));
        // Sort newest first
        items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setSubmissions(items);
      } else {
        setSubmissions([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filtered = submissions.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name?.toLowerCase().includes(q) ||
      s.email?.toLowerCase().includes(q) ||
      s.companyName?.toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Form Submissions</h2>
          <p className="text-sm text-slate-500 mt-1">{submissions.length} total submissions</p>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-72 placeholder:text-slate-600"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-medium">No submissions yet</p>
          <p className="text-sm mt-1">Form entries will appear here when users submit the free trial form.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((sub) => (
            <div
              key={sub.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                className="w-full px-5 py-4 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                  {sub.name?.charAt(0)?.toUpperCase() || '?'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold text-sm truncate">{sub.name || 'Unknown'}</span>
                    <span className="text-xs text-slate-600 hidden sm:inline">·</span>
                    <span className="text-xs text-slate-500 hidden sm:inline truncate">{sub.email}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {sub.companyName || '—'}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {sub.timestamp ? new Date(sub.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}</span>
                  </div>
                </div>
                {expandedId === sub.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>

              {expandedId === sub.id && (
                <div className="px-5 pb-5 border-t border-slate-800 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DetailField icon={<Mail className="w-4 h-4" />} label="Email" value={sub.email} />
                  <DetailField icon={<Briefcase className="w-4 h-4" />} label="Position" value={sub.position} />
                  <DetailField icon={<Building2 className="w-4 h-4" />} label="Company" value={sub.companyName} />
                  <DetailField icon={<Building2 className="w-4 h-4" />} label="Company Type" value={sub.companyType} />
                  <div className="sm:col-span-2">
                    <p className="text-xs text-slate-500 font-medium mb-1">Description</p>
                    <p className="text-sm text-slate-300 bg-slate-800/40 rounded-lg px-4 py-3 border border-slate-700/50">
                      {sub.description || '—'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DetailField({ icon, label, value }: { icon: React.ReactNode; label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1.5">{icon} {label}</p>
      <p className="text-sm text-slate-300">{value || '—'}</p>
    </div>
  );
}
