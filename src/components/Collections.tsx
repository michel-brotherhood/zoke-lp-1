import { Button } from "@/components/ui/button";
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
  return (
    <section id="collections" className="py-12 md:py-20 bg-secondary/30">
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
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} - Coleção Zoke Moda Praia`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
