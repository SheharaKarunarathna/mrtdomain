"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // 1. Check if user exists in our profiles table for extra validation
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .select("email")
                .eq("email", email)
                .single();

            if (profileError || !profileData) {
                console.log("Profile check failed or not found:", profileError);
                // We'll still try to sign in, but this might be the reason for "not valid"
            }

            // 2. Perform Supabase Auth Sign In
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                // Better error messages for the user
                if (signInError.message.includes("Email not confirmed")) {
                    setError("Please confirm your email address before signing in.");
                } else if (signInError.message.includes("Invalid login credentials")) {
                    setError("Invalid email or password. Please check your details.");
                } else {
                    setError(signInError.message);
                }
                throw signInError;
            }

            console.log("Sign in successful:", data);
            router.push("/"); // Redirect to home on success
        } catch (err: any) {
            console.error("Sign in error:", err);
            // Error is already set above for specific cases
            if (!error) setError(err.message || "Invalid login credentials");
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

            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 z-10">
                <div className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
                        <p className="text-slate-500 text-sm">Sign into your mrt.lk account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-bold text-blue-900 mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-bold text-blue-900">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0B3D75] hover:bg-[#093260] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] tracking-wide uppercase text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-600 text-sm">
                            No account?{" "}
                            <Link
                                href="/signup"
                                className="text-[#0B3D75] font-bold hover:underline ml-1"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer simple */}
                <div className="bg-slate-50 py-3 text-center border-t border-slate-100">
                    <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
