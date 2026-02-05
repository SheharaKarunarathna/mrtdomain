import React from 'react';

export default function PricingSection() {
    return (
        <section className="py-24 px-6 md:px-0 relative z-10 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Simple, Symmetrical Pricing
                </h2>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                    Choose the perfect plan for your professional online presence. No hidden fees, just pure performance.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 px-4">

                {/* Card 1: Subdomain (Most Popular - 600 LKR) */}
                <div className="relative bg-white rounded-[2rem] shadow-xl border-2 border-blue-600 flex flex-col p-10 z-10 hover:scale-105 transition-transform duration-300">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                        Most Popular
                    </div>

                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 4.055c-2.168 0-4.03.69-5.603 1.958" />
                        </svg>
                    </div>

                    <h3 className="text-center text-2xl font-black text-slate-900 mb-2 tracking-tight">Subdomain</h3>
                    <div className="text-center mb-10">
                        <span className="text-slate-400 text-sm line-through block mb-1">800 LKR</span>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-6xl font-black text-blue-600 tracking-tighter">600</span>
                            <span className="text-xl font-bold text-blue-600 mt-4">LKR</span>
                        </div>
                        <span className="text-blue-600/60 text-xs font-bold tracking-widest uppercase mt-3 block">One-time payment</span>
                    </div>

                    <ul className="space-y-5 mb-10 flex-1 px-2">
                        {[
                            "Custom mrt.lk subdomain",
                            "SSL certificate included",
                            "99.9% uptime guarantee",
                            "Lightweight hosting"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-medium text-slate-600 group">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl shadow-blue-200 shadow-xl hover:shadow-2xl transition-all transform active:scale-95 uppercase tracking-wide text-sm">
                        Purchase now
                    </button>
                </div>

                {/* Card 2: Subdomain Network (2000 LKR) */}
                <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl border border-slate-100 flex flex-col p-10 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-600 group-hover:text-blue-600 transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
                        </svg>
                    </div>

                    <h3 className="text-center text-xl font-bold text-slate-900 mb-2">Subdomain Network</h3>
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-5xl font-black text-slate-800 tracking-tighter">2000</span>
                            <span className="text-base font-bold text-slate-500 mt-4">LKR</span>
                        </div>
                        <span className="text-slate-400 text-xs font-bold tracking-widest uppercase mt-3 block">One-time payment</span>
                    </div>

                    <ul className="space-y-5 mb-10 flex-1 px-2">
                        {[
                            "Create sub-subdomains",
                            "Management dashboard",
                            "Full API access",
                            "Priority 24/7 support",
                            "Advanced analytics"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-medium text-slate-600">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-5 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all uppercase tracking-wide text-sm">
                        Purchase now
                    </button>
                </div>

                {/* Card 3: Full Development */}
                <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl border border-slate-100 flex flex-col p-10 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-600 group-hover:text-purple-600 transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </div>

                    <h3 className="text-center text-xl font-bold text-slate-900 mb-2">Full Development</h3>
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-4xl font-black text-slate-800">Negotiable</span>
                        </div>
                        <span className="text-slate-400 text-xs font-bold tracking-widest uppercase mt-3 block">Custom Quote</span>
                    </div>

                    <ul className="space-y-5 mb-10 flex-1 px-2">
                        {[
                            "Custom design & layout",
                            "Full-stack development",
                            "SEO optimization",
                            "Maintenance & Support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-medium text-slate-600">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-5 rounded-2xl border-2 border-slate-200 hover:border-purple-400 hover:text-purple-600 transition-all uppercase tracking-wide text-sm">
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Compare Plans</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-y border-slate-100">
                                <th className="p-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">Feature</th>
                                <th className="p-6 text-xs font-bold text-slate-900 uppercase tracking-wider text-center w-1/4">Subdomain</th>
                                <th className="p-6 text-xs font-bold text-slate-900 uppercase tracking-wider text-center w-1/4">Network</th>
                                <th className="p-6 text-xs font-bold text-slate-900 uppercase tracking-wider text-center w-1/4">Full Dev</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                { name: "SSL Certificate", sub: true, net: true, dev: true },
                                { name: "Custom Sub-subdomains", sub: false, net: true, dev: "N/A" },
                                { name: "API Access", sub: false, net: "Full", dev: true },
                                { name: "Support Tier", sub: "Standard", net: "Priority", dev: "Dedicated" },
                            ].map((row, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 text-sm font-medium text-slate-700">{row.name}</td>
                                    <td className="p-6 text-center">
                                        {row.sub === true ? (
                                            <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        ) : row.sub === false ? (
                                            <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                        ) : (
                                            <span className="text-sm text-slate-600">{row.sub}</span>
                                        )}
                                    </td>
                                    <td className="p-6 text-center">
                                        {row.net === true ? (
                                            <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        ) : row.net === "Full" ? (
                                            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-bold">Full</span>
                                        ) : row.net === "Priority" ? (
                                            <span className="text-sm font-bold text-blue-600">Priority</span>
                                        ) : (
                                            <span className="text-sm text-slate-600">{row.net}</span>
                                        )}
                                    </td>
                                    <td className="p-6 text-center">
                                        {row.dev === true ? (
                                            <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        ) : row.dev === "Dedicated" ? (
                                            <span className="text-sm font-bold text-slate-900">Dedicated</span>
                                        ) : (
                                            <span className="text-sm text-slate-400">{row.dev}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
