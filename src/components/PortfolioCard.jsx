// Mock content rendered by item id
import { BorderTrail } from "./core/border-trail";
function MockContent({ id }) {
  switch (id) {
    case "gaming-1":
      return (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h3 className="text-4xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-500 z-10 text-center uppercase border-4 border-yellow-400 p-2 transform rotate-[3deg]">
            I Survived<br /><span className="text-yellow-400">100 Days</span>
          </h3>
        </div>
      );
    case "tech-1":
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-pulse blur-xl absolute" />
          <h3 className="text-3xl font-black text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10 text-center">
            GPT-5 IS<br /><span className="text-cyan-400">TERRIFYING</span>
          </h3>
        </div>
      );
    case "crypto-1":
      return (
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <h3 className="text-4xl font-black text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10 uppercase leading-none">
            BITCOIN<br /><span className="text-yellow-300 text-5xl">CRASH?</span>
          </h3>
          <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-yellow-300 rounded-full blur-[50px] opacity-20" />
        </div>
      );
    case "social-1":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-3xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500 z-10 text-center transform -rotate-3">
            0 to 100K<br /><span className="bg-black text-white px-2 mt-2 inline-block">IN 30 DAYS</span>
          </h3>
        </div>
      );
    case "gaming-2":
      return (
        <div className="absolute inset-0 flex items-center justify-center space-x-4">
          <h3 className="text-4xl font-black text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10 text-center">
            STOP DOING<br /><span className="text-red-500 text-5xl">THIS.</span>
          </h3>
        </div>
      );
    default:
      return null;
  }
}

export default function PortfolioCard({ item, onOpen }) {
  return (
   <div
  className="portfolio-item group relative overflow-hidden rounded-2xl bg-[#111] p-[2px] thumb-card transition-all duration-300 hover:scale-[1.02]"
  data-category={item.category}
>
  
  <BorderTrail />
  
      <div className={`relative aspect-video rounded-2xl overflow-hidden ${item.isReal ? "bg-black" : item.bgClass}`}>
        {item.isReal ? (
          <>
            <img
              src={item.image}
              alt={item.alt}
              onClick={() => onOpen && onOpen(item.id)}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 z-0 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
          </>
        ) : (
          <>
            <MockContent id={item.id} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </>
        )}
       <BorderTrail />
      </div>
    </div>
  );
}
