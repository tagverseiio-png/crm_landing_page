'use client';

import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import AdminGuard from '@/components/admin/AdminGuard';
import SectionEditor from '@/components/admin/SectionEditor';
import SubmissionsViewer from '@/components/admin/SubmissionsViewer';
import {
  LayoutDashboard, FileText, Layers, GitBranch, Grid3X3, Eye, Shield,
  BarChart3, DollarSign, HelpCircle, Rocket, Inbox, LogOut, ChevronLeft
} from 'lucide-react';

const SECTIONS = [
  { id: 'submissions', label: 'Submissions', icon: Inbox, paths: [], isSpecial: true },
  { id: 'hero-cta', label: 'Hero & CTA', icon: LayoutDashboard, paths: [
    { path: 'landing/hero', label: 'Hero' },
    { path: 'landing/cta', label: 'CTA' }
  ] },
  { id: 'showcase-cards', label: 'Showcase & Cards', icon: Layers, paths: [
    { path: 'landing/showcase', label: 'Showcase' },
    { path: 'landing/cards', label: 'Feature Cards' }
  ] },
  { id: 'pipeline', label: 'Pipeline', icon: GitBranch, paths: [{ path: 'landing/pipeline', label: 'Pipeline' }] },
  { id: 'workspace', label: 'Workspace', icon: Grid3X3, paths: [{ path: 'landing/workspace', label: 'Workspace' }] },
  { id: 'integrationHub', label: 'Integration Hub', icon: Layers, paths: [{ path: 'landing/integrationHub', label: 'Integration Hub' }] },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, paths: [{ path: 'landing/analytics', label: 'Analytics' }] },
  { id: 'crm360', label: 'CRM 360°', icon: Eye, paths: [{ path: 'landing/crm360', label: 'CRM 360°' }] },
  { id: 'security', label: 'Security', icon: Shield, paths: [{ path: 'landing/security', label: 'Security' }] },
  { id: 'comparison', label: 'Comparison', icon: BarChart3, paths: [{ path: 'landing/comparison', label: 'Comparison' }] },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, paths: [{ path: 'landing/pricing', label: 'Pricing' }] },
  { id: 'faq', label: 'FAQ', icon: HelpCircle, paths: [{ path: 'landing/faq', label: 'FAQ' }] },
  { id: 'onboarding', label: 'Onboarding', icon: Rocket, paths: [{ path: 'landing/onboarding', label: 'Onboarding' }] },
];

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <AdminDashboardContent />
    </AdminGuard>
  );
}

function AdminDashboardContent() {
  const [activeSection, setActiveSection] = useState('submissions');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/admin/login');
  };

  const currentSection = SECTIONS.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? 'w-[72px]' : 'w-64'
        } bg-slate-900/80 border-r border-slate-800 flex flex-col shrink-0 transition-all duration-300 sticky top-0 h-screen overflow-y-auto`}
      >
        {/* Brand */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <p className="text-white font-bold text-sm truncate">Velora Admin</p>
              <p className="text-slate-500 text-xs truncate">{user?.email}</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
                title={sidebarCollapsed ? section.label : undefined}
              >
                <Icon className="w-4.5 h-4.5 shrink-0" />
                {!sidebarCollapsed && <span className="truncate">{section.label}</span>}
                {section.id === 'submissions' && !sidebarCollapsed && (
                  <span className="ml-auto text-[10px] bg-blue-600/20 text-blue-400 px-1.5 py-0.5 rounded-full font-bold">LIVE</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 transition-all"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            {!sidebarCollapsed && <span>Collapse</span>}
          </button>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!sidebarCollapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-5xl mx-auto px-6 py-6">
          {currentSection?.isSpecial ? (
            <SubmissionsViewer />
          ) : currentSection?.paths ? (
            <div className="space-y-12">
              {currentSection.paths.map((p) => (
                <SectionEditor
                  key={p.path}
                  path={p.path}
                  sectionName={p.label}
                />
              ))}
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
