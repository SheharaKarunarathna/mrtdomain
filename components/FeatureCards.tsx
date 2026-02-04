export default function FeatureCards() {
    return (
        <div className="w-full py-24 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 z-10 relative bg-white/50 border-t border-blue-100 backdrop-blur-sm">
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="text-6xl mb-4 drop-shadow-md">🏢</span>
                <span className="text-xl text-blue-900 font-medium tracking-wide">clubname.mrt.lk</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="text-6xl mb-4 drop-shadow-md">🚀</span>
                <span className="text-xl text-blue-900 font-medium tracking-wide">project.mrt.lk</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="text-6xl mb-4 drop-shadow-md">👤</span>
                <span className="text-xl text-blue-900 font-medium tracking-wide">portfolio.mrt.lk</span>
            </div>
        </div>
    );
}
