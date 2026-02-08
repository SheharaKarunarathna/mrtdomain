"use client";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface DomainRequest {
    id: string;
    desired_subdomain: string;
    status: "pending" | "approved" | "rejected";
    created_at: string;
    price: number;
}

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [requests, setRequests] = useState<DomainRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalPaid, setTotalPaid] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                window.location.href = "/";
                return;
            }
            setUser(session.user);

            const { data, error } = await supabase
                .from("domain_requests")
                .select("*")
                .eq("user_id", session.user.id)
                .order("created_at", { ascending: false });

            if (!error && data) {
                setRequests(data);
                const total = data
                    .filter(req => req.status === "approved" || req.status === "pending")
                    .reduce((sum, req) => sum + (Number(req.price) || 0), 0);
                setTotalPaid(total);
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved": return "bg-green-100 text-green-700 border-green-200";
            case "rejected": return "bg-red-100 text-red-700 border-red-200";
            default: return "bg-blue-100 text-blue-700 border-blue-200";
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#e0f2fe] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#e0f2fe] p-4 md:p-8 relative overflow-hidden">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <Link href="/" className="text-blue-600 font-bold flex items-center gap-2 mb-2 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">User Dashboard</h1>
                        <p className="text-slate-500 font-medium">Manage your mrt.lk subdomains and requests</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center min-w-[200px]">
                        <span className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Total Paid</span>
                        <span className="text-3xl font-black text-blue-600">Rs. {totalPaid.toLocaleString()}</span>
                    </div>
                </div>

                {/* Requests Table */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-900">Your Domain Requests</h2>
                        <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                            {requests.length} Total
                        </span>
                    </div>

                    {requests.length === 0 ? (
                        <div className="p-20 text-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 4.055c-2.168 0-4.03.69-5.603 1.958" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No domain requests yet</h3>
                            <p className="text-slate-500 mb-8 max-w-sm mx-auto">Ready to launch your project? Register your specialized .mrt.lk subdomain today.</p>
                            <Link href="/" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                Get Started
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                                        <th className="px-8 py-5">Subdomain</th>
                                        <th className="px-8 py-5 text-center">Status</th>
                                        <th className="px-8 py-5 text-center">Date</th>
                                        <th className="px-8 py-5 text-right">Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {requests.map((request) => (
                                        <tr key={request.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-lg font-bold text-slate-900 leading-none mb-1">
                                                        {request.desired_subdomain}
                                                        <span className="text-blue-600">.mrt.lk</span>
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-mono tracking-tighter uppercase">ID: {request.id.slice(0, 8)}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-current inline-block min-w-[100px] ${getStatusColor(request.status)}`}>
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-center text-sm font-medium text-slate-500">
                                                {new Date(request.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <span className="text-lg font-black text-slate-900">
                                                    Rs. {Number(request.price).toLocaleString()}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center text-slate-400 text-xs font-mono uppercase tracking-widest">
                    © 2026 MRT.LK Registry • Secure Dashboard
                </div>
            </div>
        </div>
    );
}
