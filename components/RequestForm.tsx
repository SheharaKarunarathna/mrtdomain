"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface RequestFormProps {
    onClose: () => void;
    price?: string;
}

export default function RequestForm({ onClose, price = "600.00" }: RequestFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Form fields
    const [fullName, setFullName] = useState("");
    const [subdomain, setSubdomain] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [hosting, setHosting] = useState("No, just the subdomain");
    const [specialReqs, setSpecialReqs] = useState("");
    const [bankSlip, setBankSlip] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setSubmitStatus("error");
                setErrorMessage("You must be signed in to submit a request.");
                setIsSubmitting(false);
                return;
            }

            let bankSlipUrl = "";

            // 1. Upload Bank Slip if exists
            if (bankSlip) {
                const fileExt = bankSlip.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${session.user.id}/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('bank-slips')
                    .upload(filePath, bankSlip);

                if (uploadError) throw uploadError;

                // Get public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('bank-slips')
                    .getPublicUrl(filePath);

                bankSlipUrl = publicUrl;
            }

            // 2. Insert into domain_requests
            const { error: insertError } = await supabase
                .from('domain_requests')
                .insert({
                    user_id: session.user.id,
                    full_name: fullName,
                    desired_subdomain: subdomain,
                    description: description,
                    email: email,
                    phone: phone,
                    hosting_requirement: hosting,
                    special_requirements: specialReqs,
                    bank_slip_url: bankSlipUrl,
                    status: 'pending'
                });

            if (insertError) throw insertError;

            setSubmitStatus("success");
            setTimeout(() => {
                onClose();
            }, 3000);

        } catch (error: any) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
            setErrorMessage(error.message || "Failed to submit request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === "success") {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[#e0f2fe]/80 backdrop-blur-sm" />
                <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Request Submitted!</h2>
                    <p className="text-slate-500 mb-6 text-sm">
                        Thank you! Your request for <span className="font-bold text-blue-600">{subdomain}.mrt.lk</span> has been sent for review.
                    </p>
                    <p className="text-xs text-slate-400">Closing in 3 seconds...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Form Card */}
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
                <div className="overflow-y-auto p-8 md:p-10 pb-20">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Request Your Subdomain</h2>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Our subdomains are provided on request. Hosting and email accounts are available for an additional fee, based on your requirements.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Full Name</label>
                            <input
                                required
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Desired Subdomain */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Desired Subdomain</label>
                            <div className="flex items-center">
                                <input
                                    required
                                    type="text"
                                    value={subdomain}
                                    onChange={(e) => setSubdomain(e.target.value)}
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
                                required
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Tell us about your project or club..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Email Address</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Phone / WhatsApp</label>
                            <input
                                required
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+94 XX XXX XXXX"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>

                        {/* Hosting Required */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">Hosting/Email Required?</label>
                            <div className="relative">
                                <select
                                    value={hosting}
                                    onChange={(e) => setHosting(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                                >
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
                                value={specialReqs}
                                onChange={(e) => setSpecialReqs(e.target.value)}
                                placeholder="Any specific needs or questions..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                            />
                        </div>

                        {/* Payment Information */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-3">
                            <div className="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="font-bold text-blue-900 text-sm uppercase tracking-wider">Payment Details</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                                <div className="flex justify-between items-center border-b-2 border-blue-200 pb-3 mb-2">
                                    <span className="text-blue-900 font-extrabold uppercase tracking-tight">Annual Fee</span>
                                    <span className="text-xl font-black text-blue-900">
                                        {price === "Negotiable" ? "Negotiable" : `Rs. ${price}`}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span className="text-slate-500">Bank</span>
                                    <span className="font-bold text-slate-800 uppercase">Boc</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span className="text-slate-500">Branch</span>
                                    <span className="font-bold text-slate-800 uppercase">Nelundeniya</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-100 pb-2">
                                    <span className="text-slate-500">Account Number</span>
                                    <span className="font-mono font-bold text-blue-700">93818196</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Account Holder</span>
                                    <span className="font-bold text-slate-800">HRPR Kumarasinghe</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-blue-400 italic text-center mt-2 font-medium">
                                * Please mention your domain name as reference during transfer
                            </p>
                        </div>

                        {/* Bank Slip Upload */}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5 uppercase tracking-wide">Upload Bank Slip (PDF / Image)</label>
                            <div className="relative group">
                                <input
                                    required
                                    type="file"
                                    accept=".pdf,image/*"
                                    onChange={(e) => setBankSlip(e.target.files?.[0] || null)}
                                    className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-3 file:px-6
                                        file:rounded-lg file:border-0
                                        file:text-sm file:font-bold
                                        file:bg-blue-100 file:text-blue-700
                                        hover:file:bg-blue-200
                                        cursor-pointer
                                        border border-slate-200 rounded-lg bg-slate-50
                                        transition-all"
                                />
                                <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    Max file size: 5MB. Supported formats: .pdf, .jpg, .png
                                </div>
                            </div>
                        </div>

                        {submitStatus === "error" && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-medium">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#0B3D75] hover:bg-[#093260] disabled:bg-[#0B3D75]/60 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] mt-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    PROCESSING...
                                </>
                            ) : "SUBMIT REQUEST"}
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
