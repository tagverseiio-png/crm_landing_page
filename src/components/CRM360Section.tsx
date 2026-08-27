"use client";

import React, { useState, useEffect } from 'react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

export default function CRM360Section() {
    const { data: crmData, loading } = useFirebaseData<any>('landing/crm360');
    const [currencyOptions, setCurrencyOptions] = useState<Intl.NumberFormatOptions>({
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    useEffect(() => {
        try {
            // First try timezone, which is often more accurate for location
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
            let currencyCode = 'USD';
            
            if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India')) currencyCode = 'INR';
            else if (tz.includes('Europe') || tz.includes('Berlin') || tz.includes('Paris') || tz.includes('Madrid') || tz.includes('Rome')) currencyCode = 'EUR';
            else if (tz.includes('London')) currencyCode = 'GBP';
            else if (tz.includes('Australia')) currencyCode = 'AUD';
            else if (tz.includes('Toronto') || tz.includes('Vancouver')) currencyCode = 'CAD';
            else if (tz.includes('Dubai')) currencyCode = 'AED';
            else if (tz.includes('Singapore')) currencyCode = 'SGD';
            else if (tz.includes('Tokyo')) currencyCode = 'JPY';
            else if (tz.includes('Auckland')) currencyCode = 'NZD';
            else if (tz.includes('Johannesburg')) currencyCode = 'ZAR';
            else {
                // Fallback to navigator.language mapping
                const locale = navigator.language || 'en-US';
                const countryMatch = locale.match(/-([A-Z]{2})/i);
                const country = countryMatch ? countryMatch[1].toUpperCase() : '';
                const currencyMap: Record<string, string> = {
                    'US': 'USD', 'GB': 'GBP', 'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR',
                    'IN': 'INR', 'JP': 'JPY', 'AU': 'AUD', 'CA': 'CAD', 'BR': 'BRL', 'ZA': 'ZAR'
                };
                if (country && currencyMap[country]) {
                    currencyCode = currencyMap[country];
                }
            }
            
            setCurrencyOptions({
                style: 'currency',
                currency: currencyCode,
                maximumFractionDigits: 0
            });
        } catch (e) {
            // fallback defaults to initial state
        }
    }, []);

    const formatCurrency = (amount: number) => {
        try {
            return new Intl.NumberFormat(undefined, currencyOptions).format(amount);
        } catch (e) {
            return "$" + amount.toLocaleString();
        }
    };

    const getAmount = (cell: any, defaultAmount: number) => {
        if (!cell) return defaultAmount;
        const amountsObj = cell.amounts || cell.Amounts || {};
        const currencyCode = (currencyOptions.currency as string).toUpperCase();
        
        const exactPrice = Object.entries(amountsObj).find(([k]) => k.toUpperCase() === currencyCode)?.[1];
        
        return (exactPrice as number) ?? cell.amount ?? cell.Amount ?? defaultAmount;
    };

    if (loading) return <SectionSkeleton />;

    return (
        <section id="view360" className="bg-[#F6F7FA] font-['Inter',sans-serif] text-[#0B1220] antialiased relative overflow-hidden border-y border-gray-200/80">
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
                
                .c360-wrap {
                    max-width: 1080px;
                    margin: 0 auto;
                    padding: 96px 32px 112px;
                    position: relative;
                }
                
                .c360-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(to right, rgba(11,18,32,0.035) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(11,18,32,0.035) 1px, transparent 1px);
                    background-size: 56px 56px;
                    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%);
                    mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%);
                    pointer-events: none;
                }
                
                .c360-eyebrow-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 22px;
                    opacity: 0;
                    animation: c360RiseIn 0.7s cubic-bezier(.19,1,.22,1) 0.05s forwards;
                }
                .c360-eyebrow-num {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 12px;
                    color: #2554F5;
                    background: rgba(37,84,245,0.16);
                    padding: 4px 9px;
                    border-radius: 6px;
                    letter-spacing: 0.04em;
                }
                .c360-eyebrow {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 12px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #5B6472;
                }
                
                .c360-h1 {
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: clamp(34px, 5vw, 54px);
                    line-height: 1.08;
                    letter-spacing: -0.02em;
                    text-align: center;
                    margin: 0 0 22px;
                    color: #0B1220;
                    opacity: 0;
                    animation: c360RiseIn 0.7s cubic-bezier(.19,1,.22,1) 0.15s forwards;
                }
                .c360-h1 .c360-accent-word {
                    color: #2554F5;
                    position: relative;
                    white-space: nowrap;
                }
                
                .c360-subhead {
                    text-align: center;
                    font-size: 17px;
                    line-height: 1.6;
                    color: #5B6472;
                    max-width: 560px;
                    margin: 0 auto 64px;
                    opacity: 0;
                    animation: c360RiseIn 0.7s cubic-bezier(.19,1,.22,1) 0.25s forwards;
                }
                .c360-subhead b { color: #0B1220; font-weight: 600; }
                
                .c360-stage {
                    position: relative;
                    opacity: 0;
                    animation: c360RiseIn 0.8s cubic-bezier(.19,1,.22,1) 0.35s forwards;
                }
                
                .c360-sources {
                    display: flex;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 0;
                    position: relative;
                    z-index: 2;
                }
                .c360-source-tag {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    background: #FFFFFF;
                    border: 1px solid #E4E7EE;
                    padding: 9px 14px;
                    border-radius: 100px;
                    font-size: 12.5px;
                    font-weight: 600;
                    color: #5B6472;
                    box-shadow: 0 1px 2px rgba(11,18,32,0.04);
                }
                .c360-source-tag .c360-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #2554F5;
                    flex-shrink: 0;
                }
                .c360-source-tag:nth-child(1) .c360-dot { background: #2554F5; }
                .c360-source-tag:nth-child(2) .c360-dot { background: #16A672; }
                .c360-source-tag:nth-child(3) .c360-dot { background: #E0432C; }
                .c360-source-tag:nth-child(4) .c360-dot { background: #9B59F6; }
                
                .c360-converge-lines {
                    height: 46px;
                    position: relative;
                    max-width: 520px;
                    margin: 0 auto;
                }
                .c360-converge-lines svg { width: 100%; height: 100%; display: block; }
                .c360-converge-lines path {
                    fill: none;
                    stroke: #E4E7EE;
                    stroke-width: 1.5;
                    stroke-dasharray: 4;
                }
                
                .c360-card {
                    position: relative;
                    z-index: 2;
                    background: #FFFFFF;
                    border: 1px solid #E4E7EE;
                    border-radius: 20px;
                    padding: 32px;
                    box-shadow: 0 24px 48px -20px rgba(11,18,32,0.14), 0 0 0 1px rgba(11,18,32,0.02);
                }
                
                .c360-card-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid #E4E7EE;
                    margin-bottom: 24px;
                }
                .c360-who { display: flex; gap: 14px; align-items: center; }
                .c360-avatar {
                    width: 48px; height: 48px;
                    border-radius: 12px;
                    background: linear-gradient(145deg, #2554F5, #1638B0);
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    flex-shrink: 0;
                    box-shadow: 0 6px 14px -4px rgba(37,84,245,0.5);
                }
                .c360-who-name { font-size: 17px; font-weight: 700; color: #0B1220; margin-bottom: 2px; }
                .c360-who-sub { font-size: 13px; color: #8891A0; }
                .c360-who-sub b { color: #5B6472; font-weight: 600; }
                
                .c360-badges { display: flex; gap: 8px; flex-shrink: 0; }
                .c360-badge {
                    font-size: 12px;
                    font-weight: 700;
                    padding: 6px 11px;
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    white-space: nowrap;
                }
                .c360-badge.c360-hot { background: #FDECEA; color: #E0432C; }
                .c360-badge.c360-live { background: #E7F7F0; color: #16A672; }
                .c360-badge .c360-pulse {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: currentColor;
                    animation: c360Pulse 1.8s ease-in-out infinite;
                }
                
                .c360-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1.2fr;
                    gap: 14px;
                    margin-bottom: 20px;
                }
                .c360-cell {
                    background: #FAFBFD;
                    border: 1px solid #E4E7EE;
                    border-radius: 12px;
                    padding: 16px;
                }
                .c360-cell-label {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 10.5px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #8891A0;
                    margin-bottom: 9px;
                }
                .c360-cell-main { font-size: 14.5px; font-weight: 700; color: #0B1220; margin-bottom: 4px; }
                .c360-cell-sub { font-size: 12.5px; color: #5B6472; }
                .c360-cell-sub.c360-green { color: #16A672; font-weight: 600; }
                .c360-cell-sub.c360-link { color: #2554F5; font-weight: 600; }
                
                .c360-activity-line {
                    display: flex;
                    gap: 8px;
                    font-size: 12.5px;
                    color: #5B6472;
                    margin-bottom: 6px;
                    line-height: 1.5;
                }
                .c360-activity-line:last-child { margin-bottom: 0; }
                .c360-activity-line b { color: #0B1220; font-weight: 600; }
                
                .c360-insight {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    background: linear-gradient(135deg, rgba(37,84,245,0.16), rgba(37,84,245,0.04));
                    border: 1px solid rgba(37,84,245,0.18);
                    border-radius: 12px;
                    padding: 14px 16px;
                    font-size: 13px;
                    color: #1638B0;
                    line-height: 1.5;
                }
                .c360-insight .c360-spark { flex-shrink: 0; font-size: 15px; margin-top: 1px; }
                .c360-insight b { font-weight: 700; }
                
                .c360-cta-row {
                    text-align: center;
                    margin-top: 56px;
                    opacity: 0;
                    animation: c360RiseIn 0.7s cubic-bezier(.19,1,.22,1) 0.5s forwards;
                }
                .c360-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    background: #0B1220;
                    color: #fff;
                    text-decoration: none;
                    font-size: 14.5px;
                    font-weight: 600;
                    padding: 14px 26px;
                    border-radius: 100px;
                    transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
                    box-shadow: 0 10px 24px -10px rgba(11,18,32,0.35);
                    cursor: pointer;
                    border: none;
                }
                .c360-cta:hover {
                    background: #1638B0;
                    transform: translateY(-2px);
                    box-shadow: 0 14px 28px -10px rgba(37,84,245,0.45);
                }
                .c360-cta svg { transition: transform 0.25s ease; }
                .c360-cta:hover svg { transform: translateX(3px); }
                
                @keyframes c360RiseIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes c360Pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .c360-wrap * { animation: none !important; opacity: 1 !important; transform: none !important; }
                }
                
                @media (max-width: 720px) {
                    .c360-grid { grid-template-columns: 1fr; }
                    .c360-card-top { flex-direction: column; gap: 16px; }
                    .c360-sources { flex-wrap: wrap; }
                    .c360-wrap { padding: 64px 20px 80px; }
                }
            `}} />

            <div className="c360-wrap">
                <div className="c360-grid-bg"></div>

                <div className="c360-eyebrow-row">
                    <span className="c360-eyebrow-num">{crmData?.eyebrowNum || '08'}</span>
                    <span className="c360-eyebrow">{crmData?.eyebrow || 'Loading...'}</span>
                </div>

                <h1 className="c360-h1">{crmData?.titlePre || 'Loading...'} <span className="c360-accent-word">{crmData?.titleHighlight || ''}</span></h1>

                <p className="c360-subhead">{crmData?.subtitlePre || 'Loading...'} <b>{crmData?.subtitleBold || ''}</b> {crmData?.subtitlePost || ''}</p>

                <div className="c360-stage">
                    <div className="c360-sources">
                        {(crmData?.sources || ['Pipeline', 'Billing', 'Inbox', 'Call Notes']).map((source: string, idx: number) => (
                            <div key={idx} className="c360-source-tag"><span className="c360-dot"></span>{source}</div>
                        ))}
                    </div>

                    <div className="c360-converge-lines">
                        <svg viewBox="0 0 520 46" preserveAspectRatio="none">
                            <path d="M 65 0 C 65 20, 260 20, 260 40"/>
                            <path d="M 195 0 C 195 20, 260 20, 260 40"/>
                            <path d="M 325 0 C 325 20, 260 20, 260 40"/>
                            <path d="M 455 0 C 455 20, 260 20, 260 40"/>
                        </svg>
                    </div>

                    <div className="c360-card">
                        <div className="c360-card-top">
                            <div className="c360-who">
                                <div className="c360-avatar">{crmData?.client?.initials || 'NR'}</div>
                                <div>
                                    <div className="c360-who-name">{crmData?.client?.name || 'Loading...'}</div>
                                    <div className="c360-who-sub">Handled by <b>{crmData?.client?.handledBy || '...'}</b> · {crmData?.client?.tenure || '...'}</div>
                                </div>
                            </div>
                            <div className="c360-badges">
                                <div className="c360-badge c360-hot"><span className="c360-pulse"></span>At Risk</div>
                                <div className="c360-badge c360-live"><span className="c360-pulse"></span>Renewal in 9 days</div>
                            </div>
                        </div>

                        <div className="c360-grid">
                            <div className="c360-cell">
                                <div className="c360-cell-label">{crmData?.cells?.[0]?.label || 'Loading...'}</div>
                                <div className="c360-cell-main">{crmData?.cells?.[0]?.main || 'Loading...'}</div>
                                <div className="c360-cell-sub c360-green">{formatCurrency(getAmount(crmData?.cells?.[0], 62000))}{crmData?.cells?.[0]?.sub || ''}</div>
                            </div>
                            <div className="c360-cell">
                                <div className="c360-cell-label">{crmData?.cells?.[1]?.label || 'Loading...'}</div>
                                <div className="c360-cell-main">{crmData?.cells?.[1]?.main || 'Loading...'} · {formatCurrency(getAmount(crmData?.cells?.[1], 6200))}</div>
                                <div className="c360-cell-sub" style={{ color: '#E0432C', fontWeight: 600 }}>{crmData?.cells?.[1]?.sub || 'Loading...'}</div>
                            </div>
                            <div className="c360-cell">
                                <div className="c360-cell-label">What actually happened</div>
                                {(crmData?.activity || []).map((act: any, idx: number) => (
                                    <div key={idx} className="c360-activity-line"><b>{act.day}</b> — {act.desc}</div>
                                ))}
                            </div>
                        </div>

                        <div className="c360-insight">
                            <span className="c360-spark">✦</span>
                            <span><b>Why this matters:</b> {crmData?.insight || 'Loading...'}</span>
                        </div>
                    </div>
                </div>

                <div className="c360-cta-row">
                    <button onClick={() => window.dispatchEvent(new Event('open-free-trial'))} className="c360-cta">
                        See what your clients aren't telling you
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
