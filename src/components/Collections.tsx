import { useState, useEffect, useRef, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const collections = [
  {
    id: 1,
    title: "Sport Collection",
    description: "Estilo e performance para suas atividades na praia",
    image: collection1,
    color: "accent",
  },
  {
    id: 2,
    title: "Summer Elegance",
    description: "Sofisticação e charme para dias ensolarados",
    image: collection2,
    color: "coral",
  },
  {
    id: 3,
    title: "Active Fitness",
    description: "Movimento e liberdade com design exclusivo",
    image: collection3,
    color: "primary",
  },
];

const Collections = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollFade();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createRipple = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section 
      id="collections" 
      ref={(node) => {
        (elementRef as React.MutableRefObject<HTMLElement | null>).current = node;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`py-12 md:py-20 bg-secondary/30 scroll-fade-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Nossas Coleções
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Cada peça é criada para realçar sua beleza natural e proporcionar conforto absoluto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={createRipple}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} - Coleção Zoke Moda Praia`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{
                    transform: `translateY(${scrollY * 0.08 * (collection.id % 2 === 0 ? 1 : -1)}px) scale(${hoveredId === collection.id ? 1.1 : 1})`
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 text-primary-foreground transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="mb-5 text-primary-foreground/90">{collection.description}</p>
                <Button variant="hero" size="sm">
                  Explorar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
