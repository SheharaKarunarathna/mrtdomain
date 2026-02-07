import React, { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "Why buy a .mrt.lk subdomain?",
        answer: "A .mrt.lk subdomain offers numerous advantages:\n\n• Highly SEO-friendly, perfectly suited for websites related to Moratuwa, helping you rank better in local searches\n\n• Simple and straightforward buying process, no complex letter requests or bureaucratic paperwork required\n\n• Purchase and get hosted within minutes, not hours or days\n\n• Custom email addresses (e.g., contact@yourproject.mrt.lk) included at no extra cost\n\n• We handle DNS-related issues in private networks within the area, so you never have to worry about technical complications\n\n• Reliable and accountable customer service ensures you're always supported throughout your journey"
    },
    // {
    //     question: "Can I sell my subdomain?",
    //     answer: "No, subdomains are provided for personal or organizational use and cannot be sold or transferred for profit. They remain the property of the MRT.LK registry."
    // },
    {
        question: "How long does setup take?",
        answer: "Standard subdomain registration is instant after approval. If you request managed hosting, setup typically takes 1-2 hours depending on your specific requirements."
    },
    {
        question: "Can I get hosting with my subdomain?",
        answer: "Yes! While the subdomain itself is free, we offer optional managed hosting packages associated with your domain for a seamless experience. Check out our Hosting & Email section for details."
    },
    {
        question: "Can I install WordPress or other apps?",
        answer: "If you opt for our managed hosting, you can easily install WordPress, Joomla, or other CMS platforms. If you point the subdomain to your own server, you have full control to install whatever you like."
    },
    {
        question: "Can I create email accounts?",
        answer: "Email accounts (e.g., you@name.mrt.lk) are available with our optional Email Hosting add-on. We provide professional webmail access and IMAP/POP3 support."
    },
    {
        question: "What if my subdomain is not approved?",
        answer: "Requests may be rejected if the subdomain name is inappropriate, violates our usage policies, or if hosting resources are unavailable. We will provide feedback and may suggest alternatives."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 md:px-0 relative z-10 w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                    Find answers to common questions about our subdomain service
                </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                ? 'border-blue-200 shadow-lg ring-1 ring-blue-100'
                                : 'border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-md'
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 outline-none group"
                        >
                            <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'
                                }`}>
                                {faq.question}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-blue-100 rotate-180' : 'bg-slate-50 group-hover:bg-blue-50'
                                }`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 md:p-8 pt-0 text-slate-500 leading-relaxed border-t border-slate-50/50 whitespace-pre-line">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
