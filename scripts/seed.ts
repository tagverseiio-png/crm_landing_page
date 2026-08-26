import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const landingData = {
    hero: {
        badge: "Built for Agencies & Service Businesses",
        titlePre: "Run your entire client business — ",
        titleHighlight: "leads to cash",
        titlePost: " — from one workspace.",
        subtitle: "Velora brings your leads, deals, quotes, invoices, projects, and marketing into a single real-time workspace. No spreadsheets. No disconnected tools."
    },
    cta: {
        buttonText: "Get a demo"
    },
    showcase: {
        eyebrow: "Live Feature Showcase",
        title: "Built for speed, clarity, and rapid deal closing"
    },
    cards: [
        {
            label: "01 · Lead Capture",
            title: "Instant web contacts",
            description: "Automated webforms and WhatsApp router assign reps in real-time.",
            buttonText: "Explore Forms",
            image: "/feature_lead.png"
        },
        {
            label: "02 · WhatsApp App",
            title: "Quote & close in chat",
            description: "Official Cloud API syncs conversations directly to client timelines.",
            buttonText: "Connect Chat",
            image: "/feature_whatsapp.png"
        },
        {
            label: "03 · Quote-to-Cash",
            title: "One-click payments",
            description: "Tax rates, items, and payment links get dispatched instantly.",
            buttonText: "View Billing",
            image: "/feature_invoice.png"
        },
        {
            label: "04 · 360° Dossier",
            title: "Client history unified",
            description: "View deal status, archives, invoices, and tasks on one screen.",
            buttonText: "See Profile",
            image: "/feature_dossier.png"
        },
        {
            label: "05 · Visual Drag-Drop",
            title: "Custom pipeline flow",
            description: "Drag deal cards to instantly update automated stage probabilities.",
            buttonText: "View Pipeline",
            image: "/feature_kanban.png"
        },
        {
            label: "06 · Live Analytics",
            title: "Revenue forecasting",
            description: "Track conversion rates and predict Q3 revenue based on active deals.",
            buttonText: "Open Reports",
            image: "/feature_analytics.png"
        }
    ],
    pipeline: {
        header: {
            eyebrow: "Conversion Pipeline",
            titlePre: "Stop copy-pasting between tools. ",
            titleHighlight: "Let the pipeline do it.",
            subtitle: "Most CRMs stop at \"deal won.\" Velora keeps going straight into quoting, invoicing, cash collection, and team delivery.",
            ctaText: "See how it works",
            bottomCtaText: "Build your pipeline"
        },
        steps: [
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
                desc: 'Velora automatically enriches the contact with company data, social profiles, and historical interactions if they are a returning client.',
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
        ]
    },
    workspace: {
        header: {
            eyebrow: "Workspace Module",
            titlePre: "Sales closes it. ",
            titleHighlight: "Your team delivers it.",
            subtitle: "Stop switching to external project management apps once a deal closes. Velora transfers the scope directly to team tasks, client hubs, and budget trackers."
        },
        features: [
            {
                title: "Project Tracking",
                description: "Track status, budget vs actual cost, and share client-visible updates in one unified place."
            },
            {
                title: "Granular Role Permissions",
                description: "5 role tiers (Owner, Admin, Manager, Employee, Viewer) keep confidential financials safe."
            }
        ]
    },
    integrationHub: {
        header: {
            eyebrow: "Integration Hub",
            titlePre: "Talk to leads ",
            titleHighlight: "without leaving the CRM.",
            subtitle: "No separate tabs required. Send WhatsApp template messages, capture website webform entries, and monitor ad campaign returns right from your deal view."
        },
        tags: ['WhatsApp Cloud API', 'Website Webhooks', 'Meta Ads Lead Gen', 'Google Analytics', 'Stripe Payments', 'Clearbit Data']
    },
    analytics: {
        header: {
            eyebrow: "Scale & Automation",
            titlePre: "The busywork happens ",
            titleHighlight: "on its own.",
            subtitle: "Out-of-the-box revenue reports, pipeline velocity tracking, and trigger-based automation rules. All activity is logged live."
        },
        funnel: [
            { label: "Inbound Leads", count: "320 (100%)", percentage: 100 },
            { label: "Qualified Deals", count: "180 (56%)", percentage: 56 },
            { label: "Closed Won", count: "112 (35%)", percentage: 35 }
        ],
        mrr: {
            value: 84.2,
            change: "+18.4%"
        }
    },
    crm360: {
        eyebrowNum: "08",
        eyebrow: "No more \"let me check and get back to you\"",
        titlePre: "Walk into any client call already ",
        titleHighlight: "knowing everything.",
        subtitlePre: "The deal history, the unpaid invoice, the WhatsApp thread from last night — ",
        subtitleBold: "they're already on the profile before you open it.",
        subtitlePost: " Nobody digs through four tools to answer one question.",
        sources: ["Pipeline", "Billing", "Inbox", "Call Notes"],
        client: {
            initials: "NR",
            name: "Northridge Retail Group",
            handledBy: "Devon Cole",
            tenure: "3 years on the books"
        },
        cells: [
            {
                label: "Where the deal stands",
                main: "Contract renewal — stage: Negotiation",
                sub: "/yr · sitting 11 days",
                amount: 62000
            },
            {
                label: "Money owed",
                main: "Invoice #INV-1187",
                sub: "9 days overdue",
                amount: 6200
            }
        ],
        activity: [
            { day: "Mon", desc: "Asked for a payment extension over email" },
            { day: "Fri", desc: "Missed the scheduled renewal call" }
        ],
        insight: "An overdue invoice and a skipped call on a renewing account is a pattern worth a phone call today, not another automated reminder."
    },
    security: {
        header: {
            eyebrow: "Spec Sheet — Security & Privacy",
            title: "Your data, scoped and protected by default.",
            subtitle: "Enterprise-grade isolation architecture designed for client service organizations holding strict NDAs."
        },
        cards: [
            { title: "Tenant Isolation", description: "Every workspace data model is strictly scoped. No cross-tenant data leakage by design." },
            { title: "Role-Based Access", description: "5 hierarchical roles ensure employees and external contractors see only their assigned projects." },
            { title: "Security Headers", description: "Strict CSP, clickjacking prevention, and MIME-sniffing protection enforced on every endpoint." },
            { title: "Session Expiry", description: "Automatic session revocation and encrypted token rotation keep unauthorized devices out." }
        ]
    },
    comparison: [
        { feature: 'CRM & PIPELINE MANAGEMENT', replaces: ['HubSpot', 'ActiveCampaign'], cost: 99 },
        { feature: 'UNLIMITED SALES FUNNELS', replaces: ['ClickFunnels', 'Leadpages'], cost: 297 },
        { feature: 'WEBSITE BUILDER', replaces: ['WordPress', 'Squarespace', 'Wix'], cost: 29 },
        { feature: 'ECOMMERCE', replaces: ['Shopify', 'WooCommerce'], cost: 39 },
        { feature: 'SURVEYS & FORMS', replaces: ['Jotform', 'Typeform', 'Wufoo'], cost: 79 },
        { feature: 'EMAIL MARKETING', replaces: ['Mailchimp', 'Constant Contact', 'HubSpot'], cost: 99 },
        { feature: '2-WAY SMS MARKETING', replaces: ['Skipio', 'Podium', 'Sendlane'], cost: 99 },
        { feature: 'BOOKING & APPOINTMENTS', replaces: ['Calendly', 'Acuity Scheduling'], cost: 29 },
        { feature: 'WORKFLOW AUTOMATIONS', replaces: ['Keap', 'ActiveCampaign', 'HubSpot'], cost: 169 },
        { feature: 'AI VOICE AGENT', replaces: ['Air', 'Synthflow'], cost: 199 },
        { feature: 'AI CONTENT & CHAT', replaces: ['Jasper', 'Drift'], cost: 99 },
        { feature: 'AD MANAGEMENT', replaces: ['AdEspresso', 'Madgicx'], cost: 49 },
        { feature: 'SEO & LOCAL LISTINGS', replaces: ['Yext', 'Brightlocal'], cost: 99 },
        { feature: 'COURSES & PRODUCTS', replaces: ['Kajabi', 'Teachable'], cost: 99 },
        { feature: 'COMMUNITIES', replaces: ['Skool', 'Mighty Networks', 'Circle'], cost: 89 },
        { feature: 'CALL TRACKING', replaces: ['CallRail', 'CallTrackingMetrics'], cost: 49 },
        { feature: 'REPUTATION MANAGEMENT', replaces: ['Birdeye', 'Podium'], cost: 159 },
        { feature: 'TRACKING & ANALYTICS', replaces: ['AgencyAnalytics'], cost: 49 },
        { feature: 'DOCUMENT SIGNING', replaces: ['DocuSign', 'PandaDoc'], cost: 47 },
        { feature: 'GRAY-LABELED MOBILE APP', replaces: ['Unique to Velora'], cost: 49 }
    ],
    pricing: {
        header: {
            eyebrow: "Simple, Transparent Pricing",
            title: "Pick the plan that matches how far you want to take it.",
            subtitle: "Start free today. Scale as your agency team and revenue pipeline grow."
        },
        plans: [
            {
                name: "Starter",
                subtitle: "Solo founders & small teams",
                monthlyPrice: 29,
                yearlyPrice: 23,
                features: ["Leads, Contacts & Deals", "Quotes & Invoicing", "Basic KPI Dashboard", "Up to 3 Team Members"],
                ctaText: "Start Starter Pack"
            },
            {
                name: "Growth",
                subtitle: "Agencies actively selling",
                monthlyPrice: 79,
                yearlyPrice: 63,
                popular: true,
                features: ["Everything in Starter", "Pipeline Automation", "WhatsApp Cloud API", "Full Workspace & Tasks", "Up to 10 Team Members"],
                ctaText: "Start your growth journey"
            },
            {
                name: "Scale",
                subtitle: "Multi-team operations",
                monthlyPrice: 199,
                yearlyPrice: 159,
                features: ["Everything in Growth", "Ads Connectors (Meta & Google)", "Advanced Event Automations", "AI Lead Scoring Assistant", "Unlimited Team Seats"],
                ctaText: "Contact Enterprise"
            }
        ]
    },
    faq: [
        { q: "What is Velora CRM used for?", a: "An all-in-one workspace for agencies to manage leads, deals, quotes, invoicing, and projects — in one real-time platform instead of scattered tools." },
        { q: "How does Velora turn a won deal into cash?", a: "Quotes convert to invoices in one click, payments process via Stripe or bank transfer, and the deal auto-marks \"Won\" with a receipt." },
        { q: "What is the 360° Client Profile?", a: "A single screen showing a contact's deals, invoices, communication history, and lead score, all in one view." },
        { q: "What integrations does Velora offer?", a: "Native connections to WhatsApp, website webhooks, Meta Ads, Google Analytics, Stripe, and Clearbit — all from the deal view." },
        { q: "How does Velora capture and assign leads?", a: "Leads come in via website forms and WhatsApp, then get auto-assigned to reps by service type with automatic lead scoring." }
    ],
    onboarding: {
        header: {
            title: "Live in five steps, not five days.",
            subtitle: "No complex data migration required to get started — just the essentials."
        },
        steps: [
            { title: 'Company Info', desc: 'Company name, industry, website' },
            { title: 'Location', desc: 'Address & timezone' },
            { title: 'Admin Profile', desc: 'Full name, role' },
            { title: 'Documents', desc: 'Currency, GST / PAN' },
            { title: 'Finish', desc: 'Ready to work' }
        ]
    }
};

async function seed() {
    try {
        console.log("Seeding data to Firebase RTDB...");
        await set(ref(db, 'landing'), landingData);
        console.log("Seed successful!");
        process.exit(0);
    } catch (e) {
        console.error("Seed failed:", e);
        process.exit(1);
    }
}

seed();
