import { useState } from "react";
import collection1 from "@/assets/collection-beach-1.jpg";
import collection2 from "@/assets/collection-beach-2.jpg";
import collection3 from "@/assets/collection-beach-3.jpg";

const collections = [
  {
    id: 1,
    title: "Verão Tropical",
    description: "Cores vibrantes e estampas que celebram a natureza",
    image: collection1,
    items: "24 peças",
  },
  {
    id: 2,
    title: "Clássicos Atemporais",
    description: "Elegância minimalista para todas as ocasiões",
    image: collection2,
    items: "18 peças",
  },
  {
    id: 3,
    title: "Beach Essentials",
    description: "Conforto e estilo para dias perfeitos na praia",
    image: collection3,
    items: "32 peças",
  },
];

const FeaturedCollections = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="featured" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Coleções em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossas coleções exclusivas, criadas para valorizar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div
                  className={`transform transition-all duration-500 ${
                    hoveredId === collection.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-100"
                  }`}
                >
                  <span className="inline-block text-xs md:text-sm font-semibold text-primary bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-primary/30">
                    {collection.items}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {collection.title}
                  </h3>
                  
                  <p
                    className={`text-white/90 text-sm md:text-base mb-4 transition-all duration-500 ${
                      hoveredId === collection.id
                        ? "opacity-100 max-h-20"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {collection.description}
                  </p>

                  <button
                    className={`group/btn relative inline-flex items-center gap-2 text-white font-semibold tracking-wider text-sm transition-all duration-500 ${
                      hoveredId === collection.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <span className="relative z-10">VER COLEÇÃO</span>
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/50 transition-all duration-500 ${
                  hoveredId === collection.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;