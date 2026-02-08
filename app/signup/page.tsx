"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        org: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.fullName,
                        phone: formData.phone,
                        organization: formData.org,
                    }
                }
            });

            if (signUpError) throw signUpError;

            setSuccess(true);
            console.log("Sign up successful:", data);
        } catch (err: any) {
            setError(err.message || "An error occurred during sign up");
            console.error("Sign up error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#e0f2fe] flex items-center justify-center p-4 relative overflow-hidden">
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

            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 z-10">
                <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
                        <p className="text-slate-500 text-sm">Join the mrt.lk community</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm font-medium">
                                Registration successful! Please check your email for verification.
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Full Name */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Phone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="+94 XX XXX XXXX"
                                    required
                                />
                            </div>

                            {/* Organization/Details */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Organization / Purpose (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="org"
                                    value={formData.org}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="e.g. Student Club, Portfolio, Startup"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="Create a password"
                                    required
                                    minLength={6}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    placeholder="Confirm password"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0B3D75] hover:bg-[#093260] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] tracking-wide uppercase text-sm mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? "Creating account..." : "Sign Up"}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-600 text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/signin"
                                className="text-[#0B3D75] font-bold hover:underline ml-1"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 py-3 text-center border-t border-slate-100">
                    <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
