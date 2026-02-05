interface RequestButtonProps {
    onClick?: () => void;
}

export default function RequestButton({ onClick }: RequestButtonProps) {
    return (
        <button
            onClick={onClick}
            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all duration-300 whitespace-nowrap h-full transform hover:scale-105 flex items-center gap-2 cursor-pointer"
        >
            <span>Request your subdomain</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
    );
}
