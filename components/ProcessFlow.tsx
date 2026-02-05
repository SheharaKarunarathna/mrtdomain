export default function ProcessFlow() {
    return (
        <div className="w-full py-24 relative z-10">
            <div className="text-center mb-20 px-4">
                <h2 className="text-blue-500 font-bold tracking-widest text-sm mb-4 uppercase">Process Flow</h2>
                <h3 className="text-4xl md:text-6xl font-black font-mono text-slate-900 mb-6">Launch your identity in minutes</h3>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                    A streamlined process designed for the modern web. From idea to online in four simple steps.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[100px] left-0 w-full h-20 -z-10 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path d="M50,50 C300,50 300,80 600,50 C900,20 900,50 1150,50"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeDasharray="10 10" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-4 relative">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-mono">STEP 01</div>
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Search</h4>
                        <p className="text-gray-500 text-sm max-w-[200px]">Find your perfect <span className="text-blue-800 text-m ">mrt.lk</span> domain name</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center group mt-0 md:mt-16">
                        <div className="mb-4 relative">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-mono">STEP 02</div>
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-400 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834-1.385l-1.25 1.25M6.166 4.365l-1.25-1.25M12 21.672V23m5.834-1.385l-1.25-1.25" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Select</h4>
                        <p className="text-gray-500 text-sm max-w-[200px]">Choose the ideal extension for you</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-4 relative">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-mono">STEP 03</div>
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Details</h4>
                        <p className="text-gray-500 text-sm max-w-[200px]">Enter your registrant information</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center group mt-0 md:mt-12">
                        <div className="mb-4 relative">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-mono">STEP 04</div>
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-blue-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Done</h4>
                        <p className="text-gray-500 text-sm max-w-[200px]">Go live and launch your vision</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
