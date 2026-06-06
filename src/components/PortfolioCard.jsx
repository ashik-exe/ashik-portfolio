import AnimatedBorder from "./AnimatedBorder";

function MockContent({ id }) {
  return null;
}

export default function PortfolioCard({ item, onOpen }) {
  return (
   <AnimatedBorder>
  <div
    className="portfolio-item group relative overflow-hidden rounded-2xl thumb-card transition-all duration-500 hover:scale-[1.03]"
    data-category={item.category}
  >
     

      <div
        className={`relative aspect-video rounded-2xl overflow-hidden ${
          item.isReal ? "bg-black" : item.bgClass
        }`}
        onClick={onOpen}
      >
        {item.isReal ? (
          <>
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500 pointer-events-none" />
          </>
        ) : (
          <MockContent id={item.id} />
        )}
      </div>
    </div>
    </AnimatedBorder>
  );
}