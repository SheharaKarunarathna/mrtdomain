"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import RequestForm from "./RequestForm";

export default function SearchComponent() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "available" | "occupied" | "pending_request">("idle");
    const [searchedName, setSearchedName] = useState("");
    const [errorUI, setErrorUI] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        setErrorUI(null);
        setStatus("loading");

        // Clean up the search term
        const input = searchTerm.toLowerCase().trim();
        const baseName = input.replace(".mrt.lk", "").trim();
        const fullDomainName = `${baseName}.mrt.lk`;

        setSearchedName(fullDomainName);

        try {
            console.log("🔍 Search Diagnostic:", { input, baseName, fullDomainName });

            // Query for BOTH the base name and the full name to be safe
            // Also fetch the 'desired_subdomain' and 'occupied' to verify what's actually there
            const { data, error } = await supabase
                .from("domain_requests")
                .select("desired_subdomain, occupied")
                .or(`desired_subdomain.eq.${baseName},desired_subdomain.eq.${fullDomainName}`);

            if (error) {
                console.error("❌ Supabase query error:", error);
                throw error;
            }

            console.log("📦 Data returned from Supabase:", data);

            if (data && data.length > 0) {
                // Check if any matching entry is officially occupied
                // We check for "YES" (case insensitive)
                const isOccupied = data.some(req =>
                    req.occupied?.toString().toUpperCase() === "YES"
                );

                if (isOccupied) {
                    console.log("🚫 Domain is officially OCCUPIED");
                    setStatus("occupied");
                } else {
                    console.log("⏳ Domain has a PENDING request");
                    setStatus("pending_request");
                }
            } else {
                console.log("✅ Domain NOT FOUND in database (Available)");
                setStatus("available");
            }
        } catch (err: any) {
            console.error("💥 Search execution failed:", err);
            setErrorUI(`Search Error: ${err.message || "Please check your database connection"}`);
            setStatus("idle");
        }
    };

    const handleBuyClick = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            console.log("User is logged in, opening request form");
            setIsFormOpen(true);
        } else {
            console.log("User not logged in, redirecting to signin");
            // Optionally pass the domain as a query param to return here later
            router.push(`/signin?returnTo=search&domain=${searchedName}`);
        }
    };

    return (
        <div className="w-full">
            <div className="flex items-center bg-white rounded-lg shadow-sm border border-blue-100 p-2 w-full mb-4 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <div className="flex items-center px-2 md:px-4 text-gray-400 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span className="font-mono text-xs md:text-sm">https://</span>
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="your-name.mrt.lk"
                    className="flex-1 px-2 md:px-4 py-2 outline-none font-mono text-sm md:text-base text-gray-700 bg-transparent min-w-0"
                />
                <button
                    onClick={handleSearch}
                    disabled={status === "loading"}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-md font-medium text-sm md:text-base flex items-center transition-colors shrink-0 disabled:opacity-70"
                >
                    {status === "loading" ? "..." : "Search"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

            {/* Results Display */}
            {errorUI && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl mb-4 flex items-center text-orange-800 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-3 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {errorUI}
                </div>
            )}

            {status !== "idle" && status !== "loading" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    {status === "available" ? (
                        <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-green-50 border border-green-200 rounded-xl gap-4 shadow-sm">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-green-900 text-lg">{searchedName}</p>
                                    <p className="text-green-600 font-medium">Domain is available. Secure it now!</p>
                                </div>
                            </div>
                            <button
                                onClick={handleBuyClick}
                                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all uppercase text-sm tracking-widest active:scale-95"
                            >
                                Buy this domain
                            </button>
                        </div>
                    ) : (
                        <div className={`flex items-center p-5 border rounded-xl shadow-sm ${status === 'occupied' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 ${status === 'occupied' ? 'bg-red-100' : 'bg-amber-100'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-6 h-6 ${status === 'occupied' ? 'text-red-600' : 'text-amber-600'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <p className={`font-bold text-lg ${status === 'occupied' ? 'text-red-900' : 'text-amber-900'}`}>{searchedName}</p>
                                <p className={`font-medium ${status === 'occupied' ? 'text-red-600' : 'text-amber-600'}`}>
                                    {status === 'occupied'
                                        ? "This domain is already occupied and cannot be registered."
                                        : "A request for this domain is already pending approval."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {isFormOpen && (
                <RequestForm
                    price="600.00"
                    onClose={() => setIsFormOpen(false)}
                />
            )}
        </div>
    );
}

