import React from 'react';

export default function HostingEmailSection() {
    return (
        <section className="py-24 px-6 md:px-0 relative z-10 w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Optional <span className="text-blue-600">Hosting & Email</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    While subdomains are provided by default, you can request managed hosting and email services to elevate your professional online presence.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                    {
                        title: "Server Hosting",
                        desc: "High-performance 4GB RAM & SSD storage infrastructure.",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.269 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
                            </svg>
                        )
                    },
                    {
                        title: "Platform Support",
                        desc: "Full compatibility for WordPress or custom built websites.",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        )
                    },
                    {
                        title: "Email Accounts",
                        desc: "Professional 1-5 email accounts per domain setup.",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        )
                    },
                    {
                        title: "Security",
                        desc: "Industry-standard free SSL certificate included.",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        )
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-slate-50 flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Note Box */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex items-start md:items-center justify-center gap-4 text-center md:text-left">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">i</div>
                    <p className="text-slate-700 text-sm font-medium">
                        <span className="font-extrabold text-slate-900 mr-1">Note:</span>
                        Hosting is limited. Approval is based on availability and technical requirements of your project.
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
                <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg">
                    Request Managed Hosting
                </button>
            </div>
        </section>
    );
}
