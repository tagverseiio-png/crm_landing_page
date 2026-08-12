"use client";

export default function IntegrationsMarquee() {
    const tools = [
        { 
            name: 'WhatsApp', 
            icon: (
                <svg className="w-16 h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Core: White circle to guarantee the phone hole is solidly white */}
                    <circle cx="12" cy="12" r="10" fill="#FFF" />
                    {/* Middle: Expanded white compound path for the sticker border */}
                    <path fill="#FFF" stroke="#FFF" strokeWidth="1.2" strokeLinejoin="round" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    {/* Top: Perfectly sharp green bubble with clean cutout */}
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            )
        },
        /*
        { 
            name: 'Instagram', 
            icon: (
                <svg className="w-16 h-16 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="ig-grad" r="1.5" cx="0.2" cy="1">
                            <stop offset="0" stopColor="#fdf497"/>
                            <stop offset="0.05" stopColor="#fdf497"/>
                            <stop offset="0.45" stopColor="#fd5949"/>
                            <stop offset="0.6" stopColor="#d6249f"/>
                            <stop offset="0.9" stopColor="#285AEB"/>
                        </radialGradient>
                    </defs>
                    <rect width="24" height="24" rx="5.5" fill="url(#ig-grad)"/>
                    <path fill="none" stroke="#fff" strokeWidth="1.8" d="M7.5 5h9a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 015 16.5v-9A2.5 2.5 0 017.5 5z"/>
                    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8"/>
                    <circle cx="17" cy="7" r="1.2" fill="#fff"/>
                </svg>
            )
        },
        { 
            name: 'Facebook', 
            icon: (
                <svg className="w-16 h-16 drop-shadow-md" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1877F2" d="M18 0C8.06 0 0 8.06 0 18c0 8.97 6.55 16.4 15.19 17.84V23.22H10.61V18h4.58v-3.97c0-4.52 2.69-7.03 6.82-7.03 1.97 0 4.04.35 4.04.35v4.44h-2.28c-2.24 0-2.94 1.39-2.94 2.81V18h5.04l-.8 5.22h-4.24v12.62C29.45 34.4 36 26.97 36 18 36 8.06 27.94 0 18 0z"/>
                    <path fill="#FFF" d="M24.08 23.22l.8-5.22h-5.04v-3.39c0-1.42.7-2.81 2.94-2.81h2.28V7.35s-2.07-.35-4.04-.35c-4.13 0-6.82 2.51-6.82 7.03V18h-4.58v5.22h4.58v12.62c1.4.22 2.83.22 4.23 0V23.22h4.24z"/>
                </svg>
            )
        },
        { 
            name: 'Google', 
            icon: (
                <svg className="w-16 h-16 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#ffffff" />
                    <path fill="#4285F4" d="M23.745 12.27c0-.825-.07-1.62-.2-2.39H12.24v4.52h6.453c-.278 1.46-1.096 2.7-2.33 3.52v2.93h3.774c2.21-2.03 3.608-5.02 3.608-8.58z"/>
                    <path fill="#34A853" d="M12.24 24c3.24 0 5.955-1.08 7.942-2.91l-3.774-2.93c-1.077.72-2.455 1.15-3.955 1.15-3.04 0-5.617-2.05-6.536-4.81H2.02v3.02C4.015 21.47 7.794 24 12.24 24z"/>
                    <path fill="#FBBC05" d="M5.704 14.51c-.237-.71-.37-1.47-.37-2.26s.133-1.55.37-2.26V6.97H2.02c-.8 1.59-1.25 3.39-1.25 5.28s.45 3.69 1.25 5.28l3.684-3.02z"/>
                    <path fill="#EA4335" d="M12.24 4.69c1.764 0 3.348.61 4.593 1.79l3.447-3.45C18.19 1.1 15.476 0 12.24 0 7.794 0 4.015 2.53 2.02 6.47l3.684 3.02c.92-2.76 3.497-4.81 6.536-4.81z"/>
                </svg>
            )
        },
        */
        { 
            name: 'Meta', 
            icon: (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="w-28 h-16 drop-shadow-md object-contain scale-125" />
            )
        },
        { 
            name: 'Google Ads', 
            icon: (
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="w-20 h-20 drop-shadow-md object-contain scale-110" />
            )
        },
    ];

    // Double the array for seamless marquee scrolling
    const marqueeItems = [...tools, ...tools, ...tools, ...tools, ...tools];

    return (
        <section className="py-10 sm:py-16 overflow-hidden bg-white border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Integrates With Your Favorite Tools</h3>
            </div>
            
            <div className="relative flex overflow-x-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                
                <div className="animate-marquee-slow flex gap-16 sm:gap-32 whitespace-nowrap py-4">
                    {marqueeItems.map((tool, index) => (
                        <div key={index} className="flex items-center shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer" title={tool.name}>
                            {tool.icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
