export default function FeatureCards() {
    return (
        <div className="w-full pb-24 pt-0 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 z-10 relative">
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
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="text-6xl mb-4 drop-shadow-md">🏀</span>
                <span className="text-xl text-blue-900 font-medium tracking-wide">sportname.mrt.lk</span>
            </div>
        </div>
    );
}
