"use client";
import React from 'react';

export default function ContactButton() {
    const mobileNumber = "0771595616";
    const whatsappUrl = `https://wa.me/${mobileNumber.replace(/^0/, '94')}`;

    return (
        <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group font-sans"
                title="Chat with us on WhatsApp"
            >
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 448 512" fill="currentColor" className="w-full h-full">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.3 106.2 27.3h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.4-14.7-27.5-32.8-30.7-38.3-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.9-3.7.9-7-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-90 leading-none mb-0.5">Chat with us</span>
                    <span className="text-sm font-bold leading-none tracking-tight">{mobileNumber}</span>
                </div>
            </a>

            {/* Email Button */}
            <a
                href="mailto:contact@mrt.lk"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group font-sans"
                title="Email us at contact@mrt.lk"
            >
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-90 leading-none mb-0.5">Email us</span>
                    <span className="text-sm font-bold leading-none tracking-tight">contact@mrt.lk</span>
                </div>
            </a>
        </div>
    );
}
