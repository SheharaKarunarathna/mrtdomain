"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import SearchComponent from "@/components/SearchComponent";
import FeatureCards from "@/components/FeatureCards";
import RequestButton from "@/components/RequestButton";
import ProcessFlow from "@/components/ProcessFlow";
import PricingSection from "@/components/PricingSection";
import HostingEmailSection from "@/components/HostingEmailSection";
import FAQSection from "@/components/FAQSection";
import RequestForm from "@/components/RequestForm";
import UsagePolicy from "@/components/UsagePolicy";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [selectedPrice, setSelectedPrice] = useState("600.00");
  const fullText = "Then Hurry up! Reserve your mrt.lk subdomain now!";

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      subscription.unsubscribe();
    };
  }, []);

  const handlePlanSelect = async (planName: string, price: string) => {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      setSelectedPrice(price);
      setIsFormOpen(true);
    } else {
      // Redirect to signin with returnTo info
      window.location.href = `/signin?returnTo=page&plan=${planName}&price=${price}`;
    }
  };

  const renderStyledText = (text: string) => {
    const parts = text.split("mrt.lk");
    if (parts.length === 1) {
      return text;
    }

    const beforeMrt = parts[0];
    const afterMrt = parts.slice(1).join("mrt.lk");

    if (text.includes("mrt.lk")) {
      return (
        <>
          {beforeMrt}
          <span className="font-bold text-blue-800">mrt.lk</span>
          {afterMrt}
        </>
      );
    }
    return text;
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e0f2fe] text-black">
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

      {/* Top Right Navigation */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
        {user ? (
          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide border border-red-100"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/signin"
            className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide border border-blue-100"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:pl-[5%] md:pr-8">
        <br />
        {/* Hero Heading */}
        <h1 className="text-6xl md:text-[8rem] leading-tight md:leading-[0.85] font-black text-black tracking-tighter mb-8 md:mb-12">
          <div className="flex flex-col gap-2 md:gap-4">

            <span>ARE</span>
            <span>YOU IN</span>
            <span>MORATUWA?</span>
          </div>
        </h1>

        {/* Typing Text */}
        <p className="text-xl md:text-4xl text-blue-600 font-mono tracking-wide mb-12 md:mb-16">
          {renderStyledText(displayedText)}
          <span className="inline-block w-2 h-6 md:w-3 md:h-8 bg-blue-600 ml-1 align-middle animate-pulse"></span>
        </p>

        {/* Search Bar (Centered/Adjusted) */}
        <div className="flex flex-col md:flex-row items-center gap-4 max-w-4xl w-full mb-12">
          <div className="flex-1 w-full max-w-2xl">
            <SearchComponent />
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center space-x-8 text-sm font-mono text-gray-500 mb-12">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            System Operational
          </div>
          <div className="hidden md:block text-gray-300">|</div>
          <div className="text-xs md:text-sm">
            3 subdomains registered today
          </div>
        </div>

        {/* Description Paragraph */}
      </div>
      <div className="relative flex flex-col px-6 md:pl-[5%] md:pr-8 py-20">
        <p className="text-lg md:text-3xl text-blue-800 max-w-7xl leading-relaxed mb-12 text-center mx-auto">
          Elevate your digital footprint with a specialized <span className="font-mono text-gray-600 font-bold">mrt.lk</span> subdomain. Designed for the innovators of Moratuwa, our platform offers the perfect home for your next big project, student organization, or professional portfolio.
        </p>
        {/* <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
          
        </div> */}

      </div>
      {/* Footer Elements */}

      <div className="absolute bottom-8 right-8 z-20 text-xs text-slate-400 font-mono">
        © 2026 MRT.LK Registry
      </div>
      <div className="flex flex-col gap-1/10">
        <FeatureCards />
        <ProcessFlow />
        <PricingSection onSelectPlan={handlePlanSelect} />
        <HostingEmailSection />
        <FAQSection />
        <UsagePolicy onRequestClick={() => {
          setSelectedPrice("600.00");
          setIsFormOpen(true);
        }} />
      </div>
      {/* Feature Section (Pushed below fold) */}

      <ContactButton />

      {/* Request Form Modal */}
      {isFormOpen && (
        <RequestForm
          price={selectedPrice}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedPrice("600.00");
          }}
        />
      )}
    </div>

  );
}
