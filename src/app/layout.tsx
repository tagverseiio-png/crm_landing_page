import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FreeTrialModal from '@/components/FreeTrialModal';

import fs from 'fs';
import path from 'path';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Velora CRM — Run your client business from leads to cash',
  description: 'Velora brings your leads, deals, quotes, invoices, projects, and marketing into a single real-time workspace.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
    
    const files = {
      'crm_dashboard.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\crm_dashboard_1786010291778.png",
      'pipeline_ui.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\pipeline_ui_1786010303082.png",
      'tech_abstract.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\tech_abstract_1786010312836.png",
      'feature_lead.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_lead_capture_1786011809237.png",
      'feature_whatsapp.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_whatsapp_1786011820713.png",
      'feature_invoice.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_invoice_1786011830750.png",
      'feature_dossier.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_dossier_1786011841418.png",
      'feature_kanban.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_kanban_1786011884941.png",
      'feature_analytics.png': "C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0933cb36-7f8d-4fce-bde7-a44b9b2f44bf\\feature_analytics_1786011896580.png"
    };

    for (const [dest, src] of Object.entries(files)) {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(publicDir, dest));
      }
    }
  } catch (e) {
    console.error("Copy failed", e);
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.className} antialiased selection:bg-apple-accent selection:text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="pt-24 flex-grow">
          {children}
        </main>
        <Footer />
        <FreeTrialModal />
      </body>
    </html>
  );
}
