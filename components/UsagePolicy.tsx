"use client";
import React from 'react';

export default function UsagePolicy() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-24 px-6 md:px-0 relative z-10 w-full max-w-4xl mx-auto">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Usage Policy & Rules
                </h2>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                    To ensure compliance and proper usage, all subdomains must follow these rules:
                </p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12 mb-8">
                <ul className="space-y-6">
                    {[
                        "No illegal content, phishing, scams, or adult material",
                        "No impersonation of MRT or any institution",
                        "No spam or bulk email abuse"
                    ].map((rule, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-medium text-slate-700">
                                {rule}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-slate-100 border border-red-500/30 rounded-2xl p-6 md:p-8 mb-12">
                <p className="text-slate-700 text-lg leading-relaxed flex items-start gap-3">
                    <span className="inline-block mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.753-2.5-2.598-4.5L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>
                        <strong className="text-red-600 font-black">Important:</strong> We reserve the right to suspend subdomains that violate policies. Subdomains are provided as a managed service; ownership cannot be transferred or sold.
                    </span>
                </p>
            </div>

            <button
                onClick={scrollToTop}
                className="bg-slate-900 hover:bg-black text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 tracking-wide uppercase text-sm flex items-center gap-2 group"
            >
                <span>Back to Top</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-y-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </section>
    );
}
