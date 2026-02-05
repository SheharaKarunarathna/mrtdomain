export default function SearchComponent() {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-sm border border-blue-100 p-2 w-full">
            <div className="flex items-center px-2 md:px-4 text-gray-400 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 hidden md:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className="font-mono text-xs md:text-sm">https://</span>
            </div>
            <input
                type="text"
                placeholder="your-name.mrt.lk"
                className="flex-1 px-2 md:px-4 py-2 outline-none font-mono text-sm md:text-base text-gray-700 bg-transparent min-w-0"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-md font-medium text-sm md:text-base flex items-center transition-colors shrink-0">
                Search
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 hidden md:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    );
}
