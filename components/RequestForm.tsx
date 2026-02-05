"use client";
import { useState } from "react";

interface RequestFormProps {
    onClose: () => void;
}

export default function RequestForm({ onClose }: RequestFormProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#e0f2fe]/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Form Card */}
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="max-h-[85vh] overflow-y-auto p-8 md:p-10">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Request Your Subdomain</h2>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Our subdomains are provided on request. Hosting and email accounts are available for an additional fee, based on your requirements.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Desired Subdomain */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Desired Subdomain</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="portfolio / club / sport / ..."
                                    className="flex-1 px-4 py-3 bg-slate-50 border border-r-0 border-slate-200 rounded-l-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                                <span className="px-4 py-3 bg-slate-100 border border-slate-200 border-l-0 rounded-r-lg text-slate-500 font-mono text-sm">
                                    .mrt.lk
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Purpose / Project Description</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us about your project or club..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Phone / WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="+94 XX XXX XXXX"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Hosting Required */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Hosting/Email Required?</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                                    <option>No, just the subdomain</option>
                                    <option>Yes, I need hosting</option>
                                    <option>Yes, I need email</option>
                                    <option>Yes, both hosting & email</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Special Requirements */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Special Requirements (Optional)</label>
                            <textarea
                                rows={2}
                                placeholder="Any specific needs or questions..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-[#0B3D75] hover:bg-[#093260] text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] mt-4 tracking-wide uppercase text-sm">
                            SUBMIT REQUEST
                        </button>

                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </div>
                        <span>© 2024 mrt.lk Subdomain Services</span>
                    </div>

                </div>

                {/* Close Button absolute */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
